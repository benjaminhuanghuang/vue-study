Install

```sh
npm i -D @vitest/coverage-istanbul
```

Add config in vitest.config.ts

```js
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        provider: "istanbul",
      },
    },
  })
);
```
