/*
    node build.js <package> -f <format>
*/
import minimist from "minimist";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import fs from "fs";
import { execa } from "execa";

// Get all packages

const dirs = fs.readdirSync("packages").filter((p) => {
  return fs.statSync(`packages/${p}`).isDirectory();
});

// Build
const args = minimist(process.argv.slice(2));
const __filename = fileURLToPath(import.meta.url); // 'file:///C:/path/to/file.txt' -> 'C:/path/to/file.txt'
// node esm module does not have __dirname
const __dirname = dirname(__filename);
// node esm module does not have require
const require = createRequire(import.meta.url);

async function build(target) {
  console.log(`Building ${target}...`);
  // -c use the config file
  // --environment pass the environment variables
  // stdio: "inherit": child process will print output to parent process's console
  await execa("rollup", ["-c", "--environment", `TARGET:${target}`], {stdio: "inherit"});
}

async function runParallel(targets, buildFn) {
  const ps = [];
  for (const target of targets) {
    ps.push(buildFn(target));
  }
  // wait for all the promises to resolve
  await Promise.all(ps);
}

runParallel(dirs, build).then(() => {
  console.log("Build completed");
});
