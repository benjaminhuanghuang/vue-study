# Computed values and side effects

Some JavaScript methods/functions have side effects, meaning that they mutate/change the original value as well

This kind of method can ruin your app and result in unexpected behaviors.
```js
<script setup>
const arr = ref([1, 2, 3, 4, 5])
const reverseOfArr = computed(() => arr.value.reverse())
</script>
```

Right way
```js
<script setup>
const arr = ref([1, 2, 3, 4, 5])
const reverseOfArr = computed(() => {
    const t = []
    for(let i = arr.value.length - 1; i >= 0; i--) {
        t.push(arr.value[i])
    }
    return t
})
</script>
```