/*
  Implement reactive for object
*/

/*
  Record the value and the effects that depend on it
*/
const targetMap = new Map();

function getDep(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}

function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = getDep(target, key);
      // collect the dependency
      dep.depend();
      return Reflect.get(target, key);
    },
    set(target, key, newVal) {
      const dep = getDep(target, key);
      const result = Reflect.set(target, key, newVal);
      // trigger the dependency
      dep.notify();
      return result;
    },
  });
}
class Dep {
  constructor(val) {
    this.effects = new Set();
    this._val = val;
  }

  get value() {
    this.depend();
    return this._val;
  }

  set value(newVal) {
    this._val = newVal;
    this.notify();
  }

  // Collect the active effect
  depend() {
    if (currentEffect) {
      this.effects.add(currentEffect);
    }
  }

  // Trigger the reactivity
  notify() {
    this.effects.forEach((effect) => {
      effect();
    });
  }
}

// Collect the active effect
let currentEffect;
function effectWatch(effect) {
  currentEffect = effect;
  effect(); // Collect the active effect
  currentEffect = null;
}

// create reactive object
const user = reactive({
  age: 1,
});

let double;
effectWatch(() => {
  console.log("--reactivity--");
  double = user.age * 2;
  console.log(double);
});

user.age = 2;
user.age = 3;