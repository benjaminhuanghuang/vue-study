<template>
  <div>
    <h1 class="font-aaa">This text will use the Google font</h1>
    <font-awesome-icon :icon="['fas', 'home']" /> Home
    <font-awesome-icon :icon="['fas', 'user']" /> User
    <font-awesome-icon :icon="['fab', 'twitter']" /> Twitter
  </div>
</template>

<style scoped>
.fa-icon {
  margin-right: 8px;
}
</style>