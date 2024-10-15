# Vue Best Practice

- Vue 3 + TypeScript + Vite 
- Pinia + Router + Auth
- Vitest + 
- Playwright

## Init Project
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

## Setup Vitest

```sh
npm i vitest @vue/test-utils jsdom -D
```

Enable Vitest api globally
vite.config.ts
```ts
/// <reference types="vitest" />
...
export default defineConfig({
  ...
  test: {
    globals: true,
    environment: 'jsdom'
  },
});
```
Tell typescript enable Vitest api globally
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

