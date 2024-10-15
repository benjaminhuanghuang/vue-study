# Vue Best Practice

- Vue 3 + TypeScript + Vite 
- Pinia + Router + Auth
- Vitest + 
- Playwright

## Init Project
MAKE SURE node.js > 18.x
```sh
npm inti vite@latest
```


## Setup Pinia

```sh
npm i pinia 
```

## Setup router
```sh
npm i vue-router
```

## Setup Vitest + @vue/test-utils 

```sh
npm i vitest @vue/test-utils jsdom -D
```

Make Vitest API to be available globally when you run Vitest. 
https://vitest.dev/config/#globals
```ts
/// vite.config.ts
/// <reference types="vitest" />
...
export default defineConfig({
  ...
  test: {
    globals: true,
    environment: 'jsdom' // or happy-dom, otherwise you will see error "ReferenceError: document is not defined" when you run the test
  },
});
```

To get TypeScript working with the vitest api globally, modify tsconfig.app.json
```json
{
  "compilerOptions": {
    "types": ["vitest/globals"]
  },
}
```

Install Extension Vitest and Vitest Runner
Run test using the link "Run(Vitest) | Debug(Vitest)" on the test

## Setup playwright
```
```

