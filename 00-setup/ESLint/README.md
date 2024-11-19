# ESLint

## Simple approach, define the rule in script
```
    "lint": "eslint . --ext .vue,.js,.jsx --fix --ignore-path .gitignore"
```

## Use config file

Install ESLint VSCode extension

.eslintrc.cjs
```js
require ('@rushstack/eslint-patch/modern-module-resolution' )

module. exports = {
    root: true,
    'extends':[
        'plugin: vue/vue3-essential',
        'eslint: recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting',
        'plugin: vue/vue3-strongly-recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        "no-unused-vars": 1,  // 0: ignore, 1: warning, 2: error
    }
}

```