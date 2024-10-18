# Vuex

## Mutation
In the Vuex pattern, mutations are the only way to make changes to a store state.
- To update the store state, you should commit mutations.
- Mutations edit the state object directly.
- Mutations must be synchronous—they can’t contain actions like API calls or
database connections.
- Mutations are never called directly. To call a mutation in an app, you must call a commit
function with the name of the mutation.

## Action
https://vuex.vuejs.org/guide/actions.html

You can think of Vuex actions as asynchronous mutations

Actions give you the ability to commit mutations asynchronously. Often, actions
make API calls and commit the result.

- Actions are asynchronous.
- Actions can commit mutations.
- Actions have access to the store instance.
- Actions must be called with the dispatch function.

```js
const store = new Vuex.Store({
    state: {

    }

    actions: {
        fetchItem(context) {
            context.commit('fetchItems')
            fetch('https://endpoint.com/items')
            .then(data => context.commit('fetchItemsSuccess', data.json));
            .catch(() => context.commit('fetchItemsFailure'))
                    }
    }
})


// In component
methods: {
    fetchItems () {
        this.$store.dispatch('fetchItems')
    }
}

```

## getter
Getters are called only when the data they depend on changes.
If the data hasn’t changed, they return their previous calculations
You can think of them as cached functions.