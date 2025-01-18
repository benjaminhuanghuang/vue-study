## use string template

```js
<div :class="`alert alert-${variant} ${center ? 'text-center' : ''}`">
    <slot></slot>
</div>

```

## use class

```js
 <span class="spinner-border" :class="{ 'spinner-border-sm': size === 'small' }" role="status"></span>
```
