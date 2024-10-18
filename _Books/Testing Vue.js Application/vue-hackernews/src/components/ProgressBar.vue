<template>
  <div class="progress" :class="{
    hidden: hidden,
    error: error
  }" :style="{
    'width': `${percent}%`
  }" />
</template>

<script setup>
import { ref } from 'vue';

const hidden = ref(true);
const percent = ref(0);
const error = ref(false);

function start() {
  this.hidden = false
  this.error = false
  this.percent = 0
  this.timer = setInterval(() => {
    this.percent++
  }, 100)
}
function finish() {
  this.percent = 100
  this.hidden = true
  clearInterval(this.timer)
}
function fail() {
  this.error = true
  this.percent = 100
}
</script>

<style scoped>
.progress {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 2px;
  width: 0%;
  transition: width 0.2s, opacity 0.4s;
  opacity: 1;
  background-color: #ffca2b;
  z-index: 999999;
}

.hidden {
  opacity: 0;
}

.error {
  background-color: #ff0000;
}
</style>