# Scoped Styles

The scoped style only affect the template in which you defined it.

```js

<style scoped>

<style>
```


## Implementation
Vue give the elements special attributes, also change the css selector

```html
<head data-v-9a999fe1>

head[data-v-9a999fe1]{
    color: red
}
```