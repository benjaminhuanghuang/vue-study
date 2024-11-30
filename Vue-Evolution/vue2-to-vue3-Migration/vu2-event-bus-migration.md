
Vue 3 offers better alternatives for communication between components, such as the 
- Composition API, 
- Provide/Inject
- state management solutions like Pinia or Vuex.

## Use the Composition API (Recommended)
useEventBus.js
```js
import { reactive, readonly } from 'vue';

const state = reactive({
  events: {},
});

const on = (event, callback) => {
  state.events[event] = state.events[event] || [];
  state.events[event].push(callback);
};

const emit = (event, payload) => {
  if (state.events[event]) {
    state.events[event].forEach((callback) => callback(payload));
  }
};

const off = (event, callback) => {
  if (state.events[event]) {
    state.events[event] = state.events[event].filter((cb) => cb !== callback);
  }
};

export function useEventBus() {
  return {
    on,
    emit,
    off,
  };
}
```

Emit event
```js
import { useEventBus } from './useEventBus';

const { emit } = useEventBus();

emit('message', 'Hello from Component A!');
```

Listen
```js
import { useEventBus } from './useEventBus';

const { on } = useEventBus();

on('message', (msg) => {
  console.log('Received:', msg);
});
```

Remove listener
```js
import { useEventBus } from './useEventBus';

const { off } = useEventBus();

off('message', callbackFunction);
```


## Provide/Inject
parent
```js
import { provide } from 'vue';

export default {
  setup() {
    const emitEvent = (message) => console.log('Event emitted:', message);
    provide('eventEmitter', emitEvent);
  },
};
```

Child
```js
import { inject } from 'vue';

export default {
  setup() {
    const eventEmitter = inject('eventEmitter');
    eventEmitter('Hello from Child!');
  },
};
```


## Use Global State Management (Pinia or Vuex)
Create store
```js
import { defineStore } from 'pinia';

export const useEventBusStore = defineStore('eventBus', {
  state: () => ({
    events: {},
  }),
  actions: {
    emit(event, payload) {
      if (this.events[event]) {
        this.events[event].forEach((callback) => callback(payload));
      }
    },
    on(event, callback) {
      if (!this.events[event]) this.events[event] = [];
      this.events[event].push(callback);
    },
    off(event, callback) {
      if (this.events[event]) {
        this.events[event] = this.events[event].filter((cb) => cb !== callback);
      }
    },
  },
});
```
Emit
```js
const eventBus = useEventBusStore();
eventBus.emit('custom-event', 'Hello, world!');
```

Listen:
```js
const eventBus = useEventBusStore();
eventBus.on('custom-event', (data) => console.log(data));
```



