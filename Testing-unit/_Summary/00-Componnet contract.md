# Component contract
Component contract is the interface the component has with the outside
Component contract is an agreement between the component and the outside 
A component contract defines how the interacts with the rest of the application. 


## Input: Data or actions received by the component
- Component Data
- Props
- User interactions (like button clicks)
- Vue events
- Data from a Vuex/Pinia store
- Lifecycle hooks
- Route parameter
- query strings

## Output: The result or effects produced by the component based on its input

- Rendered
  - DOM nodes, text, DOM attributes, CSS, inline style
- Events emitted by component
- Function calls to external functions
- Updates to the store
- Changes in child components: existence of child components, props passed to child component
- Error handling