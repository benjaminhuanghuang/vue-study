- 全网最详细Vue3源码解析！
mono repo + TS + yarn + rollup
https://www.bilibili.com/video/BV1td4y1r76e


## Setup mono repo

```sh
yarn init -y
```

Setup workspace, modify package.json for yarn
```js
 "workspaces": [
    "packages/*"
  ],
  "type": "module"
```

or use pnpm-workspace.yaml

```yaml
packages:
  - "packages/*"
```

Setup typescript for whole workspace

```sh
cd root
yarn add -D typescript -W
npx tsc --init
```

Setup rollup for whole workspace
```sh
pnpm add rollup rollup-plugin-typescript2 @rollup/plugin-node-resolve @rollup/plugin-json execa -D -w
```
execa: Run build in parallel

Add script into the package.json
```json
"scripts": {
    "build": "node script/build.js",
},
```

Add buildOptions for each package in package.json, define package name for format

Write scripts/build.js

Create rollup.config.js


