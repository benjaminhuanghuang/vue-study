# vue2老项目改用vite全方位指南

https://www.bilibili.com/video/BV1uj411W7qA/

1. Remove the config for webpack 
remove all devDependencies in the package.json
remove babel.config.js
remove eslint config in package.json or .eslintrc

2. Install
@vitejs/plugin-vue2 need vue2.7 above

```sh
npm i vite -D
npm i -D @vitejs/plugin-vue2   # Vue3 project need @vitejs/plugin-vue
npm i
```
3. vite.config.js
```js

``` 

4. Index.html 
webpack 的打包入口是js文件， vite的打包入口是html文件。 因此要把index.html文件移到root folder

Support the variable in the index.html template.
```sh
npm i vite-plugin-html -D
```
Modify vite.config.js
```js
export default defineConfig({
  plugins: [
    vue2()
    createHtmlPlugin({
        inject: {
            data: {
                title: "Title",
                BASE_URL: "/public"
            }
        }
    })  
  ],
})
```

4. Use Vite command
```json
serve: "vite"
build: "vite build"
```
5. scss
Vite support sass by default
Add config to vite.config.js to support global scss variable
```js
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@/variable.sc  ss';"
      }
    }
  },
})
```


## Troubleshooting
- Remove the webpack related config, like postcss, babel, eslint. Vite supported by default or use different config
- Vue version >= 2.7   can use ^2.6.2 in package.json
- Copy webpack configuration, like alias, extends
- Config vite.config.ts to support import file without extension name
- Process html template variable
- Change process.env to import.meta
- Don't support commonjs module like "module.exports={}". Can use "vite-plugin-commonjs" to support commonjs
