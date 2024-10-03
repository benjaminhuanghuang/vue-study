# Computer

## Why
```js
<template>
{{Counter}}


{{getFullName()}}

</template>
```
If we use a function getFullName() to output a value in the template, when another value Counter changes,
the whole template will be re-render. 

When template re-render will cause the function executed. It is no efficient.

## How
```js
computed: { 
    fullName() {
        this.name + ' ' + this.lastName;
    }
}


{{fullName}}
```
fullName is re-execute when the dependency changed.



