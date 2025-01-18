## tsconfig.app.json

```json
"compilerOptions": {
    "types": ["vitest/globals"]
}
```

## vitest.config.ts

```js
export default mergeConfig(
  defineConfig({
    test: {
      globals: true,
    },
  })
);
```
