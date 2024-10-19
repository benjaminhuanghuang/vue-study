The root instance in Vue 3 uses createApp instead of new Vue.

vue2
```js
import Vue from 'vue'
import Vuex from 'vuex'
import App from ' . /App. vue'

Vue.use(Vuex)
const store = new Vuex. store (1})
new Vue({
    store,
    render: (h) => h (App) ,
}).$mount ('#app' )
```

vue3
```js
import {createApp} from 'vue'
import {createStore} from 'vuex'
import App from ' . /App. vue'

const store = createStore({});
createApp(App).use(store).mount('#app');
```