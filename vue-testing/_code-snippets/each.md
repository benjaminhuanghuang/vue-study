

```js
it.each`
 a    | expected
 ${0} | ${0}
 ${0} | ${0}
 ${0} | ${0}
 `(`render double count as $expected when count is $a`, ({a, expected}) => {

 });