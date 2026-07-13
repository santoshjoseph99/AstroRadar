# Skylight Lite

Skylight Lite is a lightweight, real-time ceiling projection system for aircraft tracking and celestial mapping. It is optimized to run on local servers (like your Mac or a Raspberry Pi) and projected via web browsers on smart projectors (like Android 11 portable projectors).

## Features
- **Overhead Flight Tracking:** Fetches live flight data using the keyless `adsb.lol` API (compatible with ADS-B Exchange format) filtered to your local area.
- **Dynamic Star Dome:** Computes and renders the night sky (stars, constellations) corresponding to your exact coordinates and local sidereal time.
- **Projector Calibration:** Shift, rotate, and scale the canvas to align perfectly with your ceiling (persists settings in browser storage).
- **Smooth Animation:** Interpolates flight coordinates frame-by-frame for fluid 60fps canvas animation.
- **Multiple Themes:** Classic Starry Night, Neon Tactical Radar, High Contrast Mono, and Deep Space Nebula.

## Prerequisites
- Node.js (v18 or higher recommended)
- Internet connection (for flight API queries)

## Installation

1. Clone or copy the project files to your folder.
2. Install npm dependencies:
   ```bash
   npm install
   ```

## Configuration

Edit the `.env` file in the root directory to set your coordinates and preferences:
```env
PORT=3050
LATITUDE=38.63991686477805
LONGITUDE=-122.86682359326302
RADIUS_KM=50
LOCATION_NAME="Healdsburg, CA"
```

## Running the Server

Start the server in production mode:
```bash
npm start
```

Or start the server in watch/development mode:
```bash
npm run dev
```

The server binds to all network interfaces (`0.0.0.0`) so that other devices on your Wi-Fi network can access it.

## Viewing & Calibrating

1. **On your Mac:**
   Open [http://localhost:3050](http://localhost:3050) in any web browser.
2. **On your Projector:**
   Connect the projector to the same Wi-Fi network as your Mac. Open the projector's web browser and navigate to `http://<your-mac-ip>:3050` (substitute `<your-mac-ip>` with your Mac's local network IP).
3. **Calibrating:**
   - Press **C** on your keyboard (or click the gear icon in the top-right) to toggle the **Skylight Control Center**.
   - Use the range sliders or keyboard shortcuts to align:
     - **Arrow Keys:** Translate offset X/Y
     - **`[` and `]`:** Rotate the canvas
     - **`-` and `+` / `=`:** Scale the canvas
     - **`R`:** Reset calibration settings
