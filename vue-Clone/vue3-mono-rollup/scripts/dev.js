/*
  Build one package in watch mode
*/
import { execa } from "execa";

async function build(target) {
  console.log(`Building ${target}...`);
  // -c use the config file
  // -w watch mode
  // --environment pass the environment variables
  // stdio: "inherit": child process will print output to parent process's console
  await execa("rollup", ["-cw", "--environment", `TARGET:${target}`], {stdio: "inherit"});
}

build('reactivity')