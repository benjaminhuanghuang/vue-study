# Fetch data in Vue component

Call API in the beforeMount() function.
```js
<template>
  <div class="item-list-view">
    <div class="item-list">
      <item
        v-for="item in displayItems"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { fetchListData } from '../api/api'

export default {
  components: {
    Item
  },
  beforeMount () {
    this.loadItems()
  },
  data () {
    return {
      displayItems: []
    }
  },
  methods: {
    loadItems () {
      this.$bar.start()
      fetchListData('top')
        .then(items => {
          this.displayItems = items
          this.$bar.finish()
        })
        .catch(() => this.$bar.fail())
    }
  }
}
</script>
```