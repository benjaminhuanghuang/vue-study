<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useStore from '../store'
import { TActive } from '../types/data'
const { main, footer } = useStore()
const { clearCompleted } = main
const { changeActive } = footer
const { unCompleted, completed, list } = storeToRefs(main)
const { tabs, active } = storeToRefs(footer)


const initHash = () => {
  const hs = window.location.hash
  const result = (hs === '#/Active' || hs === '#/Completed' ? hs.slice(2) : 'All') as TActive
  changeActive(result)
}
initHash()
</script>
<template>
  <!-- This footer should be hidden by default and shown when there are todos -->
  <footer class="footer" v-if="list.length > 0">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"
      ><strong>{{ unCompleted.length }}</strong> item left</span
    >
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li v-for="item in tabs" :key="item" @click="changeActive(item)">
        <a
          :class="{
            selected: item === active,
          }"
          :href="`#/${item}`"
          >{{ item }}</a
        >
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button v-if="completed.length > 0" class="clear-completed" @click="clearCompleted">Clear completed</button>
  </footer>
</template>
