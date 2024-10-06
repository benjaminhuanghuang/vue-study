import fs from "fs";
import {execa} from "execa";

// exclude files
const dirs = fs
  .readdirSync("packages")
  .filter((d) => fs.statSync(`packages/${d}`).isDirectory());

console.log(dirs);

// parallel build
async function build(dir) {
    await execa("rollup", ["-c", "--environment", `TARGET:${dir}`]);
}

async function runParallel(dirs, build) {
  let result = [];
  for (const dir of dirs) {
    const p = Promise.resolve().then(() => build(dir))
   result.push(p);
  }
  return Promise.all(result);
}

runParallel(dirs, build).then(() => {
  console.log("Done.");
});
