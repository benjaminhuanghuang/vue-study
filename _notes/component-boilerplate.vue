<template>
  <div class="hello">
    <h1>{{ user.username }}</h1>

    <div v-if="user.isAdmin"></div>
    
    <div v-if="{item, index} in user.friends" :key="item.id">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  date() {
    return {
      user:{

      }
    }
  },
  watch: {
    
  },
  computed:{},
  methods:{}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
