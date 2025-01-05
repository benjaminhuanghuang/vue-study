# Reactivity

## Reflect

```js
const person = {
    name: "jw",
    get aliasName() {
    return this. name + "handsome";
    }
}

let proxyPerson = new Proxy (person, {
    get(target, key, recevier) {
        console.log (key) ;
        return Reflect.get(target, key, recevier); // (recevier [key]) ;
    }
});

console. log (proxyPerson.aliasName) ;
```

## effect
