<script setup lang="ts">
import { ref, provide } from "vue";
import { usePageStore } from "@/stores/page";
import { menuKey } from "@/injectionKeys";
import { storeToRefs } from "pinia";
import Sidebar from "./Sidebar.vue";
import TopNavbar from "./TopNavbar.vue";
import AppNewTask from "@/components/AppNew/AppNewTask.vue";

const { pageData } = storeToRefs(usePageStore());

const taskSheetOpen = ref(false);

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
}

// provide and inject APIs in Vue 3 
provide(menuKey, {
  menuOpen,
  toggleMenu,
});
</script>

<template>
  <div>
    <Sidebar @taskClicked="taskSheetOpen = true" />
    <AppNewTask v-model="taskSheetOpen" />

    <div class="flex flex-col transition-[margin]" :class="{ 'ml-52': menuOpen, 'ml-24': !menuOpen }">
      <TopNavbar />

      <main class="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
        <div class="flex items-center">
          <h1 class="text-lg font-semibold md:text-2xl">
            {{ pageData.title }}
          </h1>
        </div>
        <slot />
      </main>
    </div>
  </div>
</template>
