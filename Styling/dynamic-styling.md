# Dynamic Styling

```js
// inline
<div :style="{borderColor: isSelected ? 'red': '#ccc'}"/>

<div :style="isSelected ? 'demo active':'demo'"/>
<div :class="{demo: true, active: isSelected}"/>
<div class="demo" :class="{active: isSelected}"/>

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