# Vuex

Vuex is a library for managing global state.

State is the data rendered on screen.

local state: data for one component

global state: Affects multiple component


```js
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            counter: 1;
        }
    },
    mutations: {
        increment(state, payload) {
            state.counter = state.counter + payload.value;
        }
    },
    getters: {
        finalCounter(state, getters) {
            return state.counter * getters.time;
        }
    },
    actions: {
        increment(context, payload) {
            context.commit(''); // commit the mutation
        }
    }
});

app.use(store)

{{$store.state.counter}}
or

{{counterFromStore}}
computed: {
    counterFromStore() {
        return this.$store.state.counter
    },

    ...mapGetter(['finalCounter']),
    ...mapActions(['increment']),
    // rename the actions
    ...mapActions({
        name: 'newName'
    }),
}
methods: {
    addTwo() {
        this.$store.commit('increment', {value: 2}); // call the mutation named 'increment' in the store
    }

    addOne() {
        this.$store.commit({
            type: 'increase',
            value: 10
        }); // call the mutation named 'increment' in the store
    }

    callGetter() {
        return this.$store.getters.finalCounter;
    }

    callAction() {
        this.$store.dispatch({
            type: 'increment',
            value: 10
        }); // call the action named 'increment' in the store
    }
}
```

## Organizing Store with modules
```js
const counterModule  =  {
    state() {
        return {}
    },
    mutations: {
        increase(state, payload) {
            // the state is local module state

        }
    },
    actions:{},
    getters:{
        isAuth(state, getters, rootState, rootGetter) {
            // use rootState and rootGetter to access the root store
        }
    }
}
// counterModule is merged to root store on the same level
const store = createStore({
    modules: {
        number: counterModule
    },
    state(){

    }
})
```

## Namespacing Module
```js
const counterModule  =  {
    namespace: true
}

const store = createStore({
    modules: {
        number: counterModule   // "number" is the namespace
    },
    state(){

    }
})

// In the computer
computed:{
    ...mapGetter('namespace', ['finalCounter'])
    
    ...mapGetter('namespace', {
        inc: 'increment',
        inc2: 'increase'
    })

    counter() {
        return this.$store.getters['numbers/normalizedCounter']
    }
}
```

## Structuring Vuex Code and files
main.js
```js
import store from './store/index.js'

app.use(store);
```

store/index.js
```js
import { createStore } from 'vuex';

const store = createStore({});

export default store;
```

store/modules/counter/index.js is the store for a module  
```
```
