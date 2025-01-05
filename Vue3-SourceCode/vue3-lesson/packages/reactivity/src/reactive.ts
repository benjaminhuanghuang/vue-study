import { isObject } from "@vue/shared";
import { mutableHandlers, ReactiveFlags } from "./baseHandler";

/**
 *  Convert an object into a reactive object
 *  1. check if the target is in reactiveMap, if so, reuse reactive object
 *  2. check if the target is a Proxy , if so, return the target
 */
export function reactive(target: any) {
  return creativeReactiveObject(target);
}

// Reuse the same reactive object for the same original object
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
