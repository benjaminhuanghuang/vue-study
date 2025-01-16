# Setting Up Component Library Documentation with VitePress

create site folder, execute pnpm init, and then install vitepress and vue.

```sh
cd site

pnpm init
pnpm install -D vitepress vue
```

Add some commands in site/package.json

```json
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs",
    "docs:deploy": "node script/deploy.js"
  },
```

Create config.js in the docs/.vitepress directory.
