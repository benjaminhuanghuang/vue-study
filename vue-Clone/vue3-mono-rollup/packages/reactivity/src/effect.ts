export function effect(fn, options = {}) {
  const effect = createReactiveEffect(fn, options);
  if (!options.lazy) {
  }
  return effect;
}

let uid = 0;
let activeEffect;
const effectStack = [];

function createReactiveEffect(fn, options) {
  const effect = function reactiveEffect(fn, options) {
    try {
      effectStack.push(effect);
      activeEffect = effect;
      return fn();
    } finally {
      effectStack.pop();
      activeEffect = effectStack[effectStack.length - 1];
    }
  };

  effect.id = uid++;
  effect._isEffect = true;
  effect.raw = fn; // save the original fn
  effect.options = options;
  return effect;
}

export function Track(target, type, key) {
  console.log("Track", target, key);
}
