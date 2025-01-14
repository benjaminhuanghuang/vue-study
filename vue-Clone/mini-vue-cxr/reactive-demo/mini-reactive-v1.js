/*
  Implement reactive for single value
*/

/*
  Record the value and the effects that depend on it
*/
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

let currentEffect;
// Collect the active effect
// effect is a function defines how to update b when a changes
function effectWatch(effect) {
  currentEffect = effect;
  effect();   // update b for the first time
  dep.depend(); // Save teh effect to the Dep.effects
  currentEffect = null;
}

// create reactive object
const dep = new Dep(1);

let b;
// create a changing rule (effect) for b
effectWatch(() => {
  b = dep.value*2;
  console.log(b);
});

dep.value = 2;

dep.value = 3;
