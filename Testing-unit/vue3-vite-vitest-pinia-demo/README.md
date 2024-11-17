# Vue 3 + Vite + Vitest + Pinia Demo

https://www.youtube.com/watch?v=SDiSGmCiIdk


## Setup
````sh
npm create vite@latest
npm i pinia

npm i vitest @vue/test-utils jsdom -D
```

Modify vite.config.ts to enable vitest global and the jsdom 
```
/// <reference types="vitest" />
export default defineConfig({
  ...
  test: {
    globals: true,
    environment: 'jsdom'
  },
});
```