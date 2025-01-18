## tsconfig.app.json

```json
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
}
```

## vitest.config.ts

```js
// Need @types/node
import { fileURLToPath, URL } from "node:url";

export default mergeConfig(
  defineConfig({
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  })
);
```
