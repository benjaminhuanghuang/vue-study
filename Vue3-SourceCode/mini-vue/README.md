# Vue3 源码实战课 | 构建你自己的 Vue3 | 掌握源码最有效的学习方法就是手写一遍！

https://www.bilibili.com/video/BV1R341177P7

https://www.bilibili.com/video/BV1Rt4y1B7sC

https://github.com/cuixiaorui/mini-vue

## Setup

```sh
npm init -y

npm i typescript -D
npx tsc --init

npm i jest @types/jest -D
```

add jest to tsconfig.json

```json
"types": ["jest"],    
"noImplicitAny": false,                 
```

add test script in package.json

```json
 "test": "jest"
```

## support ESM (the import syntax) in Jest

https://jestjs.io/docs/getting-started

```sh
npm i -D babel-jest @babel/core @babel/preset-env
```

create babel.config.js

## support Typescript in Jest

```sh
npm i -D @babel/preset-typescript
```

modify babel.config.js, add ts support in presets
```js
'@babel/preset-typescript',
```

## config jest

Modify tsconfig.json

```json
"types": ["jest"]
"lib": ["DOM", "es6"],  
```

