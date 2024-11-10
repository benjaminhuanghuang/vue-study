# Vue3 Reactivity

When variable, computed value change, how does Vue know to update all the things in template?

To a calculation like total = price * 2, how can we run it again when the price updates?

A object can have multiple properties and each property will need their own dep. How can we store these




## Vue2


## Vue3

Create a effect, it is a function contains the calculation total = price * 2.

```js
const effect = ()=> { total = price * 2 }
```

track() add the effect into a Set

```js
const dep = new Set()
function track() {
    dep.add(effect)
}
```

trigger() Run all of the effect

```js
function trigger() {
    dep.forEach(effect => effect())
}
```

## Reference

Reactivity in Vue 3 - How does it work?
https://www.youtube.com/watch?v=NZfNS4sJ8CI
