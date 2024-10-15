## Pinia vs. Vuex


Vuex works well with any version of Vue, there are several simplifications with Pinia that make the development experience simpler and the resulting code easier to read and understand.


Vuex has different versions depending on the version of Vue that is being used: 
Vuex 4.x works with Vue 3; 
Vuex 3.x works with Vue 2. 

In contrast, Pinia works with both Vue 2 and Vue 3.

Finally, Pinia is the recommended state management library for Vue.

## Benefit of Pinia
- Pinia offers better TypeScript support than Vuex
- Testing utilities
- Plugins: extend Pinia features with plugins
- Proper TypeScript support or autocompletion for JS users
- Server Side Rendering Support
- Devtools support
    - A timeline to track actions, mutations
    - Stores appear in components where they are used
    T- ime travel and easier debugging
- Hot module replacement
    - Modify your stores without reloading your page
    - Keep any existing state while developing

## Reference
https://testdriven.io/blog/vue-pinia-testing/

