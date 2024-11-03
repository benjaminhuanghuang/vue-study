# 【完结】Vue3最新源码剖析，通俗易懂，快速上手
https://www.bilibili.com/video/BV1RnySYmEcj?spm_id_from=333.788.player.switch&vd_source=b7025abbc1efd8b7631e43fa506ade3a&p=2


## Setup monorepo
```sh
npm i pnpm -g

pnpm init
```

.npmrc
```json
shamefull-hoist=true    # hoist all dependencies to the root node_modules directory
```

pnpm-workspace.yaml
```
```

Install dependency
```sh
pnpm install typescript esbuild minimist -D -w    # install dependency to root 
```

create ts-config
```sh
npx tsc --init
```

packages relationship in tsconfig.json
```json
"baseUrl": "./" /* Base directory to resolve non-absolute module names. */,
"paths": {
    "@vue/*": ["packages/*/src"]
}
```

Install package
```sh
pnpm i @vue/shared --workspace --filter @vue/reactivity
```
It will update packages/reactive/package.json
```json
 "dependencies": {
    "@vue/shared": "workspace:*"
}
```


