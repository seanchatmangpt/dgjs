const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "src");
const outputFile = path.join(__dirname, "src/index.ts");

function generateExports(dir, base = "") {
  let exports = [];

  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const relativePath = path.join(base, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      exports = exports.concat(generateExports(filePath, relativePath));
    } else if (file.endsWith(".ts") && !file.endsWith(".d.ts")) {
      const exportPath = relativePath.replace(/\\/g, "/").replace(/\.ts$/, "");
      exports.push(`export * from './${exportPath}';`);
    }
  });

  return exports;
}

const exps = generateExports(srcDir);
fs.writeFileSync(outputFile, exps.join("\n") + "\n");
console.log(`Exports generated in ${outputFile}`);
