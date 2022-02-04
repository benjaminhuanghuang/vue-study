

## v-on: and @ 
```
<button v-on:click.stop="handleClick">Collect coins</button>

<button @click.stop="handleClick">Collect coins</button>
```

## Stop event bubble
The event starts from inner element and go to outer element

Stop event bubble to parents
```
  <button @click.stop="handleClick">Collect coins</button>
```

## Trigger event only once
```
  <button @click.once="handleClick">Collect coins</button>
```

## Event modifier event.capture 
makes outermost element handel event first
```
  <div class="container" v-on:click.capture.stop="outerClick">
    <button @click="handleClick">Collect coins</button>
  </div>
```