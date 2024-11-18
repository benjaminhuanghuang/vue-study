const app = Vue.createApp({
  data(){
    return {
      message: "John Doe"
    }
  },
  methods: {
    changeMessage(){
      this.message ='aaa';
    }
  },
});

app.mount("#app");
