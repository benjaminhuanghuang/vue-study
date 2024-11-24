/* Reactivity System */
class Dep {
  constructor() {
    this.subscribers = [];   // storage
  }

  depend() {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
    }
  }

  notify() {
    this.subscribers.forEach((sub) => sub());
  }
}
/* End of Reactivity System */

let target = () => total = price * quantity;

const dep = new Dep();
dep.depend();

let price = 5;
let quantity = 2;
let total = 0;
target();   // calculate

console.log(total); // 10
price = 10;
dep.notify();

console.log(total); // 20


