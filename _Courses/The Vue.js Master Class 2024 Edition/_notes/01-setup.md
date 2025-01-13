# Setup

## Crate app

```sh
    npm create vue@latest 

    TS
    router
    pinia
    ESlint
    Prettier

```

## VS code extensions

- Vue - official
- Vu 3 Snippets
- ESlint: provide real time feedback, no need to run the script
- Prettier: auto format
  
## ESlint

script

```json
"lint" : "eslint . --ext .veu,.js --fix --ignore-path .gitignore"
```

.eslintrc.cjs

```js
require(@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
root: true,
'extends': [
    'plugin: vue/vue3-essential'
    'eslint: recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin: vue/vue3-strongly-recommended'
],
parserOptions: {
    ecmaVersion: 'latest'
},
rules: {
    'no-unused-vars': "warn"
}
```

## Prettier

```json
"format" : "prettier --write src/"
```

.prettierrc.json

```json
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "printWidth": 100
}
```

set default formatter for VS code in .setting.json

```json
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## Router

