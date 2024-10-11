# Mixin
Mixins work by merging options into a component’s options. 

Mixins add functionality to Vue components.

## Merge strategy
Different properties have different strategies.
For example, lifecycle hooks are merged into an array and called one after the other. 
Object properties like methods and components are combined into a single object. 

If conflicting properties exist, the component property will override the mixin property.

https://vuejs.org/v2/guide/mixins.html#Option-Merging。


## globally or locally
```js
// Global
Vue.mixin(logHelloOnCreateMixin);

// Local
const TestComponent = {
    mixins: [logHelloOnCreateMixin]
}

```

