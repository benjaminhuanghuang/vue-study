https://docs.zoom.us/doc/SyDi7U86SD6oP5fVnOa9rw

## Rename
destroyed 生命周期选项被重命名为 unmounted
beforeDestroy 生命周期选项被重命名为 beforeUnmount


## v-if and v-for

2.x 版本中在一个元素上同时使用 v-if 和 v-for 时，v-for 会优先作用，而在 3.x 版本中 v-if 总是优先于 v-for 生效。

```js
/*
 * vue2 中如果存在如下代码，改为 Vue3 后，页面不会报错，
 * 但是页面逻辑发生了不符合预期的变化
*/
<div v-if="item.value" v-for="(item, index) in list">
  {{ item.value }}
</div> 
```



## Global instance



## Async component




