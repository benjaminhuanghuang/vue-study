# Vue 3 + TypeScript + Vite

setup
```sh
npm create vite@latest

cd proj

# install the necessary Vue TypeScript definitions
npm install @vue/runtime-dom @vue/runtime-core --save-dev

npm i -D vitest 
```

Make Vitest API to be available globally when you run vitest. 
No need to import { describe, it, test, export } from 'vitest'
Modify vite.config.ts
```js
/// <reference types="vitest" />
...
// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom'
  },
})
```

To get TypeScript working with the vitest api globally, modify tsconfig.app.json
```json
{
  "compilerOptions": {
    "types": ["vitest/globals"]
  }
}
```