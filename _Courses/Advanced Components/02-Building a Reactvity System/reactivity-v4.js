let data = {
  price: 5,
  quantity: 2,
};
let target, total, salePrice;

class Dep {
  constructor() {
    this.subscribers = []; // storage
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

function watcher(myFunc) {
  target = myFunc;
  target();
  target = null;
}

Object.keys(data).forEach((key) => {
  let internalValue = data[key];
  const dep = new Dep();

  Object.defineProperty(data, key, {
    get() {
      dep.depend(); // remember the target we are running
      return internalValue;
    },
    set(newVal) {
      internalValue = newVal;
      dep.notify();  // rerun the target
    },
  });
});

watcher(() => (total = data.price * data.quantity));
watcher(() => (salePrice = data.price * 0.9));

console.log(total); // 10
data.price = 20;
console.log(total); // 40