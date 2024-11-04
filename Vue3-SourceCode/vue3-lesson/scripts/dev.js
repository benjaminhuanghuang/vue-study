/* 
    bundle the source code under packages folder
    Usage: 
    
    node scripts/dev.js target -f format


*/
import minimist from "minimist";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import esbuild from "esbuild";

const __fileName = fileURLToPath(import.meta.url); // get full path of the current file, dev.js
const __dirName = dirname(__fileName);
const require = createRequire(import.meta.url);

// parse the command line arguments
const args = minimist(process.argv.slice(2));

const target = args._[0] || "reactivity";
const format = args.f || "iife";

// get the full path of the entry file
const entry = resolve(__dirName, `../packages/${target}/src/index.ts`);
const pkg = require(resolve(__dirName, `../packages/${target}/package.json`));

esbuild.context({
    entryPoints: [entry],
    outfile: resolve(__dirName, `../packages/${target}/dist/${target}.js`),
    bundle: true,  // bundle the files together
    platform: "browser",
    format,
    sourcemap: true,
    globalName: pkg.buildOptions?.name

}).then((ctx) => {
    console.log("Build successfully");

    return ctx.watch();
})