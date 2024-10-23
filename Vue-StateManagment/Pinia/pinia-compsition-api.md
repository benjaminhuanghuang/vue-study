
## Define store
```js
import { defineStore } from 'pinia';

export const useCountStore = defineStore('talk', ()=> {
    const talkList = reactive(JSON.parse(localStorage.getItem('talkList')||''))||[];
    // Action
    async function getATalk() {

    }

    return {
        talkList,
        getATalk,
    }
});
```