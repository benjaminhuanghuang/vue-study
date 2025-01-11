<script setup lang="ts">
import AppErrorPage from '@/components/AppError/AppErrorPage.vue'

import { useErrorStore } from './stores/error';
import { useAuthStore } from './stores/auth';
import { storeToRefs } from 'pinia';

const errorStore = useErrorStore()

onErrorCaptured((error: string) => {
  errorStore.setError({ error})
})

onMounted(() => {
  useAuthStore().trackAuthChanges()
})

const { user } = storeToRefs(useAuthStore())

const AuthLayout = defineAsyncComponent(
  () => import('./components/Layout/main/AuthLayout.vue')
)

const GuestLayout = defineAsyncComponent(
  () => import('./components/Layout/main/GuestLayout.vue')
)

// useMeta({
//   title: 'Pulse',
//   description: {
//     name: 'description',
//     content:
//       'Pulse is a project management tool that helps you organize your work.'
//   }
// })

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