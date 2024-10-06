# Skip file extension when import

Modify vite.config.js
```js
export default defineConfig({
  resolve: {
    extension: [".vue", ".js", ".css"]
  }
})