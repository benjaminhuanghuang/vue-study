## use Vite to package our component library

## Packing configuration

```sh
pnpm add vite @vitejs/plugin-vue -D -w

```

Create vite.config.ts configuration file under the components directory.

```ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  build: {
    outDir: "es",
    //minify: false,
    rollupOptions: {
      external: ["vue"],
      input: ["index.ts"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          preserveModules: true,
          exports: "named",
          dir: "../stellarnovaui/es",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          preserveModules: true,
          exports: "named",
          dir: "../stellarnovaui/lib",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
    },
  },
  plugins: [vue()],
});
```

Add build command

```json
"scripts": {
    "build": "vite build"
  },
```

## generate declaration files (\*.d.ts) for the packaged files.

```sh
pnpm add vite-plugin-dts@1.4.1 -D -w
```

modify packages/components/vite.config.ts

```js
import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";
export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: "./src",
      outputDir: ["../stellarnovaui/es/src", "../stellarnovaui/lib/src"],
      tsConfigFilePath: "../../tsconfig.json",
    }),
    DefineOptions(),
  ],
});
```
