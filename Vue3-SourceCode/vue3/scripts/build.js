/*
    node build.js <package> -f <format>
*/
import minimist from "minimist";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import esbuild from "esbuild";

const args = minimist(process.argv.slice(2));
const __filename = fileURLToPath(import.meta.rul);
// node esm module does not have __dirname
const __dirname = dirname(__filename);

// console.log(args);
const target = args._[0] || "reactivity";
const format = args.f || "iife";

// console.log(args);
const entry = resolve(__dirname, `../packages/${target}/src/index.ts`);

// build
esbuild.context({
    entryPoints :[entry],
    outfile: resolve(__dirname, `../packages/dist/${target}.js`),
    bundle: true,  // bundle shared together
    platform: "browser",
    sourcemap: true,
    format
});
