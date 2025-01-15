## use Vite to package our component library

```sh
pnpm add vite @vitejs/plugin-vue -D -w
```

Create vite.config.ts configuration file under the components directory.

## generate declaration files (\*.d.ts) for the packaged files.

```sh
pnpm add vite-plugin-dts@1.4.1 -D -w
```

modify packages/components/vite.config.ts
