import { reactive } from "../reactive";

describe("reactive", () => {
  it("should be reactive", () => {
    const original = { foo: 1 };
    // create a reactive object
    const observed = reactive({ age: 10 });

    expect(observed).not.toBe(original);
    expect(observed.foo).toBe(1);
  });
});
