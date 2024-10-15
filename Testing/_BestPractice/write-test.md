## Scaffolding
Write all describe/it blocks based on user behavior
    Use describe blocks for various conditions: When...
    Use it blocks to demonstrate expectations under each condition: It should...


## What should be test
- Inputs: What are things uses can see/do
- Outputs: What are the results of what the users can do.

For example
No: when user types a name, the component's data field updates
Instead: When user types a name, the text input shows the name they typed.
When user submits the form, an API call is made with the name as a param.

No: A user opens a form, a modal pops up, they input a name, they click submit, and get taken to a different page. That is integration tests for. 
Instead: A modal renders with an input for name. A button to submit exists
When the button is clicked, the API is called
When the button is clicked, the modal closes