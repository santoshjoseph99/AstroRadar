import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Request logger middleware to inspect browser User-Agent
app.use((req, res, next) => {
  if (req.url.startsWith('/api/flights')) {
    // Suppress logs for the frequent flight poll to keep console clean
    return next();
  }
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - UA: ${req.headers['user-agent']}`);
  next();
});

// Serve static files from the 'public' directory with cache-busting headers
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, filePath) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
}));

// Configure settings
const config = {
  latitude: parseFloat(process.env.LATITUDE) || 38.63991686,
  longitude: parseFloat(process.env.LONGITUDE) || -122.86682359,
  radiusKm: parseFloat(process.env.RADIUS_KM) || 50,
  locationName: process.env.LOCATION_NAME || 'Healdsburg, CA'
};

// Convert KM to NM for the API (1 km = 0.539957 NM)
const radiusNm = Math.min(250, Math.max(1, Math.round(config.radiusKm * 0.539957)));

console.log('--- Skylight Lite Server Launch Configuration ---');
console.log(`Location:     ${config.locationName}`);
console.log(`Coordinates:  Lat ${config.latitude}, Lon ${config.longitude}`);
console.log(`Radius:       ${config.radiusKm} km (${radiusNm} NM)`);
console.log(`Port:         ${PORT}`);
console.log('-------------------------------------------------');

const apiEndpoints = [
  { name: 'Airplanes.Live', url: (lat, lon, rad) => `https://api.airplanes.live/v2/point/${lat}/${lon}/${rad}` },
  { name: 'ADSB.lol', url: (lat, lon, rad) => `https://api.adsb.lol/v2/point/${lat}/${lon}/${rad}` },
  { name: 'ADSB.one', url: (lat, lon, rad) => `https://api.adsb.one/v2/point/${lat}/${lon}/${rad}` }
];
let activeApiIndex = 0;
let lastApiResetTime = Date.now();
const API_RESET_INTERVAL_MS = 5 * 60 * 1000;

// Cache structure for flight data
let flightCache = {
  data: null,
  lastFetched: 0,
  isFetching: false
};

const CACHE_TTL_MS = 5000; // 5 seconds cache TTL

// Helper to fetch flight data from adsb.lol
async function fetchFlightData() {
  const now = Date.now();

  // If cache is valid, return it
  if (flightCache.data && (now - flightCache.lastFetched < CACHE_TTL_MS)) {
    return flightCache.data;
  }

  // If already fetching, return previous cache or wait (here we just return the previous cache to avoid blocking)
  if (flightCache.isFetching && flightCache.data) {
    return flightCache.data;
  }

  flightCache.isFetching = true;
  try {
    // Periodically check if we should attempt to restore Priority 1 (index 0) API
    if (activeApiIndex > 0 && (now - lastApiResetTime > API_RESET_INTERVAL_MS)) {
      console.log(`[${new Date().toISOString()}] Attempting recovery: Resetting API source back to primary (${apiEndpoints[0].name})`);
      activeApiIndex = 0;
      lastApiResetTime = now;
    }

    let rawData = null;
    let success = false;
    let attempts = 0;

    while (!success && attempts < apiEndpoints.length) {
      const currentIdx = (activeApiIndex + attempts) % apiEndpoints.length;
      const endpoint = apiEndpoints[currentIdx];
      const apiUrl = endpoint.url(config.latitude, config.longitude, radiusNm);

      try {
        console.log(`[${new Date().toISOString()}] Fetching live flights from source: ${endpoint.name} (${apiUrl})`);
        const response = await fetch(apiUrl, {
          headers: {
            'Accept': 'application/json',
            'Accept-Encoding': 'gzip'
          }
        });

        if (response.ok) {
          rawData = await response.json();
          activeApiIndex = currentIdx; // Lock in this source as the current active API
          success = true;
        } else {
          console.warn(`[${new Date().toISOString()}] API ${endpoint.name} returned code ${response.status}`);
        }
      } catch (err) {
        console.warn(`[${new Date().toISOString()}] Failed to connect to API ${endpoint.name}: ${err.message}`);
      }
      attempts++;
    }

    if (!success) {
      throw new Error('All ADSB API endpoints are unreachable.');
    }
    
    // Normalize and clean flight data to reduce payload size
    // Extract: hex, callsign, altitude, speed, track, lat, lon, type
    const flights = (rawData.ac || []).map(ac => ({
      hex: ac.hex || '',
      callsign: (ac.call || '').trim(),
      registration: (ac.r || '').trim(),
      type: (ac.t || '').trim(),
      lat: ac.lat || 0,
      lon: ac.lon || 0,
      altitude: ac.alt_baro === 'ground' ? 0 : (parseInt(ac.alt_baro) || 0),
      speed: Math.round(ac.gs || 0),
      track: Math.round(ac.track || 0),
      squawk: ac.squawk || '',
      military: !!(ac.dbFlags & 1)
    })).filter(ac => ac.lat !== 0 && ac.lon !== 0); // Must have coordinates

    flightCache.data = {
      flights,
      timestamp: now,
      totalCount: flights.length
    };
    flightCache.lastFetched = now;
    console.log(`[${new Date().toISOString()}] Found ${flights.length} flights in range.`);
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Error fetching flights: ${error.message}`);
    // If we have stale cache, keep it but mark it as stale
    if (flightCache.data) {
      console.log(`[${new Date().toISOString()}] Returning stale flight cache.`);
    } else {
      flightCache.data = {
        flights: [],
        timestamp: now,
        error: error.message,
        totalCount: 0
      };
    }
  } finally {
    flightCache.isFetching = false;
  }

  return flightCache.data;
}

// Endpoint to retrieve configuration
app.get('/api/config', (req, res) => {
  res.json(config);
});

// Endpoint to retrieve flights
app.get('/api/flights', async (req, res) => {
  try {
    const data = await fetchFlightData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Cache for flight routes (callsign -> route object)
const routeCache = new Map();

// Endpoint to retrieve flight route details by callsign
app.get('/api/route', async (req, res) => {
  const callsign = (req.query.callsign || '').trim().toUpperCase();
  if (!callsign) {
    return res.status(400).json({ error: 'Callsign parameter required' });
  }

  // Check memory cache
  if (routeCache.has(callsign)) {
    return res.json(routeCache.get(callsign));
  }

  try {
    console.log(`[${new Date().toISOString()}] Fetching route for: ${callsign}`);
    const response = await fetch(`https://api.adsbdb.com/v0/callsign/${callsign}`, {
      headers: { 'Accept': 'application/json' }
    });
    
    if (response.status === 404) {
      const unknownRoute = { callsign, found: false };
      routeCache.set(callsign, unknownRoute);
      return res.json(unknownRoute);
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const fr = data?.response?.flightroute;

    if (fr) {
      const routeInfo = {
        callsign,
        found: true,
        origin: fr.origin?.iata_code || fr.origin?.icao_code || '',
        destination: fr.destination?.iata_code || fr.destination?.icao_code || '',
        originName: fr.origin?.municipality || fr.origin?.name || '',
        destName: fr.destination?.municipality || fr.destination?.name || '',
        airline: fr.airline?.name || ''
      };
      routeCache.set(callsign, routeInfo);
      return res.json(routeInfo);
    } else {
      const unknownRoute = { callsign, found: false };
      routeCache.set(callsign, unknownRoute);
      return res.json(unknownRoute);
    }
  } catch (error) {
    console.error(`Error fetching route for ${callsign}: ${error.message}`);
    // Return empty route on error but don't cache long-term
    return res.json({ callsign, found: false, error: error.message });
  }
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Skylight Lite server running at http://localhost:${PORT}`);
  console.log(`To view on your projector, connect it to the same Wi-Fi and open: http://<your-mac-ip>:${PORT}`);
});
