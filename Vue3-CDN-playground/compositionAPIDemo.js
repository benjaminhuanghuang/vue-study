const { createApp, ref, reactive } = Vue;

const app = createApp({
  setup(){
    const message = ref("John Doe");

    const person = reactive({
      name: "John Doe",
      age: 30
    })

    const changeMessage = () => {
      message.value = "aaa";
    }

    return {
      message,
      person,
      changeMessage
    }
  }
});

app.mount("#app");
