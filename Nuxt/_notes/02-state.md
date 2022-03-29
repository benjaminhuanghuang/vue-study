

## data: getters
```
    computed: {
        ...mapState(['products'])
    }


    computed: {
        product() {
            return this.$store.getters.getProductById(this.$route.params.id);
        }
    }
```
## Mutation
```
export const mutations = {
  addItem(state, id) {
    const item = state.products.find(product => product.id === id);
    state.myRentals.push(item);
  }
};



methods: {
    ...mapMutations(["addItem"])
}
```

## Getter
```
export const getters = {
  getProductById: state => (id) => {
    return state.products.find(product => product.id === id);
  }
};
```



## Action
