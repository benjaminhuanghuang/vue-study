let currentEffect;

class Dep {
  constructor(val) {
    this.effects = new Set();
    this._val = val;
  }

  get value() {
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
function effectWatch(effect) {
  currentEffect = effect;
  effect();
  dep.depend(); // Collect the active effect
  currentEffect = null;
}

// create reactive object
const dep = new Dep(1);

let b;
// create a changing rule (effect) for b
effectWatch(() => {
  b = dep.value + 10;
  console.log(b);
});

dep.value = 2;
