import { activeEffect, trackEffect, triggerEffects } from "./effect";

const targetMap = new WeakMap();

export function track(target, key) {
  if (activeEffect) {
    console.log(target, key, activeEffect);

    let depsMap = targetMap.get(target);
    if (!depsMap) {
      // new dependency
      targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);

    if (!dep) {
      depsMap.set(key, (dep = createDep(() => depsMap.delete(key), key)));
    }

    // Put current effect to the dep map. It can be used to trigger the effect when the dep is changed
    trackEffect(activeEffect, dep);

    console.log(targetMap);
  }
}

export function trigger(target, key, newValue, oldValue) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }

  const dep = depsMap.get(key);
  if (dep) {
    triggerEffects(dep);
  }
}
      
/**
 *  New a Map and add cleanup function and name on it
 */
export function createDep(cleanup, key) {
  const dep = new Map() as any;
  dep.cleanup = cleanup;
  dep.name = key;
  return dep;
}
