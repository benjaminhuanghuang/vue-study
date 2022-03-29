# Component 


```
  <booking-list :bookings="bookings"></booking-list>

  export default {
    name: 'ComponentName',

    // Use the sub component
    components: {
      BookList  
    }

    data() {
      return {
          bookings: [{ name: "Sample", price: 100 }], 
      }
    },


  }
```


use component

```
  createApp(MyComponent).mount('#app')
```


## Props

```
  export default {
    name: 'BookList',
    
    props: {
      books: Array
    }

    data() {
      return {

      }
    },


  }
```


## Events
parent component
```
 <booking-form @booking-created="addBooking" :cabins="cruise.cabins">
 </booking-form>
```

Sub component
```
export default {
  props: {
    cabins: Array,
  },
  emits: ["bookingCreated"],
  data() {
    return {
      cabinIndex: -1,
    };
  },
  methods: {
    bookCabin() {
      this.$emit("bookingCreated", this.cabinIndex);
    },
  },
};
```