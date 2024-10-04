# Mixins & Custom Composition Functions

Reusing code in the Options & Composition API

For example, the UserList component and ProjectList component have similar search method, data and watcher.

## What can we reuse
- HTML Structure + Styling
- Logic 
- Events

mixins/alert.js
```js
export default {
    data() {
        isVisible: false
    }, 
    method: {
        show() {
            this.isVisible = true;
        },
        hide() {
            this.isVisible = false;
        }
    }
}
```

```js
import alertMixin from '../mixins/alert.js';

export default {
    components: {
        UserAlert
    }
    mixins: [alertMixin]
}
```

## Global Mixins
```js
export default {
    mounted() {
        console.log('Mounted');
    }
}

app.mixin(loggerMixin); // global mixin added to all components
```

## Disadvantages of Mixin
hard to find out where the code come from

## Composition API
