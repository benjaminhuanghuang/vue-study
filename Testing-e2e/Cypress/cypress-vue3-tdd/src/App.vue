<template lang="">
  <div>
    <new-message-form @save="addMessage"></new-message-form>
    <message-list :messages="messages"></message-list>
  </div>
</template>
<script>
import NewMessageForm from './components/NewMessageForm.vue'

export default {
  name: 'App',
  components: {
    NewMessageForm
  },
  data() {
    return {
      messages: []
    }
  },
  methods: {
    
    // event handler for the save event emitted by the NewMessageForm component
    saveMessage(message) {
      this.messages.unshift(message)
    }
  } 
}
</script>
<style lang="">
  
</style>