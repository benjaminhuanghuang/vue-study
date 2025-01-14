# 导读 | 一文看懂 Vue.js 3.0 的优化

vue.js 2.x   introduce vDOM

vue.js 3.x
- monorepo + typescript
- tree-shaking
    依赖ES2015模块语法的静态结构（import and export）， 通过编译阶段的静态分析，找到没有import的模块并打上标记
- hijack data access
    Proxy API 不能监听到内部层次对象变化，Vue.js 3 在getter中用递归