

## fetch hook (for page and component)
Reviews.vue
```
 async fetch() {
    this.reviewers = await fetch(
      "https://randomuser.me/api/?results=5"
    ).then(res => res.json());
  }
```

Loading state
```
  {{ $fetchState }}



  <div v-if="!$fetchState.pending">
    {{data...}}
  </div>
  <div v-else>
    loading...
  </div>
```

## asyncData hook (for page)
```
    async asyncData(context) {
        let repsonse = await context.$axios.get("   /${context.params.id}");

    }
```

## axios base URL
```

```