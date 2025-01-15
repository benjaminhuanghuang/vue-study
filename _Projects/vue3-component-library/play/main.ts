import { createApp } from "vue";
import App from "./app.vue";
import myuilib from "@myuilib/components";

const app = createApp(App);

// globally mount the component library
app.use(myuilib);

app.mount("#app");
