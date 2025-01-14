import { reactive } from "../reactive";

describe("reactive", () => {
  it("should be reactive", () => {
    const original = { foo: 1 };
    // create a reactive object
    const observed = reactive(original);

    expect(observed).not.toBe(original);
    expect(observed.foo).toBe(1);
  });
});
