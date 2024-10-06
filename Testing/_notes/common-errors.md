


## Async
The problem is that the test finishes executing before the setTimeout callback is
invoked—the assertion never runs.

```js
test('set finished to true after 1000ms', ()=>{
    runner.start();
    setTimeout(()=>{
        expect(runner.finished).toBe(true)
    }, 1001)
})
```