# Monorepo + pnpm + esbuild
1. Setup monorepo
```sh
# Install pnpm
npm i pnpm -g

# Init workspace, create package.json
pnpm init  

mkdir packages
touch pnpm-workspace.yaml

```

add .npmrc
```json
shamefull-hoist=true    # hoist all dependencies to the node_modules of the root directory
```  

2. Setup project  
Install dependency
```sh
pnpm install typescript esbuild minimist -D -w    # -w install dependencies to root 
```
minimist: parse the command line parameter

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
3. Bundle packages

```json
 "dev": "node scripts/dev.js reactivity -f esm"
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


