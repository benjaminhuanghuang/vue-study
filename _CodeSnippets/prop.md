# Props with default value


## Vue.3.4

```js
interface Props [
    readonly: false
]

const props = withDefaults(defineProps<Props>(), {
    readonly: false
})
```

## Vue.3.5

```js
interface Props [
    readonly: false
]
// props destructure and set default value
const {readonly = false} = defineProps<{
    readonly?: boolean
}>()
```
