# Vite + Vitest + Vue Test utils Setup

MAKE SURE node.js > 18.

Install dependency
```sh
npm create vite@latest

npm i -D vitest @vue/test-utils
```

npm Script
```json
"test": "vitest"    # watch mode

"test": "vitest run"    # run once

"coverage": "vitest run --coverage"
```

## Configuration
Make Vitest API to be available globally when you run vitest. 
No need to import { describe, it, test, export } from 'vitest'
https://vitest.dev/config/#globals

Modify vite.config.ts
```js
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom' // or happy-dom, otherwise you will see error "ReferenceError: document is not defined" when you run the test
  },
})
```
Need jsdom library
```sh
npm i jsdom -D # or happy-dom
```

To get TypeScript working with the vitest api globally, modify tsconfig.app.json
```json
{
  "compilerOptions": {
    "types": ["vitest/globals"]
  }
}
```

## Troubleshooting
"ReferenceError: document is not defined" when you run the test
> add " environment: 'jsdom' " to vite.config.ts