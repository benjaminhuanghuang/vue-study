# Vue3 源码实战课 | 构建你自己的 Vue3 | 掌握源码最有效的学习方法就是手写一遍！

https://www.bilibili.com/video/BV1R341177P7/?spm_id_from=autoNext&vd_source=b7025abbc1efd8b7631e43fa506ade3a

https://github.com/cuixiaorui/mini-vue

## Setup
```sh
npm init -y

npm i typescript -D
npx tsc --init

npm i jest @types/jest -D
```

## support ESM (the import syntax) in Jest

https://jestjs.io/docs/getting-started
```
npm i -D babel-jest @babel/core @babel/preset-env
```
create babel.config.js

## support Typescript in Jest
```
npm i -D @babel/preset-typescript
```
modify babel.config.js, add ts support in presets
```js
'@babel/preset-typescript',
```

## config jest
Modify tsconfig.json
```
"types": ["jest"]
"lib": ["DOM", "es6"],  
```
Add npm script
```json
"test": "jest"
```

