export enum ReactiveFlags {
  IS_REACTIVE = "__v_isReactive",
}

export const mutableHandlers: ProxyHandler<any> = {
  get(target, key, receiver) {
    if (key === ReactiveFlags.IS_REACTIVE) {
      return true;
    }
    // Reflect make the this point to the receiver
    const res = Reflect.get(target, key, receiver);
    return res;
  },
  set(target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver);
    console.log("set", key, value);
    return res;
  },
  deleteProperty(target, key) {
    const res = Reflect.deleteProperty(target, key);
    console.log("delete", key);
    return res;
  },
};
