
function asyncPrint() {
  return new Promise((resolve, reject) => {
      setTimeout(()=> {
          resolve("Hello World");
      }, 2000)
  })
}

/* test ("Test asynchronous printing", () => {
    return asyncPrint().then(data => {
        expect(data).toBe("Hello World");
    })
}) */

test ("Test asynchronous printing", async () => {
  await expect(asyncPrint()).resolves.toBe("Hello World");
})