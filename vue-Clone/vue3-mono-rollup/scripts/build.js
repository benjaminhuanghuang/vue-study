/*
    node build.js <package> -f <format>
*/
import minimist from "minimist";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import esbuild from "esbuild";

// Get all packages
const fs = require("fs");
const dirs = fs.readdirSync('packages').filter((fs) => {
  return !fs.statSync(`packages/${p}`).isDirectory();
});

// Build
const args = minimist(process.argv.slice(2));
const __filename = fileURLToPath(import.meta.url); // 'file:///C:/path/to/file.txt' -> 'C:/path/to/file.txt'
// node esm module does not have __dirname
const __dirname = dirname(__filename);
// node esm module does not have require
const require = createRequire(import.meta.url);

async function build(target) {
  await execArgv("rollup", ["-c", "--environment", `TARGET:${target}`]);
}

async function runParallel(dirs, buildFn) {
  const ps = [];
  for (const target of targets) {
    ps.push(buildFn(target));
  }
  // wait for all the promises to resolve
  await Promise.all(ps);
}

runParallel(
  dirs,
  build.then(() => {
    console.log("Build successfully");
  })
);
