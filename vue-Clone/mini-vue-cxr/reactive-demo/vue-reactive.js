const {effect, reactive} = require('@vue/reactivity');
/*
 when a changes, b will be re-evaluated
*/

let a = reactive({
    value: 1
}); 

let b;
effect(()=>{
    b = a.value + 10;
    console.log(b);
})


a.value = 2; 


