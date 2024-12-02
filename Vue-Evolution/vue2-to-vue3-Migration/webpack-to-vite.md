

## index.html  入口文件的变化
在一个 Vite 项目中，index.html 在项目最外层而不是在 public 文件夹内。
所以你需要将index.html 从 Vue2 项目的 public 目录挪到最外层。此外，你还需要注意index.html 内入口文件引用的变化。

在index.html 中引入的 <script> 带有 type="module"属性的，都将会打包进代码中，

在ftl 中加载的js 资源也需要调整加上 type="module"


## vite.config.js
在Vue2 项目中，打包构建等配置是定义在 vue.config.js  中，它实际上是为覆盖webpack 配置而套的一个壳，其构建时从该文件读取 webpack 需要的配置信息。
但是在 vite 中，配置文件需要定义在 vite.config.js 中


## Node v18
vite 中我们需要使用 node 新特性，所以项目要求 node 使用最低版本是 v18。



## Prism Vue3
Vue2 版的 Zoom-UI 支持后编译的方式，也就意味着在你的项目中引入的 zoom-ui 组件，实际编译打包的时候，使用的是所在项目的打包编译配置，而不是zoom-ui 编译构建后的。
由于在 Prism Vue3 中，不再支持后编译的方式，因此 package.json 中的transformModules就没有意义了