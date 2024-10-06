

1. define api parameter

2. define component props
```ts
defineProps<{
    Age: number,
    Name?: string
}>();
```

3. use type file a.d.ts
test.d.ts
```ts
export interface ComponentProps{
    Age: number,
    Name?: string
}
```
component.vue
```ts
import type {ComponentProps} from "./test";

defineProps<ComponentProps>();
```