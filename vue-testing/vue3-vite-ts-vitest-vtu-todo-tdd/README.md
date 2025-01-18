# Vue 3 + TypeScript + Vite

https://www.youtube.com/watch?v=AtW2LuVwUrg

## Setup

```sh
npm i -D @types/node
npm i axios
npm i -D axios-mock-adapter
npm i -D vitest @vitest/ui @vue/test-utils happy-dom @vitest/coverage-c8
npm i -D vitest @vue/test-utils jsdom @vitest/coverage-c8
```

### Global access

Modify tsconfig.json

```json
"types": ["vitest/globals"],
```

With this config, you don't need import { describe, test, expect} from 'vitest' in ts code

Modify vitest.config.ts for vitest execution

```ts
globals: true,
```

### Enable @

Modify tsconfig.json

```json
"baseUrl": ".",
"paths": {
    "@/*": ["src/*"]
}
```

Modify vite.config.ts

```ts
import { fileURLToPath, URL } from "node:url";
resolve: {
    alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
},
```

### vitest.config.ts

````ts
 test: {
      globals: true,
      environment: "happy-dom",
      exclude: [...configDefaults.exclude],
      coverage: {
        provider: "istanbul",
      },
      dir: "./src",
    },
    ```
````

### Add Test script

```
"tset" : "vitest --ui"
```
