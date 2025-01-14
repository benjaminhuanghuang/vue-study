/*
The problem to be solve: when a changes, b will be re-evaluated

In this demo, the vue reactive system is used to update b when a changes
*/

const {effect, reactive} = require('@vue/reactivity');

// a is a reactive object
let a = reactive({
    value: 1
}); 

let b;

// effect defines how to update b when a changes
effect(()=>{
    b = a.value * 2;
    console.log(b); 
})


a.value = 2; 

a.value = 3; 


