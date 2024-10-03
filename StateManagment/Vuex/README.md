# Vuex

Vuex is a library for managing global state.

It serves as a `centralized store` for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.

State is the data rendered on screen.

local state: data for one component

global state: Affects multiple component


## Install
```
npm i vuex
```

## mutations
Function used to update data in store

## getters
getters are the computed values defined in the store.


## actions
Used for async update


## Mapper helper
```js
import { mapGetters } from 'vuex';

computed: {
    ...mapGetter(['finalCounter'])
}

{{finalCounter}}
```