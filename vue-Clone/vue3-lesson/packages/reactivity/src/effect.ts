/*
    
*/
export function effect(fn, options?: any) {
  // 创建一个响应式effect， 数据变化后重新执行

  // 创建一个响应式effect， 依赖的属性变化后重新执行
  const _effect = new ReactiveEffect(fn, () => {
    _effect.run();
  });

  if(options) {
    Object.assign(_effect, options);
  }
  const runner = _effect.run.bind(_effect);
  runner.effect = _effect;
  return runner;
}

export let activeEffect: ReactiveEffect | null = null;

class ReactiveEffect {
  /*
    如果一个effect依赖多个属性，只收集一次effect，不重复收集
  */
  _trackId = 0;
  deps = [];
  _depsLength = 0;

  public active = true;

  constructor(public fn, public scheduler) {}

  run() {
    if (!this.active) {
      return this.fn();
    }
    let lastEffect = activeEffect;
    // clean up the deps
    preCleanEffect(this);
    try {
      activeEffect = this;
      return this.fn();
    } finally {
      postCleanEffect(this);
      activeEffect = lastEffect;
    }
  }

  stop() {
    this.active = false;
  }
}

export function trackEffect(effect, dep) {
  if (dep.get(effect) !== effect._trackId) {
    dep.set(effect, effect._trackId);

    // {flag,name}
    // {flag,age}
    let oldDep = effect.deps[effect._depsLength];
    if (oldDep !== dep) {
      // delete oldDep
      if (oldDep) {
        oldDep.delete(effect);
      }
      // change to new dep
      effect.deps[effect._depsLength++] = dep;
    } else {
      effect._depsLength++;
    }
  }
}

export function triggerEffects(dep) {
  for (const effect of dep.keys()) {
    if (effect.scheduler) {
      effect.scheduler(); // -> effect.run()
    }
  }
}

function preCleanEffect(effect) {
  effect._depsLength = 0;
  effect._trackId++;
}

function postCleanEffect(effect) {
  if(effect.deps.length > effect._depsLength) {
    for(let i = effect._depsLength; i < effect.deps.length; i++) {
     cleanDepEffect(effect.deps[i], effect);
    }
    effect.deps.length = effect._depsLength;
  }
}

function cleanDepEffect(dep, effect) {
  dep.delete(effect);
  if(dep.size === 0) {
    dep.cleanup();
  } 
}
