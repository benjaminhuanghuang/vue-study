/*
    node build.js <package> -f <format>
*/
import minimist from "minimist";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import esbuild from "esbuild";

const args = minimist(process.argv.slice(2));
const __filename = fileURLToPath(import.meta.url);  // 'file:///C:/path/to/file.txt' -> 'C:/path/to/file.txt'
// node esm module does not have __dirname
const __dirname = dirname(__filename);
// node esm module does not have require
const require = createRequire(import.meta.url);

// console.log(args);
const target = args._[0] || "reactivity";
const format = args.f || "iife";

// console.log(args);
const entry = resolve(__dirname, `../packages/${target}/src/index.ts`);
const pkg = require(`../packages/${target}/package.json`);

// build
esbuild
  .context({
    entryPoints: [entry],
    outfile: resolve(__dirname, `../packages/${target}/dist/${target}.js`),
    bundle: true, // bundle shared together
    platform: "browser",
    sourcemap: true,
    format,
    globalName: pkg.buildOptions?.name,
  })
  .then((ctx) => {
    console.log("start dev");
    return ctx.watch();
  });
