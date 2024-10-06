# Pinia

The official state management library for Vue has changed to Pinia. 
Pinia has almost the exact same or enhanced API as Vuex 5, described in Vuex 5 RFC. 
You could simply consider Pinia as Vuex 5 with a different name.


## Install
```sh
npm i pinia
```


## Define store
```js
const app = createApp(App);
app.use(createPinia());

createApp(App).mount('#app')
```