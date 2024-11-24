# Dynamic Styling
```js
<div :class="{demo: true, active: isSelected}"/>
<div class="demo" :class="{active: isSelected}"/>
```
:class directive is shorthand for v-bind:class. It allows you to bind a dynamic class to the element.

if isSelected is true, the element's class attribute will look like:
```html
<div class="demo active"></div>
```

```js
// inline
<div :style="{borderColor: isSelected ? 'red': '#ccc'}"/>

<div :style="isSelected ? 'demo active':'demo'"/>

// use computed 
<div :class="boxClasses"/> 
computed: {
    boxClasses() {
        return {
            active: this.isSelected
        }
    }
}

// array
<div :class="['demo', {active: isSelected}]"/>
```