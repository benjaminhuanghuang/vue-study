# Vuex Composition API
https://vuex.vuejs.org/guide/composition-api.html

With Vue 3’s Composition API, you can easily access the router and its current state (like route parameters, query, etc.) directly inside your components

To access the store within the setup hook, you can call the useStore function

```js
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      // access a state in computed function
      count: computed(() => store.state.count),

      // access a getter in computed function
      double: computed(() => store.getters.double),

       // access a mutation
      increment: () => store.commit('increment'),

      // access an action
      asyncIncrement: () => store.dispatch('asyncIncrement'),
    }
  }
}
```