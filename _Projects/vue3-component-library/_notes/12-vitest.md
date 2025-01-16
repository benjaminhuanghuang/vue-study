# Vitest

```sh

# happy-dom provide the DOM environment
# Install test coverage display tool c8.
pnpm add vitest happy-dom c8 @vue/test-utils -D -w
```

create vitest.config.js under packages/components/

Add script in packages/components/package.json

```json
"scripts": {
    "test": "vitest",
    "coverage": "vitest run --coverage"
  }
```
