 
在Vue2中，可以在子组件标签上用v-model来实现父子组件之间的双向通信，它的本质是“v-bind：value”与“v-on：input”的结合。
这也就意味着一个子组件标签上只能有一个v-model，如果想绑定其他属性和自定义事件的组合，就需要用.sync修饰符来实现。
在Vue3中去除了.sync语法，将v-model语法设计为可以绑定任意属性和任意自定义事件的组合，这样在一个子组件标签上就可以使用多个v-model了。

Vue3将v-model的设计原理进行了改造，v-model不再单纯是“v-bind：value”与“v-on：input”的结合，已经演化为“v-bind：modelValue”与“v-on：​['update：modelValue']​”的结合，直接绑定modelValue并且监听update：modelValue就可以实现v-model双向数据绑定的操作。因此，原来Vue2中v-model的绑定代码将转化成如下代码。

v-model now supports multiple bindings and requires explicit prop names in child components.


```html
<!-- Vue 2 -->
<child-component v-model="someData" />

<!-- Vue 3 -->
<child-component v-model:value="someData" />
```