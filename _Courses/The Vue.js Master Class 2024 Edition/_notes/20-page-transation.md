

src/App.vue

```js
<Suspense v-if="Component" :timeout="0">
    <Component :is="Component" :key="route.name"></Component>

    <template #fallback>
        <span>Loading ..</span>
    </template>
</Suspense>
```

src/assets/index.css