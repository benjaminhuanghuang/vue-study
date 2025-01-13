



```js
 <Suspense v-if="Component" :timeout="0">
  <Component :is="Component"></Component>
  <template #fallback>
    <div
      class="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-center items-center w-full h-screen bg-background bg-opacity-90 z-50"
    >
      <iconify-icon
        icon="lucide:loader-circle"
        class="text-6xl animate-spin"
      />
    </div>
  </template>
</Suspense>
```