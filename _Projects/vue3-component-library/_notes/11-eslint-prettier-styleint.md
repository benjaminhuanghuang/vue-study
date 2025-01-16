## ESLint

```sh
pnpm add eslint -D -w

pnpm create @eslint/config
```

Add script

```json
 "scripts": {
    "lint:script": "eslint --ext .js,.jsx,.vue,.ts,.tsx --fix --quiet ./"
  },
```

## Prettier

```sh
pnpm add prettier -D -w

touch .prettierrc.cjs

```

Install eslint-config-prettier (to override the rules of eslint itself) and eslint-plugin-prettier (to allow Prettier to take over the ability of eslint --fix, which is to fix the code).

## Stylelint

```sh
pnpm add stylelint stylelint-prettier stylelint-config-standard stylelint-config-recommended-less postcss-html stylelint-config-recommended-vue stylelint-config-recess-order stylelint-config-prettier -D -w
```

Create .stylelintrc.cjs
