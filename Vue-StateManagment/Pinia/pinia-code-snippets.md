
## Define store
```js
import { defineStore } from 'pinia';

export const useCountStore = defineStore('count', {
    actions: {
        increment(v) {
            this.sum += v;   // this is current store
        }
    },

    state() {
        return {
            sum: 6,
            school: 'test'
        }
    },

    getters:{
        bigSum(state) {
            return state.sum * 10;
        },
        StrSum() {
            return this.school.toUpperCase();    // this is the state
        }
    }
});
```

## Use data in template
```js
<h2> {{ countStore.sum }}</h2>



import {useCountStore} from "../store/count"
import {storeToRef} from 'pinia';

const countStore = useCountStore()
const {sum} = storeToRef(countStore);  // pick the data and covert them to ref

console.log(countStore.$state.sum);
```

## Update data
```js
import {useCountStore} from "../store/count"

const countStore = useCountStore();

// Method 1
countStore.sum += 1;
// Method 2
countStore.$patch({
    name: 'newName'
})
// Method 3, use action
countStore.increment(10);

```

## subscribe store change
```js
countStore.$subscribe((mutate, state) => {
    
})

```