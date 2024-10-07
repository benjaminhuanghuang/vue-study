Mixins work by merging options into a component’s options. 


## Merge strategy
Different properties have different strategies.
For example, lifecycle hooks are merged into an array and called one after the other. 
Object properties like methods and components are combined into a single object. 

If conflicting properties exist, the component property will override the mixin property.

## globally or locally


