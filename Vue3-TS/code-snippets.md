
```ts
// src/types/index.ts
export interface Person{
    id: string, 
    name: string,
    age: number
}

// customized type
export type Persons = Person[];
```


```ts

import {type Persons} from './types';

let personList: reactive<Persons>([
    {id:'111', name:'Alex', age: 50}
]);


```

Define the props type, optional, default value
```ts
import { defineProps, withDefaults } from 'vue';

defineProps<{
    list: Persons    // name: type
}>

withDefaults(defineProps<{list?: Persons}>(), {
    list:()=>[{id:'111', name:'Alex', age: 50}]
})
```