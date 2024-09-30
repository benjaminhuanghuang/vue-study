# Basics & Core Concepts


## Use native event object
```js
// Build-in event object is overwritten
<button @click="add(10)"> Add 10 </button>   

<input type="text" @input="setName"/>

// Provide build-in event and custom data
<input type="text" @input="setName2($event, 'newName')"/>


setName(event) {
    this.name = event.target.value;
}

setName2(event, lastName) {
    this.name = event.target.value;
}
```

## Event modifier
```js
<form v-on:submit.prevent="submitFrom"> 
</form>

<button @click.right="add(10)"> Add 10 </button>   

// keyup.enter trigger by enter key 
<input type="text" @input="setName2($event, 'newName')" v-on:keyup.enter="doSomething"/>
```

##f v-once
Only evaluate value once, no change
```
<p v-once>{{counter}}</p>
```

## Computed Properties
- Computed properties are like method, and will be aware of their dependencies
- only re-executed if one of the dependencies changed. 
- Can be used like a property without ()
- Used for outputting 

```js
{{ fullname }}

computed: {
    fullname() {
        console.log("fullname running again when this.name changed");
        return this.name + "LastName";
    }
}

```

## Watcher
A function you tell Vue to execute when one of its dependencies changed.
Used to update a property when another property changed
```js
watch: {
    name(newValue, oldValue) {
        // re-execute when name property changed.
        this.fullname = newValue + ' LastName'; 
    }

    counter(v) {
        if(value > 50) {
            const that = this;
            setTimeout(function(){
                that.counter = 0;
            }, 2000)
        }
    }
}
```
## Methods vs Computed vs Watch

### Methods
Use with event binding OR data binding
Data binding: Method is executed for every "re-render" cycle of the component
Use for events or data that really needs to be re-evaluated all the time

### Computed
Use with data binding 
Computed properties are only re-evaluated if one of their "used values" changed
Use for data that depends on other data

### Watch
Not used directly in template
Allows you to run any code in reaction to some changed data (e.g. send Http request etc.)
Use for any non-data update you want to make

