## How an Event Bus Works

1. Create the Event Bus
You create a new Vue instance to act as the Event Bus:

```js
// eventBus.js
import Vue from 'vue';
export const EventBus = new Vue();
```

2. Emit events
```js
import { EventBus } from './eventBus';

export default {
  methods: {
    sendMessage() {
      EventBus.$emit('message-sent', 'Hello from ComponentA');
    },
  },
};
```

3. Listen for Events
```js
import { EventBus } from './eventBus';

export default {
  created() {
    EventBus.$on('message-sent', (message) => {
      console.log('Received message:', message);
    });
  },
  beforeDestroy() {
    EventBus.$off('message-sent'); // Clean up listeners
  },
}
```