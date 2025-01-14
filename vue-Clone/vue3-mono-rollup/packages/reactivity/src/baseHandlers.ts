import { isObject, extend } from "@vue/shared";
import { readonly, reactive } from "./reactiveApi";

const get = createGetter();
const shallowGet = createGetter(false, true);
const readonlyGet = createGetter(true);
const shallowReadonlyGet = createGetter(true, true);

export const reactiveHandler = {
  get,
};
export const shallowReactiveHandler = {
  get: shallowGet,
};
export const readonlyHandler = {
  get: readonlyGet,
  set: (target, key, value) => {},
};
export const shallowReadonlyHandler = {
  get: shallowReadonlyGet,
};

function createGetter(isReadonly = false, shallow = false) {
  return function get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver);
    if (!isReadonly) {
      // collect dependencies
    }
    if (shallow) {
      return res;
    }
    if (isObject(res)) {
      return isReadonly ? readonly(res) : reactive(res);
    }
    return res;
  };
}
