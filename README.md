# AstroRadar 🛰️🌌

AstroRadar is a lightweight, real-time ceiling projection system that tracks aircraft flying overhead and maps them against the local night sky. 

Designed specifically for portable projectors (like Android 11 smart projectors) projecting onto a bedroom or living room ceiling, AstroRadar blends real-time aviation feed telemetry with celestial sidereal calculations to turn your ceiling into a live cockpit sky dome.

---

## 🌟 Key Features

*   **Real-Time Flight Tracking:** Live coordinates, speeds, tracks, altitudes, and squawks projected onto your ceiling in real-time.
*   **Custom Aircraft Graphics:** 
    *   🚁 **Helicopters:** Custom rotor-and-skid geometries.
    *   🛩️ **Private General Aviation:** Displayed as hollow outlined shapes to separate local private craft from commercial traffic.
    *   🚨 **Emergency/Public Safety Alerts:** Firefighting tankers (e.g. CAL FIRE `TANKER93`), medical helicopters (REACH), and police/sheriff patrols (`HENRY1`) flash in bright neon red with pulsing radar alert rings.
    *   ✈️ **Scale-by-Altitude:** Low-flying aircraft render larger; high-altitude commercial liners cruise as smaller markers.
*   **Dynamic Sidereal Star Dome:** Calculates Greenwich Mean Sidereal Time (GMST) and Local Sidereal Time (LST) from the system clock to project the physical stars (Polaris, Sirius, Capella, etc.) and major constellations directly above your house.
*   **TV Remote Control Optimized:** Fully D-pad remote-compatible settings sidebar. Tapping **OK** or **Menu** slides in the panel; **UP/DOWN** selects settings (Scale, Rotation, Shift offsets, Brightness, Themes); **LEFT/RIGHT** adjusts values.
*   **Multiple Radar Themes:** Swap between *Tactical Radar* (neon green), *Starry Night*, *High Contrast Mono*, and *Deep Space* (nebula).
*   **Resilient API Failover & Offline Simulator:** Automatically rotates queries through multiple public feeds (`Airplanes.Live` ➔ `ADSB.lol` ➔ `ADSB.one`) to bypass outages. Falls back to a realistic local simulation if all networks fail.

---

## ⚙️ Project Architecture

AstroRadar can be run in two ways:
1.  **Server Mode (Web App):** A Node.js backend running on a Mac/PC/Raspberry Pi fetches and caches the flight data. The projector connects to it via local Wi-Fi.
2.  **Standalone Client Mode (Android TV App):** A lightweight Android app running directly on the projector using an integrated WebView. It calls the public flight APIs directly via Wi-Fi without needing a local computer server.

---

## 💻 Web App Installation & Setup (Mac/PC/Pi)

### 1. Prerequisites
*   Node.js (v18 or higher recommended)
*   Active Wi-Fi connection

### 2. Installation
Clone the repository and install the dependencies:
```bash
git clone https://github.com/santoshjoseph99/AstroRadar.git
cd AstroRadar
npm install
```

### 3. Configuration
Create a `.env` file in the root directory:
```env
PORT=3050
LATITUDE=38.6399
LONGITUDE=-122.8668
RADIUS_KM=50
LOCATION_NAME="Healdsburg, CA"
```

### 4. Run the Server
Start the server in production mode:
```bash
npm start
```
Or start in development watch mode:
```bash
npm run dev
```

### 5. Access and Align
*   **On your Mac/PC:** Open `http://localhost:3050`.
*   **On your Projector:** Connect the projector to the same Wi-Fi network. Open its browser and navigate to `http://<your-computer-ip>:3050`.
*   **Calibrate:** Press **C** on your keyboard (or click the screen) to open the control drawer. Use arrow keys to shift the radar dome, `[` / `]` to rotate north to correct north, and `+` / `-` to scale it to fit your ceiling. Press **R** to reset calibration.

---

## 🤖 Android TV Standalone App Compilation

The `android/` directory contains a native Android 11 Studio project.

### 1. Sync Web Assets
Any edits you make to the Web App code inside `public/` must be compiled into the Android local assets. Run the automated script:
```bash
bash copy_web_assets.sh
```

### 2. Compile in Android Studio
1.  Open **Android Studio** on your Mac.
2.  Import the `android/` folder as a project.
3.  Select **Build ➔ Clean Project**, then select **Build ➔ Build Bundle(s) / APK(s) ➔ Build APK(s)**.
4.  The compiled app is saved as `app-debug.apk` in `android/app/build/outputs/apk/debug/`.

### 3. Install on Projector
1.  Copy `app-debug.apk` to a USB thumb drive.
2.  Plug the drive into the projector.
3.  Open the projector's File Manager app, click the `.apk` file, and install it.
4.  Launch the **AstroRadar** app! 

---

## 🗂️ Project Directory Structure

```text
AstroRadar/
├── android/            # Native Android TV Studio project
├── public/             # Web App static client code
│   ├── app.js          # Core Canvas graphics, Math projections, TV remote engine
│   ├── stars.js        # Star catalog and constellation connections
│   ├── index.html      # UI structure and overlays
│   └── style.css       # Design token rules & CSS styling
├── server.js           # Mac Express backend and caching proxy
├── package.json        # Node configuration
└── copy_web_assets.sh  # Script to sync Web updates into Android app assets
```

---

## 🤝 Contributing
Contributions, bug reports, and suggestions are welcome! Feel free to open an Issue or submit a Pull Request.

## 📄 License
This project is open-source and licensed under the MIT License.
