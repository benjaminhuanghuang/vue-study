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

let deps = new Map();

// Set target, run target, reset target
function watcher(myFunc) {
  target = myFunc;
  target();
  target = null;
}

Object.keys(data).forEach((key) => {
  deps.set(key, new Dep());
});

let data_without_proxy = data;
data = new Proxy(data_without_proxy, {
  get(obj, key) {
    deps.get(key).depend();
    return obj[key];
  },
  set(obj, key, newVal) {
    obj[key] = newVal;
    deps.get(key).notify();
    return true;
  },
})

watcher(() => (total = data.price * data.quantity));


console.log(total); // 10
data.price = 20;
console.log(total); // 40


deps.set('discount', new Dep());
data['discount'] = 5;
watcher(() => (salePrice = data.price - data.discount));

console.log(salePrice); // 15
data['discount'] = 10;
console.log(salePrice); // 10
