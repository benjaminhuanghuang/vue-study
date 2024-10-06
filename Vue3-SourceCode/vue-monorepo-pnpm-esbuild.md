# Vue monorepo setup
pnpm + esbuild
- 从零手写vue3源码
https://www.bilibili.com/video/BV1Ui421e72t?p=1

## Create project
```sh
npm i pnpm -g   # v9

cd vue3
pnpm init -y
```

Use es6 mode in package.json, support "import" syntax in .js file
```
"type": 'module'
```

Create pnpm-workspace.yaml

```json
packages:
    - "packages/*"
```

## Install dev dependencies
```sh
pnpm i -D typescript esbuild minimist -w

npx tsc --init
```
-w means install dependencies in project root folder

tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "dist",
    "sourceMap": true, 
    "target": "es2016", 
    "module": "esnext", 
    "moduleResolution": "node",
    "strict": false, 
    "resolveJsonModule": true, 
    "esModuleInterop": true,   // allow use es6 syntax import commonjs module
    "jsx": "preserve", //
    "lib": ["esnext", "dom"],
    "moduleResolution": "node10",     
    "baseUrl": ".",                         
    "paths": {
      "@vue/*": ["packages/*/src"]
    },                                      
  }
}
```

Create script
```
"build": "node scripts/build.js reactivity -f esm"
```

Define output format for each package in its package.json
```
  "module": "dist/reactivity.esm-bundler.js",
  "unpkg": "dist/reactivity.global.js"
```

Add dependency reactivity - shared