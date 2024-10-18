

## Mutation

- In the Vuex pattern, mutations are the only way to make changes to a store state.
- Mutations edit the state object directly.
- Mutations are never called directly. To call a mutation in an app, you must call a commit function with the name of the mutation.
- Mutations must be synchronous—they can’t contain actions like API calls or database connections.

```js
<button @click="$store.commit('increment')">Increment</button>
```

## Action
You can think of Vuex actions as asynchronous mutations



```js


```



## Reference
https://vuex.vuejs.org/guide/actions.html
