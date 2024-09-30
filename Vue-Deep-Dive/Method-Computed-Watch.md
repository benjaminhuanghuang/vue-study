# Methods vs Computed vs Watch

## Methods
Use with event binding OR data binding
Data binding: Method is executed for every "re-render" cycle of the component
Use for events or data that really needs to be re-evaluated all the time

## Computed
Use with data binding 
Computed properties are only re-evaluated if one of their "used values" changed
Use for data that depends on other data

## Watch
Not used directly in template
Allows you to run any code in reaction to some changed data (e.g. send Http request etc.)
Use for any non-data update you want to make


