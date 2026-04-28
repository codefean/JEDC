const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "../src/data/flooded-businesses");
const outputFile = path.join(__dirname, "../src/data/floodedBusinessesByLevel.js");

const result = {};

for (let level = 8; level <= 20; level++) {
  const filePath = path.join(inputDir, `fb${level}.geojson`);
  const geojson = JSON.parse(fs.readFileSync(filePath, "utf8"));

  result[level] = geojson.features
    .map((feature) => feature.properties?.USER_Licen)
    .filter(Boolean);
}

fs.writeFileSync(
  outputFile,
  `export const floodedBusinessesByLevel = ${JSON.stringify(result, null, 2)};\n`
);

console.log("Created floodedBusinessesByLevel.js");