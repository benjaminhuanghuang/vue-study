# Vue3 + TypeScript development

1. show props with types
```js
const props = defineProps<{msg: string}>();

const { msg = 'hello' } = defineProps<{msg?: string}>();   // need to add propsDestructure: true ot vite config

interface Props {
  foo: string
  bar?: number
}

const props = defineProps<Props>()
```

2. Show Props Prop Types Object (defineComponent)

3. Import Types From external files

4. Show withDefaults

5. Show Types with Define Emits

6. Show Types with Ref/Reactive/computed

7. Event Handlers
