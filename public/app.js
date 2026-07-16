// Database of major bright stars and constellations
// RA is in decimal hours (0 - 24)
// Dec is in decimal degrees (-90 to +90)
// Magnitude: lower numbers are brighter (Sirius is -1.46, Vega is 0.0)

const STARS = [
  // Ursa Major (Big Dipper)
  { id: "dubhe", name: "Dubhe", ra: 11.06, dec: 61.75, mag: 1.8 },
  { id: "merak", name: "Merak", ra: 11.03, dec: 56.38, mag: 2.3 },
  { id: "phecda", name: "Phecda", ra: 11.89, dec: 53.69, mag: 2.4 },
  { id: "megrez", name: "Megrez", ra: 12.25, dec: 57.03, mag: 3.3 },
  { id: "alioth", name: "Alioth", ra: 12.90, dec: 55.96, mag: 1.8 },
  { id: "mizar", name: "Mizar", ra: 13.40, dec: 54.92, mag: 2.2 },
  { id: "alkaid", name: "Alkaid", ra: 13.79, dec: 49.31, mag: 1.9 },

  // Ursa Minor (Little Dipper)
  { id: "polaris", name: "Polaris", ra: 2.53, dec: 89.26, mag: 1.97 }, // The North Star
  { id: "yildun", name: "Yildun", ra: 17.53, dec: 86.58, mag: 4.35 },
  { id: "urodelus", name: "Urodelus", ra: 16.76, dec: 77.79, mag: 4.25 },
  { id: "ahfa", name: "Ahfa", ra: 15.74, dec: 71.84, mag: 4.20 },
  { id: "anwar", name: "Anwar", ra: 15.35, dec: 70.34, mag: 5.00 },
  { id: "kochab", name: "Kochab", ra: 14.85, dec: 74.15, mag: 2.05 },
  { id: "pherkad", name: "Pherkad", ra: 15.35, dec: 71.84, mag: 3.00 },

  // Cassiopeia (W-shape)
  { id: "caph", name: "Caph", ra: 0.15, dec: 59.15, mag: 2.3 },
  { id: "schedar", name: "Schedar", ra: 0.68, dec: 56.54, mag: 2.2 },
  { id: "gamma_cas", name: "Gamma Cas", ra: 0.95, dec: 60.72, mag: 2.2 },
  { id: "ruchbah", name: "Ruchbah", ra: 1.43, dec: 60.23, mag: 2.7 },
  { id: "segin", name: "Segin", ra: 1.90, dec: 63.67, mag: 3.4 },

  // Orion
  { id: "betelgeuse", name: "Betelgeuse", ra: 5.92, dec: 7.41, mag: 0.5 },
  { id: "rigel", name: "Rigel", ra: 5.25, dec: -8.20, mag: 0.1 },
  { id: "bellatrix", name: "Bellatrix", ra: 5.42, dec: 6.35, mag: 1.6 },
  { id: "alnilam", name: "Alnilam", ra: 5.60, dec: -1.20, mag: 1.7 },
  { id: "alnitak", name: "Alnitak", ra: 5.68, dec: -1.94, mag: 1.7 },
  { id: "mintaka", name: "Mintaka", ra: 5.53, dec: -0.30, mag: 2.2 },
  { id: "saiph", name: "Saiph", ra: 5.79, dec: -9.67, mag: 2.1 },

  // Summer Triangle & Surrounds
  { id: "vega", name: "Vega", ra: 18.62, dec: 38.78, mag: 0.0 },
  { id: "altair", name: "Altair", ra: 19.85, dec: 8.87, mag: 0.8 },
  { id: "deneb", name: "Deneb", ra: 20.69, dec: 45.28, mag: 1.25 },

  // Other Major Stars
  { id: "arcturus", name: "Arcturus", ra: 14.26, dec: 19.18, mag: -0.05 },
  { id: "capella", name: "Capella", ra: 5.28, dec: 46.00, mag: 0.08 },
  { id: "procyon", name: "Procyon", ra: 7.66, dec: 5.22, mag: 0.34 },
  { id: "sirius", name: "Sirius", ra: 6.75, dec: -16.72, mag: -1.46 },
  { id: "aldebaran", name: "Aldebaran", ra: 4.60, dec: 16.51, mag: 0.85 },
  { id: "castor", name: "Castor", ra: 7.58, dec: 31.89, mag: 1.58 },
  { id: "pollux", name: "Pollux", ra: 7.75, dec: 28.02, mag: 1.14 },
  { id: "spica", name: "Spica", ra: 13.42, dec: -11.16, mag: 0.98 },
  { id: "antares", name: "Antares", ra: 16.49, dec: -26.43, mag: 1.06 },
  { id: "fomalhaut", name: "Fomalhaut", ra: 22.96, dec: -29.62, mag: 1.16 }
];

const CONSTELLATIONS = [
  {
    name: "Ursa Major (Big Dipper)",
    connections: [
      ["merak", "dubhe"],
      ["dubhe", "megrez"],
      ["merak", "phecda"],
      ["phecda", "megrez"],
      ["megrez", "alioth"],
      ["alioth", "mizar"],
      ["mizar", "alkaid"]
    ]
  },
  {
    name: "Ursa Minor (Little Dipper)",
    connections: [
      ["polaris", "yildun"],
      ["yildun", "urodelus"],
      ["urodelus", "ahfa"],
      ["ahfa", "anwar"],
      ["anwar", "kochab"],
      ["kochab", "pherkad"],
      ["pherkad", "ahfa"]
    ]
  },
  {
    name: "Cassiopeia",
    connections: [
      ["caph", "schedar"],
      ["schedar", "gamma_cas"],
      ["gamma_cas", "ruchbah"],
      ["ruchbah", "segin"]
    ]
  },
  {
    name: "Orion",
    connections: [
      ["betelgeuse", "bellatrix"],
      ["betelgeuse", "alnitak"],
      ["bellatrix", "mintaka"],
      ["rigel", "saiph"],
      ["rigel", "mintaka"],
      ["saiph", "alnitak"],
      ["alnitak", "alnilam"],
      ["alnilam", "mintaka"]
    ]
  },
  {
    name: "Summer Triangle",
    connections: [
      ["vega", "deneb"],
      ["deneb", "altair"],
      ["altair", "vega"]
    ]
  }
];

// Safe local storage helpers to prevent SecurityError crash on secure/embedded browsers
function safeGetLocalStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.warn('localStorage is not accessible:', e);
    return null;
  }
}

function safeSetLocalStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn('localStorage write failed:', e);
  }
}

// Configuration and State
let config = {
  latitude: 38.63991686,
  longitude: -122.86682359,
  radiusKm: 50,
  locationName: 'Healdsburg, CA'
};

// Calibration settings (loaded from localStorage or defaulted)
let calibration = {
  scale: 1.0,
  rotation: 0, // in degrees
  offsetX: 0,  // in pixels
  offsetY: 0,  // in pixels
  minElevation: 5, // in degrees
  brightness: 100, // percentage
  theme: 'classic',
  showStars: false,
  showConstellations: false,
  showStarNames: false,
  showGrid: true,
  showTrails: true,
  showDetails: true,
  showSpotlight: true
};

const isStandalone = window.location.protocol === 'file:' || 
                     window.location.hostname === 'appassets.androidplatform.net' || 
                     safeGetLocalStorage('skylight_standalone') === 'true';

// Application state
let flights = [];
let flightTrails = {}; // hex -> array of {x, y, timestamp}
let interpolatedFlights = {}; // hex -> {lat, lon, alt, speed, track, x, y, active}
let lastFetchTime = 0;
let connectionStatus = 'connecting';

// DOM elements
const canvas = document.getElementById('projection-canvas');
const ctx = canvas.getContext('2d');

// Initialize settings from localStorage if available
function loadSettings() {
  const saved = safeGetLocalStorage('skylight_calibration');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      calibration = { ...calibration, ...parsed };
      console.log('Loaded calibration settings from localStorage', calibration);
    } catch (e) {
      console.error('Failed to parse saved calibration settings', e);
    }
  } else {
    // Default to mono (High Contrast) and show details (ON) on Android app first load
    if (isStandalone) {
      calibration.theme = 'mono';
      calibration.showDetails = true;
    }
  }
  syncSettingsToUI();
}

function saveSettings() {
  safeSetLocalStorage('skylight_calibration', JSON.stringify(calibration));
}

function syncSettingsToUI() {
  // Sync sliders
  document.getElementById('input-scale').value = calibration.scale;
  document.getElementById('input-rotation').value = calibration.rotation;
  document.getElementById('input-offsetX').value = calibration.offsetX;
  document.getElementById('input-offsetY').value = calibration.offsetY;
  document.getElementById('input-elevation').value = calibration.minElevation;
  document.getElementById('input-brightness').value = calibration.brightness;
  document.getElementById('theme-selector').value = calibration.theme;

  // Sync checkboxes
  document.getElementById('toggle-stars').checked = calibration.showStars;
  document.getElementById('toggle-constellations').checked = calibration.showConstellations;
  document.getElementById('toggle-starnames').checked = calibration.showStarNames;
  document.getElementById('toggle-grid').checked = calibration.showGrid;
  document.getElementById('toggle-trails').checked = calibration.showTrails;
  document.getElementById('toggle-flightdetails').checked = calibration.showDetails;
  document.getElementById('toggle-spotlight').checked = calibration.showSpotlight;

  // Sync value text displays
  document.getElementById('val-scale').textContent = `${calibration.scale.toFixed(2)}x`;
  document.getElementById('val-rotation').textContent = `${calibration.rotation}°`;
  document.getElementById('val-offsetX').textContent = `${calibration.offsetX}px`;
  document.getElementById('val-offsetY').textContent = `${calibration.offsetY}px`;
  document.getElementById('val-elevation').textContent = `${calibration.minElevation}°`;
  document.getElementById('val-brightness').textContent = `${calibration.brightness}%`;
}

// Reset helper
window.resetSetting = function(type) {
  if (type === 'scale') calibration.scale = 1.0;
  if (type === 'rotation') calibration.rotation = 0;
  if (type === 'offsetX') calibration.offsetX = 0;
  if (type === 'offsetY') calibration.offsetY = 0;
  syncSettingsToUI();
  saveSettings();
};

// UI Toggles
window.toggleControlPanel = function() {
  const panel = document.getElementById('control-panel');
  panel.classList.toggle('hidden');
};

// Setup input listeners
function setupListeners() {
  // Control Panel toggles
  document.getElementById('input-scale').addEventListener('input', (e) => {
    calibration.scale = parseFloat(e.target.value);
    document.getElementById('val-scale').textContent = `${calibration.scale.toFixed(2)}x`;
    saveSettings();
  });

  document.getElementById('input-rotation').addEventListener('input', (e) => {
    calibration.rotation = parseInt(e.target.value);
    document.getElementById('val-rotation').textContent = `${calibration.rotation}°`;
    saveSettings();
  });

  document.getElementById('input-offsetX').addEventListener('input', (e) => {
    calibration.offsetX = parseInt(e.target.value);
    document.getElementById('val-offsetX').textContent = `${calibration.offsetX}px`;
    saveSettings();
  });

  document.getElementById('input-offsetY').addEventListener('input', (e) => {
    calibration.offsetY = parseInt(e.target.value);
    document.getElementById('val-offsetY').textContent = `${calibration.offsetY}px`;
    saveSettings();
  });

  document.getElementById('input-elevation').addEventListener('input', (e) => {
    calibration.minElevation = parseInt(e.target.value);
    document.getElementById('val-elevation').textContent = `${calibration.minElevation}°`;
    saveSettings();
  });

  document.getElementById('input-brightness').addEventListener('input', (e) => {
    calibration.brightness = parseInt(e.target.value);
    document.getElementById('val-brightness').textContent = `${calibration.brightness}%`;
    saveSettings();
  });

  document.getElementById('theme-selector').addEventListener('change', (e) => {
    calibration.theme = e.target.value;
    saveSettings();
  });

  // Checkboxes
  document.getElementById('toggle-constellations').addEventListener('change', (e) => {
    calibration.showConstellations = e.target.checked;
    saveSettings();
  });

  document.getElementById('toggle-starnames').addEventListener('change', (e) => {
    calibration.showStarNames = e.target.checked;
    saveSettings();
  });

  document.getElementById('toggle-stars').addEventListener('change', (e) => {
    calibration.showStars = e.target.checked;
    saveSettings();
  });

  document.getElementById('toggle-grid').addEventListener('change', (e) => {
    calibration.showGrid = e.target.checked;
    saveSettings();
  });

  document.getElementById('toggle-trails').addEventListener('change', (e) => {
    calibration.showTrails = e.target.checked;
    saveSettings();
  });

  document.getElementById('toggle-flightdetails').addEventListener('change', (e) => {
    calibration.showDetails = e.target.checked;
    saveSettings();
  });

  document.getElementById('toggle-spotlight').addEventListener('change', (e) => {
    calibration.showSpotlight = e.target.checked;
    saveSettings();
  });

  // Double click canvas to toggle fullscreen
  canvas.addEventListener('dblclick', toggleFullscreen);

  // Single click canvas to toggle TV Settings Menu (highly compatible with TV remote OK key clicks)
  canvas.addEventListener('click', (e) => {
    if (e.target === canvas) {
      toggleTvMenu();
    }
  });

  // Keyboard controls
  window.addEventListener('keydown', (e) => {
    // 1. Check if TV Menu is open, route remote inputs to it
    if (tvMenuOpen) {
      if (e.key === 'ArrowUp' || e.keyCode === 19 || e.keyCode === 38) { // Up
        e.preventDefault();
        tvMenuIndex = (tvMenuIndex - 1 + tvMenuItems.length) % tvMenuItems.length;
        renderTvMenu();
      } else if (e.key === 'ArrowDown' || e.keyCode === 20 || e.keyCode === 40) { // Down
        e.preventDefault();
        tvMenuIndex = (tvMenuIndex + 1) % tvMenuItems.length;
        renderTvMenu();
      } else if (e.key === 'ArrowLeft' || e.keyCode === 21 || e.keyCode === 37) { // Left
        e.preventDefault();
        adjustTvSetting(tvMenuItems[tvMenuIndex], -1);
      } else if (e.key === 'ArrowRight' || e.keyCode === 22 || e.keyCode === 39) { // Right
        e.preventDefault();
        adjustTvSetting(tvMenuItems[tvMenuIndex], 1);
      } else if (e.key === 'Enter' || e.keyCode === 23 || e.keyCode === 13) { // OK
        e.preventDefault();
        if (tvMenuItems[tvMenuIndex].type === 'action' || tvMenuItems[tvMenuIndex].id === 'close') {
          toggleTvMenu();
        } else if (tvMenuItems[tvMenuIndex].type === 'toggle') {
          adjustTvSetting(tvMenuItems[tvMenuIndex], 1);
        }
      } else if (e.key === 'Escape' || e.keyCode === 4 || e.keyCode === 27 || e.keyCode === 82 || e.keyCode === 93) { // Back / Menu
        e.preventDefault();
        toggleTvMenu();
      }
      return;
    }

    // 2. Open TV settings overlay via Menu button, back button, context menu, or C key
    // Android TV Menu button code is 82.
    if (e.keyCode === 82 || e.keyCode === 93 || e.key === 'c' || e.key === 'C') {
      e.preventDefault();
      toggleTvMenu();
      return;
    }

    const step = e.shiftKey ? 10 : 2; // hold shift for faster movement
    
    // Ignore keyboard shortcuts if user is typing in any input/textarea fields
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
      return;
    }

    switch (e.key.toLowerCase()) {
      case 'f':
        toggleFullscreen();
        break;
      case 'arrowleft':
        calibration.offsetX -= step;
        syncSettingsToUI();
        saveSettings();
        e.preventDefault();
        break;
      case 'arrowright':
        calibration.offsetX += step;
        syncSettingsToUI();
        saveSettings();
        e.preventDefault();
        break;
      case 'arrowup':
        calibration.offsetY -= step;
        syncSettingsToUI();
        saveSettings();
        e.preventDefault();
        break;
      case 'arrowdown':
        calibration.offsetY += step;
        syncSettingsToUI();
        saveSettings();
        e.preventDefault();
        break;
      case '[':
        calibration.rotation = (calibration.rotation - 1 + 180) % 360 - 180;
        syncSettingsToUI();
        saveSettings();
        break;
      case ']':
        calibration.rotation = (calibration.rotation + 1 + 180) % 360 - 180;
        syncSettingsToUI();
        saveSettings();
        break;
      case '-':
      case '_':
        calibration.scale = Math.max(0.3, calibration.scale - 0.02);
        syncSettingsToUI();
        saveSettings();
        break;
      case '+':
      case '=':
        calibration.scale = Math.min(4.0, calibration.scale + 0.02);
        syncSettingsToUI();
        saveSettings();
        break;
      case 'r':
        // Reset all calibration to code defaults
        calibration = {
          scale: 1.0,
          rotation: 0,
          offsetX: 0,
          offsetY: 0,
          minElevation: 5,
          brightness: 100,
          theme: isStandalone ? 'mono' : 'classic',
          showStars: false,
          showConstellations: false,
          showStarNames: false,
          showGrid: true,
          showTrails: true,
          showDetails: true,
          showSpotlight: true
        };
        syncSettingsToUI();
        saveSettings();
        if (tvMenuOpen) renderTvMenu();
        break;
    }
  });

  // Handle window resizing
  window.addEventListener('resize', resizeCanvas);
}

function toggleFullscreen() {
  const docEl = document.documentElement;
  // Fallbacks for older browsers (Chrome 66 requires webkit prefix)
  const requestFS = docEl.requestFullscreen || docEl.webkitRequestFullscreen || docEl.mozRequestFullScreen || docEl.msRequestFullscreen;
  const exitFS = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
  const isFullScreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullScreenElement;

  if (!isFullScreen) {
    if (requestFS) {
      const p = requestFS.call(docEl);
      // Chrome 66 returns undefined instead of a Promise
      if (p && p.catch) {
        p.catch(err => console.warn('Fullscreen request rejected:', err));
      }
    }
  } else {
    if (exitFS) {
      exitFS.call(document);
    }
  }
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// ----------------------------------------------------
// ASTRONOMICAL CALCULATIONS
// ----------------------------------------------------

/**
 * Calculates Local Sidereal Time (LST) in degrees.
 * Based on current UTC time and observer longitude.
 */
function getLocalSiderealTime(lonDeg) {
  const now = new Date();
  
  // Calculate Julian days since J2000.0 (January 1.5, 2000 UTC)
  // J2000 epoch is 2451545.0 Julian Date
  // milliseconds since 1970 epoch divided by ms in a day gives Julian date addition
  const UTC_ms = now.getTime();
  const julianDate = (UTC_ms / 86400000) + 2440587.5;
  const d = julianDate - 2451545.0; 

  // Greenwich Mean Sidereal Time (GMST) in degrees
  let gmst = (280.46061837 + 360.98564736629 * d) % 360;
  if (gmst < 0) gmst += 360;

  // Local Sidereal Time (LST)
  let lst = (gmst + lonDeg) % 360;
  if (lst < 0) lst += 360;

  return lst;
}

/**
 * Converts Right Ascension (hours) and Declination (degrees) to local Altitude and Azimuth.
 */
function raDecToAltAz(raHours, decDeg, latDeg, lonDeg) {
  const lat = latDeg * Math.PI / 180;
  const dec = decDeg * Math.PI / 180;
  const lst = getLocalSiderealTime(lonDeg);
  const ra = raHours * 15; // 1 hour RA = 15 degrees
  
  let ha = (lst - ra) * Math.PI / 180; // Hour angle in radians
  
  // sin(Alt) = sin(Lat) * sin(Dec) + cos(Lat) * cos(Dec) * cos(HA)
  const sinAlt = Math.sin(lat) * Math.sin(dec) + Math.cos(lat) * Math.cos(dec) * Math.cos(ha);
  const alt = Math.asin(sinAlt);
  
  const cosAlt = Math.cos(alt);
  let az = 0;
  if (cosAlt > 0.0001) {
    const cosAz = (Math.sin(dec) - Math.sin(lat) * sinAlt) / (Math.cos(lat) * cosAlt);
    const sinAz = -Math.sin(ha) * Math.cos(dec) / cosAlt;
    az = Math.atan2(sinAz, cosAz);
  }
  
  let azDeg = az * 180 / Math.PI;
  let altDeg = alt * 180 / Math.PI;
  
  if (azDeg < 0) azDeg += 360;
  
  return { alt: altDeg, az: azDeg };
}

// ----------------------------------------------------
// GEOGRAPHICAL / RADAR CALCULATIONS
// ----------------------------------------------------

/**
 * Calculates bearing and distance between two latitude/longitude points.
 * Returns bearing in degrees (0-360) and ground distance in km.
 */
function getBearingAndDistance(lat1Deg, lon1Deg, lat2Deg, lon2Deg) {
  const lat1 = lat1Deg * Math.PI / 180;
  const lon1 = lon1Deg * Math.PI / 180;
  const lat2 = lat2Deg * Math.PI / 180;
  const lon2 = lon2Deg * Math.PI / 180;
  
  const dLon = lon2 - lon1;
  
  // Bearing
  const y = Math.sin(dLon) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
  let bearing = Math.atan2(y, x) * 180 / Math.PI;
  if (bearing < 0) bearing += 360;
  
  // Distance using Haversine Formula
  const dLat = lat2 - lat1;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const earthRadiusKm = 6371;
  const distanceKm = earthRadiusKm * c;
  
  return { bearing, distanceKm };
}

/**
 * Converts altitude (feet) and ground distance (km) to an Elevation Angle in degrees.
 */
function getFlightElevation(altFeet, distanceKm) {
  if (distanceKm === 0) return 90;
  const altKm = altFeet * 0.0003048; // Convert feet to km
  const elevationRad = Math.atan2(altKm, distanceKm);
  return elevationRad * 180 / Math.PI;
}

// ----------------------------------------------------
// CANVAS RENDERING ENGINE
// ----------------------------------------------------

// Get Color Themes
function getThemeStyles() {
  const theme = calibration.theme;
  
  // opacity scaling based on brightness setting
  const opacityMult = calibration.brightness / 100;
  
  const styles = {
    bg: '#02040e',
    grid: `rgba(45, 58, 99, ${0.35 * opacityMult})`,
    gridText: `rgba(148, 163, 184, ${0.5 * opacityMult})`,
    star: `rgba(255, 255, 255, ${opacityMult})`,
    starGlow: `rgba(253, 244, 215, ${0.4 * opacityMult})`,
    constellation: `rgba(96, 165, 250, ${0.15 * opacityMult})`,
    starText: `rgba(148, 163, 184, ${0.45 * opacityMult})`,
    flight: `rgba(255, 255, 255, ${opacityMult})`,
    flightTrail: `rgba(59, 130, 246, ${0.6 * opacityMult})`,
    flightGlow: `rgba(59, 130, 246, ${0.3 * opacityMult})`,
    flightText: `rgba(241, 245, 249, ${0.85 * opacityMult})`,
    flightTextBg: `rgba(10, 16, 44, ${0.8 * opacityMult})`,
    milFlight: `rgba(239, 68, 68, ${opacityMult})`,
    milFlightTrail: `rgba(239, 68, 68, ${0.5 * opacityMult})`
  };

  if (theme === 'radar') {
    styles.bg = '#000000';
    styles.grid = `rgba(0, 230, 118, ${0.3 * opacityMult})`;
    styles.gridText = `rgba(0, 230, 118, ${0.6 * opacityMult})`;
    styles.star = `rgba(0, 230, 118, ${0.7 * opacityMult})`;
    styles.starGlow = 'transparent';
    styles.constellation = `rgba(0, 230, 118, ${0.12 * opacityMult})`;
    styles.starText = `rgba(0, 230, 118, ${0.4 * opacityMult})`;
    styles.flight = `rgba(0, 255, 0, ${opacityMult})`;
    styles.flightTrail = `rgba(0, 200, 83, ${0.5 * opacityMult})`;
    styles.flightGlow = `rgba(0, 255, 0, ${0.25 * opacityMult})`;
    styles.flightText = `rgba(0, 255, 0, ${0.9 * opacityMult})`;
    styles.flightTextBg = `rgba(0, 10, 0, ${0.85 * opacityMult})`;
    styles.milFlight = `rgba(255, 235, 59, ${opacityMult})`; // yellow warning for military in radar
    styles.milFlightTrail = `rgba(255, 235, 59, ${0.4 * opacityMult})`;
  } else if (theme === 'mono') {
    styles.bg = '#000000';
    styles.grid = `rgba(255, 255, 255, ${0.2 * opacityMult})`;
    styles.gridText = `rgba(255, 255, 255, ${0.5 * opacityMult})`;
    styles.star = `rgba(255, 255, 255, ${opacityMult})`;
    styles.starGlow = 'transparent';
    styles.constellation = `rgba(255, 255, 255, ${0.1 * opacityMult})`;
    styles.starText = `rgba(255, 255, 255, ${0.5 * opacityMult})`;
    styles.flight = `rgba(255, 255, 255, ${opacityMult})`;
    styles.flightTrail = `rgba(255, 255, 255, ${0.3 * opacityMult})`;
    styles.flightGlow = 'transparent';
    styles.flightText = `rgba(255, 255, 255, ${0.9 * opacityMult})`;
    styles.flightTextBg = `rgba(0, 0, 0, ${0.9 * opacityMult})`;
    styles.milFlight = `rgba(255, 255, 255, ${opacityMult})`;
    styles.milFlightTrail = `rgba(255, 255, 255, ${0.3 * opacityMult})`;
  } else if (theme === 'nebula') {
    styles.bg = '#02020a';
    styles.grid = `rgba(139, 92, 246, ${0.25 * opacityMult})`;
    styles.gridText = `rgba(167, 139, 250, ${0.5 * opacityMult})`;
    styles.star = `rgba(255, 255, 255, ${opacityMult})`;
    styles.starGlow = `rgba(192, 132, 252, ${0.3 * opacityMult})`;
    styles.constellation = `rgba(139, 92, 246, ${0.1 * opacityMult})`;
    styles.starText = `rgba(167, 139, 250, ${0.45 * opacityMult})`;
    styles.flight = `rgba(255, 255, 255, ${opacityMult})`;
    styles.flightTrail = `rgba(236, 72, 153, ${0.6 * opacityMult})`; // pink trails
    styles.flightGlow = `rgba(236, 72, 153, ${0.3 * opacityMult})`;
    styles.flightText = `rgba(255, 255, 255, ${0.85 * opacityMult})`;
    styles.flightTextBg = `rgba(15, 10, 30, ${0.8 * opacityMult})`;
    styles.milFlight = `rgba(239, 68, 68, ${opacityMult})`;
    styles.milFlightTrail = `rgba(239, 68, 68, ${0.4 * opacityMult})`;
  }

  return styles;
}

// Dynamic rendering variables interpolated smoothly for Focus/Spotlight transitions
let renderScale = null;
let renderOffsetX = null;
let renderOffsetY = null;

/**
 * Projects a point from Alt/Az coordinates onto the 2D canvas.
 * Applies center offsets, rotation, and scaling calibrated for the projector.
 */
function getCanvasCoordinates(alt, az, centerX, centerY, radiusPixels) {
  // If alt is negative, it's below the horizon (not rendered)
  if (alt < 0) return null;

  // Initialize render coordinates to match current user calibration
  if (renderScale === null) {
    renderScale = calibration.scale;
    renderOffsetX = calibration.offsetX;
    renderOffsetY = calibration.offsetY;
  }

  // Zenith (alt=90) maps to center (distance=0)
  // Horizon (alt=0) maps to outer boundary (distance=radiusPixels)
  // Distance from center of sky dome (in pixels)
  const dist = radiusPixels * (90 - alt) / 90;

  // Azimuth is 0 at True North, 90 at East, etc.
  // Convert Azimuth to standard screen coordinates (where 0 rad is Up/North)
  // Shift by 90 degrees counter-clockwise to match Math.cos/sin unit circle, then flip rotation
  const angleRad = (az - 90) * Math.PI / 180;

  // Base relative coordinates (before calibration)
  const relX = dist * Math.cos(angleRad);
  const relY = dist * Math.sin(angleRad);

  // Apply Calibration Rotation (in radians)
  const rotRad = calibration.rotation * Math.PI / 180;
  const rotX = relX * Math.cos(rotRad) - relY * Math.sin(rotRad);
  const rotY = relX * Math.sin(rotRad) + relY * Math.cos(rotRad);

  // Apply Dynamic Render Scale and Offsets
  const finalX = centerX + (rotX * renderScale) + renderOffsetX;
  const finalY = centerY + (rotY * renderScale) + renderOffsetY;

  return { x: finalX, y: finalY };

  return { x: finalX, y: finalY };
}

// ----------------------------------------------------
// AIRCRAFT CLASSIFICATION & CUSTOM DRAWING HELPERS
// ----------------------------------------------------

/**
 * Classifies an aircraft based on its type code, callsign, and transponder squawk.
 * Resolves size class (helicopter, small, medium, large, heavy), private outline styling, and emergency.
 */
function classifyAircraft(typeCode, callsign, squawk) {
  const t = (typeCode || '').toUpperCase();
  const c = (callsign || '').toUpperCase();
  const sq = (squawk || '').toString();

  // 1. Check emergency / fire / police status (flashing red indicator)
  // Squawk 1255 is the standard CAL FIRE air mission code in California
  // Squawk 7700 is general emergency
  let isEmergency = false;
  if (sq === '1255' || 
      sq === '7700' || 
      c.startsWith('CHP') || 
      c.startsWith('COPT') || 
      c.startsWith('TNK') || 
      c.startsWith('TANKER') || 
      c.startsWith('REACH') || 
      c.startsWith('HENRY') || 
      c.startsWith('LIF') ||
      c.startsWith('FIRE') ||
      c.startsWith('AA1') || c.startsWith('AA2') || c.startsWith('AA3')) {
    isEmergency = true;
  }

  // 2. Check size class
  let sizeClass = 'large'; // Default commercial airliner size
  
  // Helicopter identifiers (Cal Fire helicopters, Sheriff Henry 1, Eurocopter, Bell, etc.)
  const heliTypes = ['EC35', 'EC45', 'AS50', 'AS55', 'AS65', 'B06', 'B206', 'BELL', 'R44', 'R66', 'A109', 'A119', 'H500', 'H60', 'UH60', 'S76', 'S92', 'MD50'];
  if (t.startsWith('H') || heliTypes.some(ht => t.includes(ht)) || c.startsWith('COPT') || c.startsWith('HENRY')) {
    sizeClass = 'helicopter';
  }
  // Small General Aviation Props (Cessna, Piper, Cirrus, RV series, private craft)
  else if (['C172', 'C182', 'C152', 'C206', 'C210', 'P28A', 'P28T', 'SR20', 'SR22', 'BE33', 'BE35', 'BE36', 'PA46', 'M20P', 'RV7', 'RV8', 'RV10'].includes(t)) {
    sizeClass = 'small';
  }
  // Medium Business Jets / Regional Airliners (Bombardier Challenger, Gulfstream, Embraer, CRJ)
  else if (['GL5T', 'GLF6', 'CL60', 'CL30', 'C560', 'C25A', 'C25B', 'C525', 'C680', 'FA7X', 'E55P', 'E75L', 'E190', 'ERJ', 'CRJ', 'DH8D'].some(jt => t.includes(jt))) {
    sizeClass = 'medium';
  }
  // Heavy Widebody Jets (Boeing 777/787/747, Airbus A330/A350/A380)
  else if (['B77', 'B78', 'B74', 'A33', 'A34', 'A35', 'A38', 'MD11', 'DC10'].some(ht => t.startsWith(ht))) {
    sizeClass = 'heavy';
  }

  // 3. Determine if private / general aviation
  const isPrivate = sizeClass === 'small' || (sizeClass === 'medium' && ['GL5T', 'GLF6', 'CL60', 'CL30', 'C560', 'C525', 'FA7X'].some(jt => t.includes(jt)));

  return { sizeClass, isPrivate, isEmergency };
}

/**
 * Draws custom vector paths for different aircraft classes.
 * Supports fills or strokes (private outlines).
 */
function drawAircraftShape(ctx, sizeClass, isPrivate) {
  ctx.beginPath();
  
  if (sizeClass === 'helicopter') {
    // Helicopter Shape
    // Fuselage
    ctx.arc(0, -1, 3.5, 0, 2 * Math.PI);
    // Tail boom
    ctx.moveTo(0, 2.5);
    ctx.lineTo(0, 8);
    // Tail rotor
    ctx.moveTo(0, 8);
    ctx.lineTo(2.5, 7.5);
    ctx.moveTo(0, 8);
    ctx.lineTo(-2.5, 8.5);
    // Skids
    ctx.moveTo(-2.5, 2.5);
    ctx.lineTo(-2.5, -2);
    ctx.moveTo(2.5, 2.5);
    ctx.lineTo(2.5, -2);
    // Main rotor
    ctx.moveTo(-10, -1);
    ctx.lineTo(10, -1);
  } else if (sizeClass === 'small') {
    // Small Single Engine Prop Shape
    // Fuselage
    ctx.moveTo(0, -7);
    ctx.lineTo(0.8, -5);
    ctx.lineTo(0.8, 5);
    ctx.lineTo(2.5, 6);
    ctx.lineTo(0, 7);
    ctx.lineTo(-2.5, 6);
    ctx.lineTo(-0.8, 5);
    ctx.lineTo(-0.8, -5);
    ctx.closePath();
    
    // Wings
    ctx.moveTo(-8, -1.5);
    ctx.lineTo(8, -1.5);
    ctx.lineTo(8, -0.5);
    ctx.lineTo(-8, -0.5);
    ctx.closePath();
  } else if (sizeClass === 'medium') {
    // Medium Swept Wings Jet Shape
    ctx.moveTo(0, -8);
    ctx.lineTo(0.8, -5);
    ctx.lineTo(1, -2);
    ctx.lineTo(9, 3);
    ctx.lineTo(9, 4);
    ctx.lineTo(1, 1);
    ctx.lineTo(0.8, 6);
    ctx.lineTo(3.5, 8);
    ctx.lineTo(0, 8.5);
    ctx.lineTo(-3.5, 8);
    ctx.lineTo(-0.8, 6);
    ctx.lineTo(-1, 1);
    ctx.lineTo(-9, 4);
    ctx.lineTo(-9, 3);
    ctx.lineTo(-1, -2);
    ctx.lineTo(-0.8, -5);
    ctx.closePath();
  } else if (sizeClass === 'heavy') {
    // Heavy widebody airliner shape
    ctx.moveTo(0, -13);
    ctx.lineTo(1.5, -9);
    ctx.lineTo(1.8, -3);
    ctx.lineTo(16, 6);
    ctx.lineTo(16, 7.5);
    ctx.lineTo(1.8, 2);
    ctx.lineTo(1.5, 10);
    ctx.lineTo(6, 12.5);
    ctx.lineTo(0, 13);
    ctx.lineTo(-6, 12.5);
    ctx.lineTo(-1.5, 10);
    ctx.lineTo(-1.8, 2);
    ctx.lineTo(-16, 7.5);
    ctx.lineTo(-16, 6);
    ctx.lineTo(-1.8, -3);
    ctx.lineTo(-1.5, -9);
    ctx.closePath();
  } else {
    // Large airliner (default) shape
    ctx.moveTo(0, -10);
    ctx.lineTo(1.2, -7);
    ctx.lineTo(1.4, -2.5);
    ctx.lineTo(12, 4);
    ctx.lineTo(12, 5.2);
    ctx.lineTo(1.4, 1.5);
    ctx.lineTo(1.2, 8);
    ctx.lineTo(4.5, 10);
    ctx.lineTo(0, 10.5);
    ctx.lineTo(-4.5, 10);
    ctx.lineTo(-1.2, 8);
    ctx.lineTo(-1.4, 1.5);
    ctx.lineTo(-12, 5.2);
    ctx.lineTo(-12, 4);
    ctx.lineTo(-1.4, -2.5);
    ctx.lineTo(-1.2, -7);
    ctx.closePath();
  }

  if (isPrivate || sizeClass === 'helicopter') {
    // Stroke only (hollow outline) for helicopters and private GA planes
    ctx.stroke();
  } else {
    // Solid fill + stroke border for airliners and military transports
    ctx.fill();
    ctx.stroke();
  }
}

// ----------------------------------------------------
// ROUTE LOOKUP AND CACHING
// ----------------------------------------------------

const routeCacheMap = new Map();
const activeRouteFetches = new Set();

/**
 * Wirelessly fetches route details (origin / destination) for a flight callsign.
 * Caches results inside the browser memory.
 */
function fetchRouteForCallsign(callsign) {
  if (!callsign) return;
  const key = callsign.trim().toUpperCase();
  if (routeCacheMap.has(key) || activeRouteFetches.has(key)) return;

  activeRouteFetches.add(key);

  // If in standalone APK mode, fetch directly from adsbdb.com API.
  // Otherwise, use local Node.js Express proxy to handle caching.
  const fetchUrl = isStandalone
    ? `https://api.adsbdb.com/v0/callsign/${key}`
    : `/api/route?callsign=${key}`;

  fetch(fetchUrl)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(data => {
      if (isStandalone) {
        // Direct Response structure from adsbdb.com
        const fr = (data && data.response) ? data.response.flightroute : null;
        if (fr) {
          routeCacheMap.set(key, {
            callsign: key,
            found: true,
            origin: (fr.origin && fr.origin.iata_code) || (fr.origin && fr.origin.icao_code) || '',
            destination: (fr.destination && fr.destination.iata_code) || (fr.destination && fr.destination.icao_code) || '',
            originName: (fr.origin && fr.origin.municipality) || (fr.origin && fr.origin.name) || '',
            destName: (fr.destination && fr.destination.municipality) || (fr.destination && fr.destination.name) || '',
            airline: (fr.airline && fr.airline.name) || ''
          });
        } else {
          routeCacheMap.set(key, { callsign: key, found: false });
        }
      } else {
        // Response format from local Express route
        routeCacheMap.set(key, data);
      }
    })
    .catch(err => {
      console.warn(`Failed to fetch route for ${key}:`, err);
      // Cache failure temporarily to prevent repeated spam fetches
      routeCacheMap.set(key, { callsign: key, found: false, error: err.message });
    })
    .finally(() => {
      activeRouteFetches.delete(key);
    });
}

/**
 * Main draw loop. Runs at 60fps.
 */
function draw() {
  const width = canvas.width;
  const height = canvas.height;
  
  const styles = getThemeStyles();
  const now = Date.now();
  
  // Update spotlight camera transitions and panning engine
  manageSpotlight(now);

  // Clear canvas
  ctx.fillStyle = styles.bg;
  ctx.fillRect(0, 0, width, height);

  // Center of screen
  const centerX = width / 2;
  const centerY = height / 2;
  // Maximum radius is the shortest screen boundary to ensure circular sky map fits
  const baseRadius = Math.min(width, height) * 0.45;

  // ----------------------------------------------------
  // DRAW GRID & COMPASS (Horizon circle, zenith circles, directions)
  // ----------------------------------------------------
  if (calibration.showGrid) {
    ctx.strokeStyle = styles.grid;
    ctx.lineWidth = 1;
    
    // Draw Elevation Circles (Horizon: 0°, 30°, 60°)
    const elevations = [0, 30, 60];
    elevations.forEach(elev => {
      const radius = baseRadius * (90 - elev) / 90 * renderScale;
      
      ctx.beginPath();
      // Apply offset to center circles
      ctx.arc(centerX + renderOffsetX, centerY + renderOffsetY, radius, 0, 2 * Math.PI);
      ctx.stroke();

      // Label elevation circles (only at True North)
      const labelPos = getCanvasCoordinates(elev, 0, centerX, centerY, baseRadius);
      if (labelPos) {
        ctx.fillStyle = styles.gridText;
        ctx.font = '9px ' + varName('font-hud');
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillText(`${elev}°`, labelPos.x, labelPos.y - 2);
      }
    });

    // Draw Crosshairs (North-South, East-West lines)
    ctx.beginPath();
    // North-South line
    const nCoords = getCanvasCoordinates(0, 0, centerX, centerY, baseRadius);
    const sCoords = getCanvasCoordinates(0, 180, centerX, centerY, baseRadius);
    if (nCoords && sCoords) {
      ctx.moveTo(nCoords.x, nCoords.y);
      ctx.lineTo(sCoords.x, sCoords.y);
    }
    // East-West line
    const eCoords = getCanvasCoordinates(0, 90, centerX, centerY, baseRadius);
    const wCoords = getCanvasCoordinates(0, 270, centerX, centerY, baseRadius);
    if (eCoords && wCoords) {
      ctx.moveTo(eCoords.x, eCoords.y);
      ctx.lineTo(wCoords.x, wCoords.y);
    }
    ctx.stroke();

    // Draw Cardinal Labels (N, E, S, W)
    const cardinals = [
      { label: 'N', az: 0 },
      { label: 'E', az: 90 },
      { label: 'S', az: 180 },
      { label: 'W', az: 270 }
    ];
    
    cardinals.forEach(card => {
      // Put label slightly past the outer horizon boundary
      const labelRadius = baseRadius * 1.05;
      const pos = getCanvasCoordinates(0, card.az, centerX, centerY, labelRadius);
      if (pos) {
        ctx.fillStyle = card.label === 'N' ? '#ef4444' : styles.gridText; // Red accent for North
        ctx.font = 'bold 12px ' + varName('font-hud');
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(card.label, pos.x, pos.y);
      }
    });
  }

  // ----------------------------------------------------
  // DRAW CONSTELLATIONS
  // ----------------------------------------------------
  const starPositions = {}; // Map star ID -> canvas coordinates

  // Compute screen coordinates for all stars
  STARS.forEach(star => {
    const altAz = raDecToAltAz(star.ra, star.dec, config.latitude, config.longitude);
    const coords = getCanvasCoordinates(altAz.alt, altAz.az, centerX, centerY, baseRadius);
    if (coords) {
      starPositions[star.id] = coords;
    }
  });

  if (calibration.showConstellations) {
    ctx.strokeStyle = styles.constellation;
    ctx.lineWidth = 1;
    
    CONSTELLATIONS.forEach(constell => {
      constell.connections.forEach(conn => {
        const start = starPositions[conn[0]];
        const end = starPositions[conn[1]];
        
        if (start && end) {
          ctx.beginPath();
          ctx.moveTo(start.x, start.y);
          ctx.lineTo(end.x, end.y);
          ctx.stroke();
        }
      });
    });
  }

  // ----------------------------------------------------
  // DRAW STARS
  // ----------------------------------------------------
  // Force background stars and constellations ON if we are currently target locked
  if (calibration.showStars || (focusState.active && calibration.showSpotlight)) {
    STARS.forEach(star => {
      const coords = starPositions[star.id];
      if (!coords) return;

      // Radius proportional to star brightness magnitude (lower mag = brighter/larger)
      // Clamped to be much smaller so they don't clutter the aircraft
      const size = Math.max(0.5, (5 - star.mag) * 0.35);

      // Glowing halo for very bright stars (magnitude < 1.5)
      if (star.mag < 1.5 && styles.starGlow !== 'transparent') {
        ctx.beginPath();
        ctx.arc(coords.x, coords.y, size * 1.8, 0, 2 * Math.PI);
        ctx.fillStyle = styles.starGlow;
        ctx.fill();
      }

      // Star core
      ctx.beginPath();
      ctx.arc(coords.x, coords.y, size, 0, 2 * Math.PI);
      ctx.fillStyle = styles.star;
      ctx.fill();

      // Star label
      if ((calibration.showStarNames || (focusState.active && calibration.showSpotlight)) && star.mag < 2.5) { // Only label brighter stars to avoid clutter
        ctx.fillStyle = styles.starText;
        ctx.font = '10px ' + varName('font-ui');
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillText(star.name, coords.x + size + 3, coords.y + size + 2);
      }
    });
  }

  // ----------------------------------------------------
  // PROCESS & INTERPOLATE AIRCRAFT
  // ----------------------------------------------------

  
  flights.forEach(flight => {
    const { bearing, distanceKm } = getBearingAndDistance(
      config.latitude, 
      config.longitude, 
      flight.lat, 
      flight.lon
    );

    const elev = getFlightElevation(flight.altitude, distanceKm);
    
    // Project coordinates
    const targetCoords = getCanvasCoordinates(elev, bearing, centerX, centerY, baseRadius);

    if (!targetCoords) return;

    // Check elevation filter
    if (elev < calibration.minElevation) {
      if (interpolatedFlights[flight.hex]) {
        delete interpolatedFlights[flight.hex];
        delete flightTrails[flight.hex];
      }
      return; // Skip plane
    }

    // Initialize or update interpolated positions
    if (!interpolatedFlights[flight.hex]) {
      interpolatedFlights[flight.hex] = {
        hex: flight.hex,
        callsign: flight.callsign,
        registration: flight.registration,
        type: flight.type,
        alt: flight.altitude,
        speed: flight.speed,
        track: flight.track,
        lat: flight.lat,
        lon: flight.lon,
        squawk: flight.squawk || '',
        military: flight.military,
        x: targetCoords.x,
        y: targetCoords.y,
        active: true,
        lastUpdated: now
      };
    } else {
      const interp = interpolatedFlights[flight.hex];
      interp.active = true;
      interp.lastUpdated = now;
      interp.callsign = flight.callsign || interp.callsign;
      interp.registration = flight.registration || interp.registration;
      interp.type = flight.type || interp.type;
      interp.alt = flight.altitude;
      interp.speed = flight.speed;
      interp.track = flight.track;
      interp.lat = flight.lat;
      interp.lon = flight.lon;
      interp.squawk = flight.squawk || interp.squawk || '';

      // Easing / interpolation towards target positions (0.05 factor at 60fps)
      interp.x += (targetCoords.x - interp.x) * 0.05;
      interp.y += (targetCoords.y - interp.y) * 0.05;
    }

    // Save trail positions
    if (calibration.showTrails) {
      if (!flightTrails[flight.hex]) {
        flightTrails[flight.hex] = [];
      }
      
      const trail = flightTrails[flight.hex];
      const interp = interpolatedFlights[flight.hex];
      
      // Store current interpolated position in trail
      trail.push({ x: interp.x, y: interp.y, timestamp: now });

      // Clean trails older than 60 seconds
      flightTrails[flight.hex] = trail.filter(pt => (now - pt.timestamp) < 60000);
    }
  });

  // Clean up stale flights (not received in last 15 seconds)
  Object.keys(interpolatedFlights).forEach(hex => {
    const interp = interpolatedFlights[hex];
    if (now - interp.lastUpdated > 15000) {
      delete interpolatedFlights[hex];
      delete flightTrails[hex];
    }
  });

  // Update status bar visible flight count dynamically in real-time
  const displayCountEl = document.getElementById('display-count');
  if (displayCountEl) {
    const visibleCount = Object.keys(interpolatedFlights).length;
    if (isDemoMode) {
      displayCountEl.textContent = `${visibleCount} Flights Simulated`;
    } else {
      displayCountEl.textContent = `${visibleCount} Flights Overhead`;
    }
  }

  // ----------------------------------------------------
  // DRAW FLIGHT TRAILS
  // ----------------------------------------------------
  if (calibration.showTrails) {
    Object.keys(flightTrails).forEach(hex => {
      const trail = flightTrails[hex];
      const flightInfo = interpolatedFlights[hex];
      if (!flightInfo || trail.length < 2) return;

      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);
      for (let i = 1; i < trail.length; i++) {
        ctx.lineTo(trail[i].x, trail[i].y);
      }

      ctx.strokeStyle = flightInfo.military ? styles.milFlightTrail : styles.flightTrail;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    });
  }

  // ----------------------------------------------------
  // DRAW FLIGHTS
  // ----------------------------------------------------
  Object.keys(interpolatedFlights).forEach(hex => {
    const flight = interpolatedFlights[hex];
    
    // Asynchronously fetch flight route details (origin / destination) if available
    if (flight.callsign) {
      fetchRouteForCallsign(flight.callsign);
    }

    // Classify aircraft size, private status, and emergency alert state
    const { sizeClass, isPrivate, isEmergency } = classifyAircraft(flight.type, flight.callsign, flight.squawk);

    // Apply altitude scaling (lower planes look larger, higher look smaller)
    // Scale factor ranges from 0.7x (at 45,000 ft) to 1.3x (at 1,000 ft)
    const altFactor = Math.max(0.7, Math.min(1.3, 1.3 - (flight.alt / 75000)));

    // Draw glow halo (emergency flasher or standard soft glow)
    const isFlashOn = Math.floor(Date.now() / 250) % 2 === 0;
    if (isEmergency) {
      // Emergency Radar pulse ring
      ctx.beginPath();
      const pulseRadius = 15 + 10 * Math.sin(Date.now() / 150);
      ctx.arc(flight.x, flight.y, pulseRadius, 0, 2 * Math.PI);
      ctx.strokeStyle = isFlashOn ? 'rgba(255, 23, 72, 0.55)' : 'rgba(255, 23, 72, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      // Double visual halo
      ctx.beginPath();
      ctx.arc(flight.x, flight.y, 8, 0, 2 * Math.PI);
      ctx.fillStyle = isFlashOn ? 'rgba(255, 23, 72, 0.35)' : 'rgba(255, 23, 72, 0.1)';
      ctx.fill();
    } else if (styles.flightGlow !== 'transparent') {
      ctx.beginPath();
      ctx.arc(flight.x, flight.y, 8 * altFactor, 0, 2 * Math.PI);
      ctx.fillStyle = styles.flightGlow;
      ctx.fill();
    }

    // Draw custom airplane class vector marker
    ctx.save();
    ctx.translate(flight.x, flight.y);
    
    // Rotate to match the track (plus calibration rotation)
    const totalRotationRad = (flight.track + calibration.rotation) * Math.PI / 180;
    ctx.rotate(totalRotationRad);

    // Apply scaling based on altitude and size
    ctx.scale(altFactor, altFactor);

    // Apply colors
    if (isEmergency) {
      // Fire/Police flashing alert red
      ctx.fillStyle = isFlashOn ? '#ff1744' : '#b71c1c';
      ctx.strokeStyle = isFlashOn ? '#ff1744' : '#b71c1c';
    } else {
      ctx.fillStyle = flight.military ? styles.milFlight : styles.flight;
      ctx.strokeStyle = flight.military ? styles.milFlightTrail : styles.grid;
    }
    
    ctx.lineWidth = 1.2;
    
    // Draw class-specific shape
    drawAircraftShape(ctx, sizeClass, isPrivate);

    ctx.restore();

    // Draw tactical HUD bracket corners around the active target spotlight
    if (focusState.active && focusState.targetHex === hex && calibration.showSpotlight) {
      ctx.strokeStyle = '#ef4444'; // Flashing neon red alert
      ctx.lineWidth = 1.5;
      const r = 16 * altFactor;
      
      ctx.beginPath();
      // Top-Left corner
      ctx.moveTo(flight.x - r, flight.y - r + 5);
      ctx.lineTo(flight.x - r, flight.y - r);
      ctx.lineTo(flight.x - r + 5, flight.y - r);
      
      // Top-Right corner
      ctx.moveTo(flight.x + r - 5, flight.y - r);
      ctx.lineTo(flight.x + r, flight.y - r);
      ctx.lineTo(flight.x + r, flight.y - r + 5);
      
      // Bottom-Left corner
      ctx.moveTo(flight.x - r, flight.y + r - 5);
      ctx.lineTo(flight.x - r, flight.y + r);
      ctx.lineTo(flight.x - r + 5, flight.y + r);
      
      // Bottom-Right corner
      ctx.moveTo(flight.x + r - 5, flight.y + r);
      ctx.lineTo(flight.x + r, flight.y + r);
      ctx.lineTo(flight.x + r, flight.y + r - 5);
      ctx.stroke();

      // Blinking TARGET LOCK text
      if (Math.floor(now / 300) % 2 === 0) {
        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 9px ' + varName('font-hud');
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillText('TARGET LOCK', flight.x, flight.y - r - 6);
      }
    }

    // Draw labels (Details: Callsign, Type, Route, Altitude, Speed)
    if (calibration.showDetails) {
      const labelOffset = 12;
      const lines = [];

      // Line 1: Title (Callsign or Registration + Type)
      let title = flight.callsign || flight.registration || 'AIRCRAFT';
      if (flight.type) title += ` (${flight.type})`;
      lines.push({ 
        text: title, 
        color: isEmergency ? '#ff1744' : (flight.military ? styles.milFlight : styles.flightText), 
        bold: true 
      });

      // Line 2: Route details (if loaded from API)
      const route = routeCacheMap.get(flight.callsign.toUpperCase());
      if (route && route.found && route.origin && route.destination) {
        lines.push({ 
          text: `${route.origin} ➔ ${route.destination}`, 
          color: isEmergency ? '#ff8a80' : '#60a5fa', 
          bold: false 
        });
      }

      // Line 3: Flight levels & speed
      const altFormatted = flight.alt.toLocaleString();
      const levelText = `${altFormatted} ft (${Math.round(flight.alt / 100)}FL)`;
      lines.push({ 
        text: `${levelText} · ${flight.speed}kt`, 
        color: styles.gridText, 
        bold: false 
      });

      // Calculate label box width/height based on text lines
      ctx.font = '10px ' + varName('font-hud');
      
      let maxWidth = 0;
      lines.forEach(line => {
        ctx.font = line.bold ? 'bold 10px ' + varName('font-hud') : '10px ' + varName('font-hud');
        const w = ctx.measureText(line.text).width;
        if (w > maxWidth) maxWidth = w;
      });

      const boxWidth = maxWidth + 10;
      const boxHeight = lines.length * 12 + 6;

      const boxX = flight.x + labelOffset;
      const boxY = flight.y - boxHeight / 2;

      // Label container background (glassmorphism HUD layout)
      ctx.fillStyle = styles.flightTextBg;
      ctx.fillRect(boxX, boxY, boxWidth, boxHeight);
      
      // Border color (alert red for fire/police emergency, standard grids for commercial)
      ctx.strokeStyle = isEmergency ? '#ff1744' : (flight.military ? styles.milFlightTrail : styles.grid);
      ctx.lineWidth = isEmergency ? 1.0 : 0.5;
      ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);

      // Render lines of text
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      
      lines.forEach((line, idx) => {
        ctx.fillStyle = line.color;
        ctx.font = line.bold ? 'bold 10px ' + varName('font-hud') : '10px ' + varName('font-hud');
        ctx.fillText(line.text, boxX + 5, boxY + 4 + (idx * 12));
      });
    }
  });

  // Render active toast notifications on top of screen
  drawNotifications();

  // Request next frame
  requestAnimationFrame(draw);
}

// Helper to look up CSS custom properties in JS
function varName(cssVar) {
  return getComputedStyle(document.documentElement).getPropertyValue('--' + cssVar).trim();
}

// ----------------------------------------------------
// SERVER & STANDALONE NETWORK HANDLERS
// ----------------------------------------------------

// Setup standalone variables
if (isStandalone) {
  const savedLoc = safeGetLocalStorage('skylight_standalone_location');
  if (savedLoc) {
    try {
      const parsed = JSON.parse(savedLoc);
      config = { ...config, ...parsed };
    } catch (e) {
      console.error('Failed to parse saved location', e);
    }
  }
}

async function fetchConfig() {
  // Sync the selector state
  document.getElementById('mode-selector').value = isStandalone ? 'standalone' : 'server';

  if (isStandalone) {
    console.log('Running in Standalone mode. Coordinates:', config);
    document.getElementById('standalone-status-label').textContent = 'Active: Standalone Client Mode';
    document.getElementById('standalone-status-label').style.color = '#10b981';
    
    // Sync config values to input boxes
    document.getElementById('input-loc-name').value = config.locationName;
    document.getElementById('input-loc-lat').value = config.latitude;
    document.getElementById('input-loc-lon').value = config.longitude;
    document.getElementById('input-loc-radius').value = config.radiusKm;
    
    syncConfigToUI();
    return;
  }

  try {
    document.getElementById('standalone-status-label').textContent = 'Server Overriding Coordinates';
    document.getElementById('standalone-status-label').style.color = '#94a3b8';
    
    // Disable input boxes in server mode to avoid confusion
    document.getElementById('input-loc-name').disabled = true;
    document.getElementById('input-loc-lat').disabled = true;
    document.getElementById('input-loc-lon').disabled = true;
    document.getElementById('input-loc-radius').disabled = true;
    document.getElementById('btn-save-location').disabled = true;
    document.getElementById('btn-save-location').style.background = '#334155';
    document.getElementById('btn-save-location').textContent = 'Locked (Server Mode)';

    const response = await fetch('/api/config');
    if (!response.ok) throw new Error('Failed to fetch config');
    
    config = await response.json();
    console.log('Server config loaded:', config);
    
    // Sync coordinates to standalone inputs just for visualization
    document.getElementById('input-loc-name').value = config.locationName;
    document.getElementById('input-loc-lat').value = config.latitude.toFixed(6);
    document.getElementById('input-loc-lon').value = config.longitude.toFixed(6);
    document.getElementById('input-loc-radius').value = config.radiusKm;

    syncConfigToUI();
  } catch (error) {
    console.error('Error loading config:', error);
    document.getElementById('display-location').textContent = 'Config Load Error';
  }
}

function syncConfigToUI() {
  document.getElementById('display-location').textContent = config.locationName;
  document.getElementById('geo-lat').textContent = config.latitude.toFixed(4);
  document.getElementById('geo-lon').textContent = config.longitude.toFixed(4);
  document.getElementById('geo-radius').textContent = `${config.radiusKm} km`;
}

window.saveStandaloneCoordinates = function() {
  if (!isStandalone) return;
  
  const name = document.getElementById('input-loc-name').value.trim();
  const lat = parseFloat(document.getElementById('input-loc-lat').value);
  const lon = parseFloat(document.getElementById('input-loc-lon').value);
  const radius = parseFloat(document.getElementById('input-loc-radius').value);

  if (!name || isNaN(lat) || isNaN(lon) || isNaN(radius)) {
    alert('Please enter valid coordinates and location name.');
    return;
  }

  config = {
    latitude: lat,
    longitude: lon,
    radiusKm: radius,
    locationName: name
  };

  safeSetLocalStorage('skylight_standalone_location', JSON.stringify(config));
  syncConfigToUI();
  
  // Clean flights and trails to avoid projection glitches
  flights = [];
  Object.keys(flightTrails).forEach(k => delete flightTrails[k]);
  Object.keys(interpolatedFlights).forEach(k => delete interpolatedFlights[k]);
  
  updateFlights();
  console.log('Saved standalone coordinates', config);
};

const apiEndpoints = [
  { name: 'Airplanes.Live', url: (lat, lon, rad) => `https://api.airplanes.live/v2/point/${lat}/${lon}/${rad}` },
  { name: 'ADSB.lol', url: (lat, lon, rad) => `https://api.adsb.lol/v2/point/${lat}/${lon}/${rad}` },
  { name: 'ADSB.one', url: (lat, lon, rad) => `https://api.adsb.one/v2/point/${lat}/${lon}/${rad}` }
];
let activeApiIndex = 0;
let lastApiResetTime = Date.now();
const API_RESET_INTERVAL_MS = 5 * 60 * 1000;

let isDemoMode = false;
let demoFlightsInitialized = false;

function activateDemoMode() {
  isDemoMode = true;
  connectionStatus = 'demo';
  
  if (!demoFlightsInitialized) {
    console.log('ADSB API is offline. Activating local flight simulation...');
    const lat = config.latitude;
    const lon = config.longitude;
    
    flights = [
      {
        hex: 'demo01',
        callsign: 'TANKER93',
        registration: 'N93CF',
        type: 'S2T',
        altitude: 3200,
        speed: 160,
        track: 110,
        lat: lat + 0.015,
        lon: lon - 0.02,
        squawk: '1255',
        military: false
      },
      {
        hex: 'demo02',
        callsign: 'HENRY1',
        registration: 'N205SD',
        type: 'EC35',
        altitude: 1200,
        speed: 80,
        track: 240,
        lat: lat - 0.01,
        lon: lon + 0.01,
        squawk: '1200',
        military: false
      },
      {
        hex: 'demo03',
        callsign: 'SWA1420',
        registration: 'N7827A',
        type: 'B737',
        altitude: 31000,
        speed: 430,
        track: 345,
        lat: lat - 0.04,
        lon: lon - 0.04,
        squawk: '3422',
        military: false
      },
      {
        hex: 'demo04',
        callsign: 'N172SP',
        registration: 'N172SP',
        type: 'C172',
        altitude: 4500,
        speed: 105,
        track: 45,
        lat: lat + 0.025,
        lon: lon + 0.03,
        squawk: '1200',
        military: false
      }
    ];

    routeCacheMap.set('SWA1420', {
      callsign: 'SWA1420',
      found: true,
      origin: 'SFO',
      destination: 'SEA',
      originName: 'San Francisco',
      destName: 'Seattle'
    });
    routeCacheMap.set('TANKER93', {
      callsign: 'TANKER93',
      found: true,
      origin: 'STS',
      destination: 'FIRE',
      originName: 'Santa Rosa',
      destName: 'Wildfire Attack'
    });
    routeCacheMap.set('HENRY1', {
      callsign: 'HENRY1',
      found: true,
      origin: 'STS',
      destination: 'PATROL',
      originName: 'Santa Rosa',
      destName: 'County Patrol'
    });
    routeCacheMap.set('N172SP', {
      callsign: 'N172SP',
      found: true,
      origin: 'STS',
      destination: 'O69',
      originName: 'Santa Rosa',
      destName: 'Petaluma'
    });
    
    demoFlightsInitialized = true;
  } else {
    // Dead reckoning update for simulated flights
    const lat = config.latitude;
    const lon = config.longitude;
    
    flights.forEach(f => {
      const dist = (f.speed * 1.852) * (8 / 3600); // distance in km traveled in 8 seconds
      const latChange = (dist * Math.cos(f.track * Math.PI / 180)) / 111.0;
      const lonChange = (dist * Math.sin(f.track * Math.PI / 180)) / (111.0 * Math.cos(f.lat * Math.PI / 180));
      
      f.lat += latChange;
      f.lon += lonChange;
      
      // If out of bounds (approx 1.2x radius), wrap around to opposite side
      const dLat = f.lat - lat;
      const dLon = f.lon - lon;
      const distance = Math.sqrt(dLat*dLat + dLon*dLon) * 111.0;
      if (distance > config.radiusKm * 1.2) {
        f.lat = lat - dLat * 0.9;
        f.lon = lon - dLon * 0.9;
      }
    });
  }
  updateStatusBar();
}

async function updateFlights() {
  try {
    let rawData;
    
    if (isStandalone) {
      const radiusNm = Math.min(250, Math.max(1, Math.round(config.radiusKm * 0.539957)));
      
      // Periodically check if we should attempt to restore Priority 1 (index 0) API
      const now = Date.now();
      if (activeApiIndex > 0 && (now - lastApiResetTime > API_RESET_INTERVAL_MS)) {
        console.log(`Attempting recovery: Resetting API source back to primary (${apiEndpoints[0].name})`);
        activeApiIndex = 0;
        lastApiResetTime = now;
      }

      let response;
      let success = false;
      let attempts = 0;

      while (!success && attempts < apiEndpoints.length) {
        const currentIdx = (activeApiIndex + attempts) % apiEndpoints.length;
        const endpoint = apiEndpoints[currentIdx];
        const apiUrl = endpoint.url(config.latitude, config.longitude, radiusNm);

        try {
          console.log(`Fetching flights from source: ${endpoint.name}`);
          response = await fetch(apiUrl, {
            headers: { 'Accept': 'application/json' }
          });
          if (response.ok) {
            rawData = await response.json();
            activeApiIndex = currentIdx; // Lock in this source as the current active API
            success = true;
          } else {
            console.warn(`API ${endpoint.name} returned code ${response.status}`);
          }
        } catch (err) {
          console.warn(`Failed to connect to API ${endpoint.name}:`, err);
        }
        attempts++;
      }

      if (!success) {
        throw new Error('All ADSB API endpoints are unreachable.');
      }
    } else {
      const response = await fetch('/api/flights');
      if (!response.ok) throw new Error('Network error');
      rawData = await response.json();
    }

    // Standardize data parsing
    let rawFlights = [];
    if (isStandalone) {
      rawFlights = (rawData.ac || []).map(ac => ({
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
      }));
    } else {
      rawFlights = rawData.flights || [];
    }

    // Clean up demo mode if API recovers successfully
    if (isDemoMode) {
      isDemoMode = false;
      demoFlightsInitialized = false;
      flights = [];
      Object.keys(interpolatedFlights).forEach(k => {
        if (k.startsWith('demo')) delete interpolatedFlights[k];
      });
    }

    flights = rawFlights.filter(ac => ac.lat !== 0 && ac.lon !== 0);
    lastFetchTime = Date.now();

    connectionStatus = 'connected';
    updateStatusBar();
  } catch (error) {
    console.error('Error fetching flights:', error);
    if (isStandalone) {
      activateDemoMode();
    } else {
      connectionStatus = 'error';
      updateStatusBar();
    }
  }
}

function updateStatusBar() {
  const dot = document.getElementById('api-indicator');
  const text = document.getElementById('api-status');
  const count = document.getElementById('display-count');

  if (connectionStatus === 'connected') {
    dot.className = 'indicator-dot connected';
    text.textContent = isStandalone ? 'Standalone GPS Active' : 'Server Online';
    count.textContent = `${flights.length} Flights Overhead`;
  } else if (connectionStatus === 'demo') {
    dot.className = 'indicator-dot warning';
    text.textContent = 'API Offline (Local Simulation)';
    count.textContent = `${flights.length} Flights Simulated`;
  } else if (connectionStatus === 'error') {
    dot.className = 'indicator-dot error';
    text.textContent = isStandalone ? 'adsb.lol Fetch Error' : 'Server Offline';
  }
}

// ----------------------------------------------------
// INITIALIZATION
// ----------------------------------------------------

async function init() {
  loadSettings();
  setupListeners();
  resizeCanvas();
  
  // Set window-level triggers
  window.toggleFullscreen = toggleFullscreen;
  
  // Load configuration
  await fetchConfig();
  
  // Fetch initial flights immediately
  await updateFlights();
  
  // Run background draw loop (60fps)
  requestAnimationFrame(draw);
  
  // Poll server/API for flights every 8 seconds
  setInterval(updateFlights, 8000);
}

// Start app
window.addEventListener('DOMContentLoaded', init);

window.toggleModeSelect = function() {
  const mode = document.getElementById('mode-selector').value;
  if (mode === 'standalone') {
    safeSetLocalStorage('skylight_standalone', 'true');
  } else {
    safeSetLocalStorage('skylight_standalone', 'false');
  }
  window.location.reload();
};

// ----------------------------------------------------
// ANDROID TV REMOTE D-PAD NAVIGATION ENGINE
// ----------------------------------------------------
let tvMenuOpen = false;
let tvMenuIndex = 0;

const tvMenuItems = [
  { id: 'scale', label: 'Scale', type: 'numeric', min: 0.5, max: 2.0, step: 0.05, format: v => `${v.toFixed(2)}x` },
  { id: 'rotation', label: 'Rotation', type: 'numeric', min: -180, max: 180, step: 5, format: v => `${v}°` },
  { id: 'offsetX', label: 'Shift X', type: 'numeric', min: -500, max: 500, step: 10, format: v => `${v}px` },
  { id: 'offsetY', label: 'Shift Y', type: 'numeric', min: -500, max: 500, step: 10, format: v => `${v}px` },
  { id: 'minElevation', label: 'Elevation', type: 'numeric', min: 0, max: 45, step: 1, format: v => `${v}°` },
  { id: 'brightness', label: 'Brightness', type: 'numeric', min: 20, max: 150, step: 5, format: v => `${v}%` },
  { id: 'theme', label: 'Theme', type: 'list', options: ['classic', 'radar', 'mono', 'nebula'], labels: ['Starry Night', 'Tactical Radar', 'High Contrast', 'Deep Space'] },
  { id: 'showDetails', label: 'Flight Labels', type: 'toggle' },
  { id: 'showSpotlight', label: 'Spotlight Mode', type: 'toggle' },
  { id: 'showStars', label: 'Star Background', type: 'toggle' },
  { id: 'showConstellations', label: 'Constellations', type: 'toggle' },
  { id: 'showStarNames', label: 'Star Names', type: 'toggle' },
  { id: 'showGrid', label: 'Grid Rings', type: 'toggle' },
  { id: 'showTrails', label: 'Flight Trails', type: 'toggle' },
  { id: 'close', label: 'Exit Settings', type: 'action' }
];

window.toggleTvMenu = function() {
  tvMenuOpen = !tvMenuOpen;
  const overlay = document.getElementById('tv-settings-overlay');
  if (overlay) {
    overlay.style.display = tvMenuOpen ? 'flex' : 'none';
  }
  if (tvMenuOpen) {
    tvMenuIndex = 0;
    renderTvMenu();
  }
};

function renderTvMenu() {
  const container = document.getElementById('tv-menu-list');
  if (!container) return;
  
  container.innerHTML = '';
  tvMenuItems.forEach((item, idx) => {
    const isSelected = idx === tvMenuIndex;
    const itemEl = document.createElement('div');
    itemEl.style.padding = '10px 14px';
    itemEl.style.borderRadius = '8px';
    itemEl.style.display = 'flex';
    itemEl.style.justifyContent = 'space-between';
    itemEl.style.alignItems = 'center';
    itemEl.style.transition = 'all 0.15s';
    itemEl.style.fontSize = '0.9rem';
    
    if (isSelected) {
      itemEl.style.background = 'rgba(59, 130, 246, 0.22)';
      itemEl.style.border = '1px solid #3b82f6';
      itemEl.style.boxShadow = '0 0 8px rgba(59, 130, 246, 0.3)';
      itemEl.style.color = '#fff';
      itemEl.style.fontWeight = '600';
    } else {
      itemEl.style.background = 'rgba(255, 255, 255, 0.02)';
      itemEl.style.border = '1px solid transparent';
      itemEl.style.color = '#94a3b8';
    }
    
    const labelEl = document.createElement('span');
    labelEl.textContent = item.label;
    itemEl.appendChild(labelEl);
    
    const valueEl = document.createElement('span');
    if (item.type === 'numeric') {
      const val = calibration[item.id];
      valueEl.textContent = `◀  ${item.format(val)}  ▶`;
      valueEl.style.color = isSelected ? '#60a5fa' : '#64748b';
    } else if (item.type === 'toggle') {
      const val = calibration[item.id];
      valueEl.textContent = val ? '◀  [ ON ]  ▶' : '◀  [ OFF ]  ▶';
      valueEl.style.color = val ? '#10b981' : '#ef4444';
      if (!isSelected) valueEl.style.color = '#64748b';
    } else if (item.type === 'list') {
      const val = calibration[item.id];
      const optIdx = item.options.indexOf(val);
      const label = item.labels[optIdx] || val;
      valueEl.textContent = `◀  ${label}  ▶`;
      valueEl.style.color = isSelected ? '#a855f7' : '#64748b';
    } else if (item.type === 'action') {
      valueEl.textContent = 'Press OK';
      valueEl.style.color = '#3b82f6';
    }
    
    itemEl.appendChild(valueEl);
    container.appendChild(itemEl);
  });
}

function adjustTvSetting(item, direction) {
  if (item.type === 'numeric') {
    let val = calibration[item.id];
    val += item.step * direction;
    if (item.step < 1) {
      val = Math.round(val * 100) / 100;
    }
    if (val < item.min) val = item.min;
    if (val > item.max) val = item.max;
    calibration[item.id] = val;
    saveSettings();
    syncSettingsToUI();
  } else if (item.type === 'toggle') {
    calibration[item.id] = !calibration[item.id];
    saveSettings();
    syncSettingsToUI();
  } else if (item.type === 'list') {
    const val = calibration[item.id];
    let idx = item.options.indexOf(val);
    idx = (idx + direction + item.options.length) % item.options.length;
    calibration[item.id] = item.options[idx];
    saveSettings();
    syncSettingsToUI();
  }
  renderTvMenu();
}

// ----------------------------------------------------
// DYNAMIC AUTOPILOT SPOTLIGHT ENGINE
// ----------------------------------------------------
let focusState = {
  active: false,
  targetHex: null,
  startTime: 0,
  durationMs: 15000 // 15 seconds spotlight tracking window
};

// Trigger check interval: 10 seconds for dev/testing (will check/zoom frequently)
const FOCUS_TRIGGER_INTERVAL_MS = 10 * 1000;
let lastFocusCheckTime = Date.now() - FOCUS_TRIGGER_INTERVAL_MS + 2000; // Trigger 2 seconds after load

function manageSpotlight(now) {
  // Sync dynamic render coordinates to calibration offsets if not initialized
  if (renderScale === null) {
    renderScale = calibration.scale;
    renderOffsetX = calibration.offsetX;
    renderOffsetY = calibration.offsetY;
  }

  // Check if we should trigger a new spotlight target lock
  if (!focusState.active && calibration.showSpotlight && (now - lastFocusCheckTime > FOCUS_TRIGGER_INTERVAL_MS)) {
    const activeKeys = Object.keys(interpolatedFlights);
    if (activeKeys.length > 0) {
      // Pick a random plane currently in range
      const targetHex = activeKeys[Math.floor(Math.random() * activeKeys.length)];
      const targetFlight = interpolatedFlights[targetHex];
      
      focusState.active = true;
      focusState.targetHex = targetHex;
      focusState.startTime = now;
      
      console.log(`[Spotlight] Target locked: ${targetFlight.callsign || targetHex}`);
      
      // Toast notification overlay
      showNotification(`TARGET DETECTED: ${targetFlight.callsign || 'UNKNOWN'} (${targetFlight.type || 'N/A'})`);
      
      // Reset trigger check cooldown to 10 seconds
      lastFocusCheckTime = now;
    } else {
      // No active aircraft found. Try again in 3 seconds.
      lastFocusCheckTime = now - FOCUS_TRIGGER_INTERVAL_MS + 3000;
    }
  }

  // Camera Zoom & Pan Interpolation
  if (focusState.active && calibration.showSpotlight) {
    const elapsed = now - focusState.startTime;
    const targetFlight = interpolatedFlights[focusState.targetHex];

    if (!targetFlight || elapsed > focusState.durationMs) {
      console.log(`[Spotlight] Target tracking lost or window timeout. Zooming out. Reason: !targetFlight=${!targetFlight}, elapsed=${elapsed}ms`);
      focusState.active = false;
      focusState.targetHex = null;
    } else {
      // Calculate plane relative position
      const { bearing, distanceKm } = getBearingAndDistance(
        config.latitude, 
        config.longitude, 
        targetFlight.lat, 
        targetFlight.lon
      );
      
      const elev = getFlightElevation(targetFlight.alt, distanceKm);
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.45;
      const dist = baseRadius * (90 - elev) / 90;
      const angleRad = (bearing - 90) * Math.PI / 180;
      
      const relX = dist * Math.cos(angleRad);
      const relY = dist * Math.sin(angleRad);
      
      // Apply rotation matching our calibration
      const rotRad = calibration.rotation * Math.PI / 180;
      const rotX = relX * Math.cos(rotRad) - relY * Math.sin(rotRad);
      const rotY = relX * Math.sin(rotRad) + relY * Math.cos(rotRad);

      // Target Scale: Zoom in by 2.2x of user preferred base scale
      const targetScale = calibration.scale * 2.2;
      // Centered at screen center, so offsets must negate rotation coordinates
      const targetOffsetX = -rotX * targetScale;
      const targetOffsetY = -rotY * targetScale;

      // Linear interpolation (lerp) towards spotlight coordinates
      renderScale += (targetScale - renderScale) * 0.05;
      renderOffsetX += (targetOffsetX - renderOffsetX) * 0.05;
      renderOffsetY += (targetOffsetY - renderOffsetY) * 0.05;
    }
  } else {
    // Smoothly pan camera back out to normal calibration settings
    renderScale += (calibration.scale - renderScale) * 0.05;
    renderOffsetX += (calibration.offsetX - renderOffsetX) * 0.05;
    renderOffsetY += (calibration.offsetY - renderOffsetY) * 0.05;
  }
}

// Toast notification helper
let activeNotification = null;
let notificationTime = 0;

function showNotification(text) {
  activeNotification = text;
  notificationTime = Date.now();
}

function drawNotifications() {
  if (!activeNotification) return;
  const elapsed = Date.now() - notificationTime;
  if (elapsed > 4000) { // Display for 4 seconds
    activeNotification = null;
    return;
  }

  ctx.save();
  ctx.fillStyle = 'rgba(10, 16, 44, 0.9)';
  ctx.strokeStyle = '#3b82f6';
  ctx.lineWidth = 1.2;
  
  const textWidth = ctx.measureText(activeNotification).width + 50;
  const w = Math.max(300, textWidth);
  const h = 42;
  const x = canvas.width / 2 - w / 2;
  const y = 30;
  
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(x, y, w, h, 8);
  } else {
    ctx.rect(x, y, w, h);
  }
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = '#60a5fa';
  ctx.font = 'bold 12px ' + varName('font-hud');
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(activeNotification, canvas.width / 2, y + h / 2);
  ctx.restore();
}
