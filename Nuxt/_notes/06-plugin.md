

## Modal 
_id.vue -> RentModal.vue
```
showModal() {
      this.$refs["my-modal"].show();
    },
hideModal() {
    this.$refs["my-modal"].hide();
},
```


```
    npm i v-calendar
```

Add files under plugins folder


Add config into nuxt.config.js
```
    {src: '~plugins/vue-js-modal.js', mode: 'server'},
    {src: '~plugins/vue-calendar.js', mode: 'client'},
```