import Vue, { createApp } from 'vue'
import {
  titleMixin,
  HTTPStatusMixin
} from './util/mixins'
import {
  timeAgo,
  host
} from './util/filters'

import router from './router';  // Import the router
import store from './store';    // Import the Vuex store
import App from './App.vue'

Vue.mixin(titleMixin)
Vue.mixin(HTTPStatusMixin)

Vue.filter('timeAgo', timeAgo)
Vue.filter('host', host)

const app = createApp(App);

app.use(store);  // Register the store with your Vue app
app.use(router);  // Add the router to your app

app.mount('#app');