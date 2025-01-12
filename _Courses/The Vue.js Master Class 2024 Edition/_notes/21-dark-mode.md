# Toggle Dark mode

src/components/Layout/TopNavbar.vue

```js
import { useDark, useToggle } from '@vueuse/core'

<Button @click="toggleDark()" class="w-8 h-8">
    <Transition name="scale" mode="out-in">
        <iconify-icon v-if="isDark" icon="lucide:sun"></iconify-icon>
        <iconify-icon v-else icon="lucide:moon"></iconify-icon>
    </Transition>
</Button>
```

will create and use "vueuse-color-shceme" local storage.

