```sh
pnpm i husky -D -w

```

```sh
pnpm pkg set scripts.prepare="husky install"

```

Add script

```json
 "scripts": {
    ...
    "prepare": "husky install"
  },

```

Add commit hook

```sh
npx husky add .husky/pre-commit "npm run xxx"
```

## Commitlint

```sh
pnpm i -D @commitlint/config-conventional @commitlint/cli -w
```
