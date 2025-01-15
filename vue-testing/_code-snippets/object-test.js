test("Array contains item", () => {
  const countries = [];
  expect(countries).toContain("China");
});

test("Check object info", () => {
  let johnDoe = {
    name: "John Doe",
    age: 26,
    sex: "male",
    occupation: "Accountant",
  };
  expect(johnDoe).toEqual(expect.objectContaining({ age: 26, occupation: "Accountant" }));
});
