class ReactiveEffect {
  private _fn: any;

  constructor(fn: any) {
    this._fn = fn;
  }
  run() {
    activeEffect = this;
    this._fn();
  }
}
const targetMap = new Map();

export function track(target: any, key: any) {
  if (!targetMap.has(target)) {
    targetMap.set(target, new Map());
  }

  let dep = targetMap.get(target);
  if (!dep.has(key)) {
    dep.set(key, new Set());
  }
  dep.get(key).add(activeEffect);
}

export function trigger(target: any, key: any) {
  let dep = targetMap.get(target);
  if (!dep) {
    return;
  }
  let effects = dep.get(key);
  if (effects) {
    effects.forEach((effect: any) => {
      effect.run();
    });
  }
}

let activeEffect: any = null;
export function effect(fn: () => void) {
  const _effect = new ReactiveEffect(fn);

  _effect.run();
}
