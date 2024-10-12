import { reactive } from "../reactive";

describe("reactivity", () => {
  it("should be reactive", () => {
    const original = { foo: 1 };
    const observed = reactive({ age: 10 });

    expect(observed).not.toBe(original);
    expect(observed.foo).toBe(1);
  });
});
