# 12 VueJS Best Practices for Pro Developers

https://learnvue.co/articles/vue-best-practices


## 1. key
```js
<template>
  <!-- BAD -->
  <div v-for="product in products">{{ product }}</div>

  <!-- GOOD! -->
  <div v-for="product in products" :key="product.id">{{ product }}</div>
</template>
```

## 2. Use kebab-case for events
```js
// PopupWindow.vue
this.$emit("close-window");


// Parent.vue
<template>
<popup-window @close-window='handleEvent()' />
</template>
```

## 3. Declare props with camelCase and use kebab-case in templates


## 6. Validate your props with good definitions

## 9. Components declared and used ONCE should have the prefix “The”

## 11. Don’t call a method on created AND watch
