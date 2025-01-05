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

set default formatter
.setting.json
```json
{
    "editor. formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```