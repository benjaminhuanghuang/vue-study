
# 全网最详细Vue3源码解析！
https://www.bilibili.com/video/BV1td4y1r76e/?spm_id_from=333.337.search-card.all.click&vd_source=b7025abbc1efd8b7631e43fa506ade3a


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
