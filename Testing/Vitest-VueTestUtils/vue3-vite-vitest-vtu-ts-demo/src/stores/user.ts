
import { defineStore } from "pinia";
import { reactive } from "vue";

interface UserData {
  email: string,
  name: string
}

export const useUserStore = defineStore('user', () => {
  const userData = reactive({ email: '', name:'' })
  
  function insertData(userInput: UserData) {
    const { email, name } = userInput
    
    userData.email = email
    userData.name = name
  }

  return { userData, insertData}
})
