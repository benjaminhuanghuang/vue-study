import ts from "rollup-plugin-typescript2"; // parse ts
import json from "@rollup/plugin-json"; // parse json
import resolvePlugin from "@rollup/plugin-node-resolve"; // resolve 3rd party modules
import path from "node:path";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

let packagesDir = path.resolve(__dirname, "packages");
const packageDir = path.resolve(packagesDir, process.env.TARGET); // get the package directory
const resolve = (/** @type {string} */ p) => path.resolve(packageDir, p)
const pkg = JSON.parse(readFileSync(`${packageDir}/package.json`, "utf-8"));
const packOptions = pkg.buildOptions;
console.log(packOptions);

const outputOptions = {
  "esm-bundler": {
    file: path.resolve(packageDir, `dist/${pkg.name}.esm-bundler.js`),
    format: `es`,
  },
  cjs: {
    file: path.resolve(packageDir, `dist/${pkg.name}.cjs.js`),
    format: `cjs`,
  },
  global: {
    file: path.resolve(packageDir, `dist/${pkg.name}.global.js`),
    format: `iife`,
  },
};

const options = pkg.buildOptions;

export default pkg.buildOptions.formats.map((format) => {
    console.log('format', format);
  return createConfig(format, outputOptions[format]);
});

function createConfig(format, output) {
  output.sourcemap = true;
  output.name = options.name;

  return {
    input: resolve("src/index.ts"),
    output,
    plugins: [ 
      json(),
      ts({
        tsconfig: path.resolve(__dirname, "tsconfig.json"),
      }),
      resolvePlugin(),
    ],
  };
}
