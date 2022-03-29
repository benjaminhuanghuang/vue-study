
## Condition
```
  <button v-show="cruise.seatsAvailable">
    <span v-if="cruise.earlyBirdAvailable">Book early bird!</span>
    <span v-else>Book now!</span>
  </button> 
```


## Loop
  index starts at 0
  key is important for performance
  
```
  <li v-for="(cruise, index) in cruises" :key="index">
    {{ cruise.name }}
  </li>
```