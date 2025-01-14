export function isObject(target) {
  return typeof target === "object" && target !== null;
}

export const extend: typeof Object.assign = Object.assign;
