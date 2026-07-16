import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setup mock browser environment
global.window = {
  addEventListener: () => {},
  removeEventListener: () => {},
  location: { protocol: 'http:', hostname: 'localhost' },
  innerWidth: 1920,
  innerHeight: 1080,
  devicePixelRatio: 1
};
global.document = {
  documentElement: {
    style: {
      setProperty: () => {}
    }
  },
  body: {
    appendChild: () => {},
    classList: { add: () => {}, remove: () => {} }
  },
  getElementById: (id) => {
    if (id === 'projection-canvas') {
      return {
        getContext: () => ({
          fillRect: () => {},
          clearRect: () => {},
          beginPath: () => {},
          moveTo: () => {},
          lineTo: () => {},
          stroke: () => {},
          fill: () => {},
          arc: () => {},
          fillText: () => {},
          measureText: () => ({ width: 100 }),
          save: () => {},
          restore: () => {},
          translate: () => {},
          rotate: () => {},
          scale: () => {},
          roundRect: () => {},
          lineWidth: 1,
          strokeStyle: '#fff',
          fillStyle: '#000'
        }),
        width: 1920,
        height: 1080,
        addEventListener: () => {}
      };
    }
    // Return mock elements for inputs/checkboxes
    return {
      value: '1.0',
      checked: true,
      textContent: '',
      addEventListener: () => {},
      classList: { add: () => {}, remove: () => {} },
      appendChild: () => {}
    };
  },
  createElement: () => ({
    style: {},
    appendChild: () => {},
    textContent: '',
    className: ''
  })
};
global.localStorage = {
  getItem: () => null,
  setItem: () => {}
};
global.getComputedStyle = () => ({
  getPropertyValue: () => '10px sans-serif'
});
global.requestAnimationFrame = () => {};
global.fetch = () => Promise.resolve({
  json: () => Promise.resolve([])
});

// Run assertions
console.log("=== Running AstroRadar Unit Tests ===");

// Helper to evaluate JS in global context
function loadScript(filePath) {
  let code = fs.readFileSync(filePath, 'utf8');
  // Strip inline exports to allow eval execution
  code = code.replace(/\bexport\s+/g, '');
  
  // Explicitly export internal symbols to global scope for testing
  if (filePath.endsWith('app.js')) {
    code += `
      global.calibration = calibration;
      global.getCanvasCoordinates = getCanvasCoordinates;
      global.classifyAircraft = classifyAircraft;
    `;
  }
  
  eval(code);
}

try {
  // Load stars database
  loadScript(path.join(__dirname, '../public/stars.js'));
  console.log("✓ stars.js loaded successfully");

  // Load app logic
  loadScript(path.join(__dirname, '../public/app.js'));
  console.log("✓ app.js loaded successfully (No Syntax/Reference errors!)");

  // Assert default calibration values
  if (typeof global.calibration === 'undefined') throw new Error("calibration object not defined");
  if (global.calibration.scale !== 1.0) throw new Error(`Default scale mismatch: expected 1.0, got ${global.calibration.scale}`);
  if (global.calibration.showSpotlight !== true) throw new Error("Default showSpotlight should be true");
  console.log("✓ Calibration default state validated");

  // Test getCanvasCoordinates projection math
  const centerX = 960;
  const centerY = 540;
  const radius = 500;
  const northCoords = global.getCanvasCoordinates(0, 0, centerX, centerY, radius);
  if (!northCoords || northCoords.x !== centerX || Math.abs(northCoords.y - (centerY - radius)) > 1) {
    throw new Error(`getCanvasCoordinates projection error for North: expected (${centerX}, ${centerY - radius}), got (${northCoords?.x}, ${northCoords?.y})`);
  }
  console.log("✓ Horizon coordinate projections verified");

  // Test classifyAircraft type identifiers
  const militaryResult = global.classifyAircraft('F18', 'VMFA115', '');
  if (!militaryResult.sizeClass) throw new Error("classifyAircraft failed");
  console.log("✓ classifyAircraft classification verified");

  console.log("\n🚀 All unit tests passed successfully!");
  process.exit(0);
} catch (err) {
  console.error("\n❌ Test Suite Failed:");
  console.error(err);
  process.exit(1);
}
