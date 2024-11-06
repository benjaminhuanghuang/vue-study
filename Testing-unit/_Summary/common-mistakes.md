


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

## Avoiding Boolean assertions
Boolean assertions are assertions that compare Boolean values. 
When they fail, the assertion error isn’t clear about why the test failed: “expected false to equal true.”
With a Boolean assertion, you’re left wondering: Did the element contain an incorrect attribute value?
```js
expect(a.attributes().href === item.url).toBe(true)
// should be
expect(a.attributes().href).toBe(item.url)
```