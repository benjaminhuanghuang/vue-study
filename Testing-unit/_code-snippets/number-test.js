test("find integer", ()=>{
  const result = 4;

  expect(4).toEqual(4);
}) 


test("find float", ()=>{
  const result = 0.1 + 0.2;

  expect(result).toBeCloseTo(0.3);
}) 