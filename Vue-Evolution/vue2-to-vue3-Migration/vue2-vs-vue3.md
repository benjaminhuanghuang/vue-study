


1. Vue2 对typescript 不友好， 所有属性都放在this对象上，难以推导数组的数据类型
2. Vue2 大量API在vue对象上，难以实现tree shaking
3. Vue3 重写了virtual DOM
4. Vue3 优化了template 编译
5. Vue3 use proxy



## Vue3
- change Object.defineProperty() to Proxy

- Rewrite Virtual DOM

- Fragments

- Teleport Tag

- Suspense
该组件除了可以给定默认加载数据后的渲染视图，还可以设置加载数据时的应急视图。例如，在数据加载过程中，会先显示fallback中加载数据时的应急装置组件；在数据加载完毕后，再显示default中默认的渲染视图组件，代码结构如下。也就是说，在Vue3中，开发人员并不需要关心数据加载的状态，新的Vue组合式API将了解组件的当前状态，而且它能够区分组件是正在加载还是已准备好显示。
```js
<template>
    < Suspense>
        < template #default>
            <data-view />
        </ template>
        <template #fallback>
            <loading-gears />
        </template>
    </Suspense>
</template>
```

- Tree-shaking

- Composition API

- API changes   
    - 添加了一些语法，比如组合式API(ref、reactive)、初始化应用createApp等；
    - 删除了一些API，比如将过滤器替换为计算属性或者函数、global event bus, $on和$off替换为第三方库mitt等；
    - 更新了一些API，比如v-for和v-of的优先级、v-model等。
    - 不再有全局Vue实例的$mount方法

