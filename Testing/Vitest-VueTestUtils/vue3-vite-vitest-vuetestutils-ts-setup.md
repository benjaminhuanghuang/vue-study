# Vite + Vitest + Vue Test utils Setup

## Init project
MAKE SURE node.js > 18.x

```sh
npm inti vite@latest
```
 
## Setup Vitest + @vue/test-utils 
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


## Troubleshooting
"ReferenceError: document is not defined" when you run the test
> add " environment: 'jsdom' " to vite.config.ts