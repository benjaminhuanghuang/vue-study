# Setup vue3 source code debug env

1. clone https://github.com/vuejs/core

2. install pnpm 
```sh
npm i pnpm -g
```

3. delete "puppeteer": "~23.3.0" in the package.json

4. Install dependency
```sh
pnpm i
```

5. add --sourcemap to script "dev" in package.json [No Need]
```
  "dev": "node scripts/dev.js --sourcemap ",
```

run project, create build
```sh
pnpm run dev
```

Build result can be find at packages/vue/dist

6. Open a sample packages/vue/examples/classic/todomvc.html

Debug it in chrome.



