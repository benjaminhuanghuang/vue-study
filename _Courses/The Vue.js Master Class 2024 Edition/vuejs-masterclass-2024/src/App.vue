<script setup lang="ts">
import AuthLayout from '@/components/Layout/main/AuthLayout.vue'
import AppErrorPage from '@/components/AppError/AppErrorPage.vue'

import { useErrorStore } from './stores/error';

const errorStore = useErrorStore()

onErrorCaptured((error: string) => {
  errorStore.setError({ error, customCode: 400})
})
</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="errorStore.activeError" />

    <RouterView v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name"></Component>

        <template #fallback>
          <span>Loading ..</span>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>