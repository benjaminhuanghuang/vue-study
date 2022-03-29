Nuxt reads all *.vue files inside "pages" filder and creats the router



## Parameter
- Pass parameter
```
<nuxt-link :to="`/products/${card.id}`" class="card-container">
```

- Get parameter
```
this.$route.params.id


{{ $router.params.id }}
```