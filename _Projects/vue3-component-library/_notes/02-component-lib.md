# Component library

use Volar in VSCode to add hinting for the global component.

```sh
cd root
pnpm add @vue/runtime-core -D -w
```

Create components.d.ts file under packages/components/src/components.d.ts

add type to tsconfig.json

```json
"compilerOptions": {
    //...
    "types": ["easyest/lib/src/components"]
},
```
