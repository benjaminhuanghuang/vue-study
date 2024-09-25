## Mutations
Purpose: Mutations are used to directly change the state in a Vuex store. They are synchronous and should be the only way to modify the state.

Structure: Mutations are defined as functions that take the state as the first argument and any payload as the second argument.

Usage: You typically call mutations using the commit method.

```js
const mutations = {
  increment(state) {
    state.count++;
  },
  setCount(state, payload) {
    state.count = payload;
  }
};
```

## Actions
Purpose: Actions are used to perform asynchronous operations and can commit mutations. They can also contain any arbitrary asynchronous logic (like API calls).

Structure: Actions are defined as functions that take the context object (which includes commit, state, etc.) and a payload as arguments.

Usage: You call actions using the dispatch method.
```js
const actions = {
  async fetchData({ commit }) {
    const data = await fetchSomeData();
    commit('setCount', data.count);
  }
};
```

## Summary
Mutations: Synchronous, direct state changes.

Actions: Asynchronous, can contain logic and commit mutations.


