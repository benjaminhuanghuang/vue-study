<template lang="">
  <div>
    <input type="text"  data-test="messageText"/>
    <button data-test="sendButton" @click="save">Save</button>
  </div>
</template>
<script>
export default {
  name: 'NewMessageForm', 
  data() {
    return {
      inputText: ''
    }
  }, 
  methods: {
    save() {
      this.$emit('save', this.inputText);
      this.inputText = '';
    }
  }
}

</script>
<style lang="">
  
</style>