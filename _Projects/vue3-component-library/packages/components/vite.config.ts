import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
// @ts-ignore
import DefineOptions from "unplugin-vue-define-options/vite";

export default defineConfig({
  build: {
    outDir: "es",
    minify: false,
    rollupOptions: {
      external: ["vue"],
      //input: ["index.ts"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          preserveModules: true,
          exports: "named",
          dir: "../myuilib/es",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          preserveModules: true,
          exports: "named",
          dir: "../myuilib/lib",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
    },
  },
  plugins: [
    vue(),
    dts({
      // entryRoot: 'src',
      outputDir: ["../stellarnovaui/es/src", "../stellarnovaui/lib/src"],
      //Specify the tsconfig.json to be used is under our entire project root directory.
      //If not configured, you can also create a new tsconfig.json under the components directory.
      tsConfigFilePath: "../../tsconfig.json",
      include: ["./src/**/*.ts", "./src/**/*.vue"],
      exclude: ["./src/**/message-item.vue"],
    }),
    DefineOptions(),
    {
      name: "style",
      generateBundle(config, bundle) {
        //Here you can get the directory of the packaged files and the code.
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          //Rollup's built-in method, replace all .less in the output file code with .css,
          //because we did not package less files at that time.
          this.emitFile({
            type: "asset",
            fileName: key, //The filename unchanged.
            source: bundler.code.replace(/\.less/g, ".css"),
          });
        }
      },
    },
  ],
});
