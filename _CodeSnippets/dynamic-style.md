## use string template

```js
<div :class="`alert alert-${variant} ${center ? 'text-center' : ''}`">
    <slot></slot>
</div>

```
