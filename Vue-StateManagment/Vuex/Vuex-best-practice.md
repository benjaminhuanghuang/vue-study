
# Vuex best practice

The Vuex store is built from 
- state: The state contains the data used to render the application
- mutations: Mutations are used to change the store state.
- actions: Actions can be asynchronous. Actions are usually used to commit mutations after an API call has finished 
- getters: Getters are functions used to compute values using data from the store.


## Mutations vs Actions
- Mutations edit the state object directly.
- Mutations must be called with the commit function.
- In the Vuex pattern, mutations are the only way to make changes to a store state.
- Mutations must be synchronous—they can’t contain actions like API calls or database connections.

Mutations are never called directly. To call a mutation in an app, you must call a commit
function with the name of the mutation.

Actions give you the ability to commit mutations asynchronously. Often, actions
make API calls and commit the result.
- Actions are asynchronous.
- Actions can commit mutations.
- Actions have access to the store instance.
- Actions must be called with the dispatch function.

Difference Between dispatch and commit:
- commit is used to trigger mutations, which synchronously change the state.
- dispatch is used to trigger actions, which can include asynchronous operations and ultimately commit mutations to change the state.


# Getter
Vuex getters are like computed properties for stores.
Getters are called only when the data they depend on changes. If the data hasn’t
changed, they return their previous calculations.