import { track, trigger } from "./reactiveEffect";

export enum ReactiveFlags {
  IS_REACTIVE = "__v_isReactive",
}

export const mutableHandlers: ProxyHandler<any> = {
  /*
    Collect the dependencies
  */
  get(target, key, receiver) {
    if (key === ReactiveFlags.IS_REACTIVE) {
      return true;
    }
    track(target, key);
    // Reflect make the this point to the receiver
    const res = Reflect.get(target, key, receiver);
    return res;
  },
  /*
    Trigger the rendering 
  */
  set(target, key, value, receiver) {
    let oldValue = target[key];
    const result = Reflect.set(target, key, value, receiver);
    if(oldValue !== value) {
      // trigger the rendering
      trigger(target, key, value, oldValue);
    }
    return result;
  },

  deleteProperty(target, key) {
    const res = Reflect.deleteProperty(target, key);
    console.log("delete", key);
    return res;
  },
};
