import { ref } from 'vue'
import { type User } from '@/types/User'
import { type Profile } from '@/types/Profile'
import { type Session } from '@/types/Session'

import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAuthStore = defineStore('auth-store', () => {
  const user = ref<null | User>(null)
  const profile = ref<null | Profile>(null)
  const isTrackingAuthChanges = ref(false)

  const setProfile = async () => {}

  const setAuth = async (userSession: null | Session = null) => {}

  const getSession = async () => {
    // get session from server
  }

  const trackAuthChanges = () => {
    if (isTrackingAuthChanges.value) return
 
  }

  return {
    user,
    profile,
    setAuth,
    getSession,
    trackAuthChanges
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
