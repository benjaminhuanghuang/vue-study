<script setup lang='ts'>
import { defineProps, defineEmits, inject } from 'vue'
import { RouterLink } from 'vue-router'
import { menuKey, type MenuInjectionOptions } from '@/utils/injectionKeys'

interface LinkProp {
  to?: string;
  icon: string;
  title: string;
}

defineProps<{
  links: LinkProp[]
}>()

// events
const emits = defineEmits<{
  actionClicked: [string]
}>()

const emitActionClicked = (linkTitle: string) => {
  emits('actionClicked', linkTitle)
}

const { menuOpen } = inject(menuKey) as MenuInjectionOptions
</script>

<template>
  <template v-for="link in links" :key="link.title">
    <!-- link has to property -->
    <RouterLink v-if="link.to" exactActiveClass="text-primary bg-muted" :to="link.to" class="nav-link"
      :class="{ 'justify-normal': menuOpen, 'justify-center': !menuOpen }">
      <iconify-icon :icon="link.icon"></iconify-icon>
      <span class="text-nowrap" :class="{ block: menuOpen, hidden: !menuOpen }">{{ link.title }}</span>
    </RouterLink>
    <!-- link does not has to property -->
    <div v-else class="nav-link cursor-pointer" :class="{ 'justify-normal': menuOpen, 'justify-center': !menuOpen }"
      @click="emitActionClicked(link.title)">
      <iconify-icon :icon="link.icon"></iconify-icon>
      <span class="text-nowrap" :class="{ block: menuOpen, hidden: !menuOpen }">{{ link.title }}</span>
    </div>
  </template>
</template>

<style scoped>
.nav-link {
  @apply flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary text-muted-foreground;
}
</style>