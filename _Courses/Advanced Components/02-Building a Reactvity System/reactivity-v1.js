/* Reactivity System */
let storage = [];

function record() {
  storage.push(target);
}

function replay() {
  storage.forEach((run) => run());
}
/* End of Reactivity System */


let price = 5;
let quantity = 2;
let total = 0;

let target = () => target = price * quantity;

console.log(total); // 10
record();
price = 10;
target();
console.log(total); // 20


