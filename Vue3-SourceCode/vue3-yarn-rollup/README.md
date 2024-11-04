- 全网最详细Vue3源码解析！
yarn + rollup
https://www.bilibili.com/video/BV1td4y1r76e


## setup
```sh
yarn add -D typescript
npx tsc --init
```
add   "type": "module" to package.json

install rollup
```sh
yarn add rollup rollup-plugin-typescript2 @rollup/plugin-node-resolve @rollup/plugin-json execa -D -W
```
execa: parallel build

add script into the package.json
```json
"scripts": {
    "build": "node script/build.js",
},
```

Add buildOptions in package.json

Write scripts/build.js

Create rollup.config.js


