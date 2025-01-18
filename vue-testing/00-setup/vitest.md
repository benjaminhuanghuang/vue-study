```sh
npm i -D vitest @vitest/ui @vue/test-utils jsdom
npm i -D vitest @vitest/ui @vue/test-utils happy-dom
```

Modify vitest.config.ts

```js
export default mergeConfig(
  defineConfig({
    test: {
      environment: "jsdom", // happy-dom or jsdom
    },
  })
);
```
