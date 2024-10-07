
# What should be tested in Vue components

- Test the input: 
    - Props

- Test the output:
    - Test rendered text, DOM attributes, CSS, inline style
    - Test sub-component existence

- Test the behavior
    - Test component methods
    - Wait for the DOM to update
    - Wait promises
    - To test a function is called, make sure resource like timer is removed.
    - Test functions are called in lifecycle 
    - Mock HTTP request 

- Test the interactive:
    - native DOM events 
    - Vue custom events.


## Common cases
    
