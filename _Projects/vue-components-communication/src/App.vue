<script setup lang="ts">
</script>

<template>
  <div class="container-fluid wraper">
    <h1 class="title">
      Vue 3 Components Communication
    </h1>
    <hr>
    <div class="row">
      <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
        <router-link active-class="active" class="list-group-item" to="/props">01.props</router-link>
        <router-link active-class="active" class="list-group-item" to="/event">02.event</router-link>
        <router-link active-class="active" class="list-group-item" to="/mitt">03.mitt</router-link>
        <router-link active-class="active" class="list-group-item" to="/model">04.v-model</router-link>
        <router-link active-class="active" class="list-group-item" to="/attrs">05.$attrs</router-link>
        <router-link active-class="active" class="list-group-item" to="/ref-parent">06.$refs, $parent</router-link>
        <router-link active-class="active" class="list-group-item" to="/provider-inject">07.provide, inject</router-link>
        <router-link active-class="active" class="list-group-item" to="/pinia">08.pinia</router-link>
        <router-link active-class="active" class="list-group-item" to="/slot">09.slot</router-link>
      </div>
      <div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
        <div class="panel-body">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
