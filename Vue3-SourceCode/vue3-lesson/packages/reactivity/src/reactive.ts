import { isObject } from "@vue/shared";
import { mutableHandlers, ReactiveFlags } from "./baseHandler";

// reuse the same reactive object for the same original object
const reactiveMap = new WeakMap();

function creativeReactiveObject(target: any) {
  if (!isObject(target)) {
    return target;
  }

  // target is already a Proxy, will call get() method
  if (target[ReactiveFlags.IS_REACTIVE]) {
    return target;
  }

  const existingProxy = reactiveMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const proxy = new Proxy(target, mutableHandlers);
  reactiveMap.set(target, proxy);
  return proxy;
}

export function reactive(target: any) {
  return creativeReactiveObject(target);
}
