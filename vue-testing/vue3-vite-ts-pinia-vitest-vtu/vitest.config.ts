import { fileURLToPath, URL } from "node:url";

import { configDefaults, defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

// https://vitejs.dev/config
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      exclude: [...configDefaults.exclude],
      root: fileURLToPath(new URL("./", import.meta.url)),
      coverage: {
        provider: "istanbul",
      },
      dir: "./src",
    },
  })
);

// Unlock the power of visual testing with Vitest by Maya Shavin
// https://www.youtube.com/watch?v=lP7Op-K6ajk
