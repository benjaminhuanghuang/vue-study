
# Setup mono repo

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

Modify tsconfig.json

```json
  "target": "esnext",                            
  "module": "esnext",     
  "sourceMap": true,         
  
  // Reference packages cross workspace
  "moduleResolution": "node",
  "baseUrl": ".",                                  
  "paths": {
    "@vue/*": ["packages/*/src"]
  },                       
```

Setup rollup for whole workspace

```sh
pnpm add rollup rollup-plugin-typescript2 @rollup/plugin-node-resolve @rollup/plugin-json execa -D -w
```
execa: Run build in parallel

Write build script scripts/build.js and scripts/dev.js 
```json
"scripts": {
    "build": "node script/build.js",
    "dev": "node script/dev.js",
},
```

Add buildOptions for each package in package.json, define package name for format

Create rollup.config.js

