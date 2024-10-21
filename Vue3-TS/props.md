

```ts
import {defineProps, withDefaults} from 'vue';
import {type Persons} from "../types";

withDefaults(defineProp<{list?:Persons}>(), {
    list:()=>[{...}]
})
```