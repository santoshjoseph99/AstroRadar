// Database of major bright stars and constellations
// RA is in decimal hours (0 - 24)
// Dec is in decimal degrees (-90 to +90)
// Magnitude: lower numbers are brighter (Sirius is -1.46, Vega is 0.0)

export const STARS = [
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

export const CONSTELLATIONS = [
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
