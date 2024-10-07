# Vuex

Mutations edit the state object directly.
Mutations must be called with the commit function.
In the Vuex pattern, mutations are the only way to make changes to a store state.
Mutations must be synchronous—they can’t contain actions like API calls or
database connections.

Mutations are never called directly. To call a mutation in an app, you must call a commit
function with the name of the mutation.

Actions give you the ability to commit mutations asynchronously. Often, actions
make API calls and commit the result.