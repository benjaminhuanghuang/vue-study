import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons"; // Import specific icons
import { faTwitter } from "@fortawesome/free-brands-svg-icons"; // Import brand icons

import "./tailwind.css";
import router from "./router/index.ts"; // Import the router configuration

import App from "./App.vue";

// Add icons to the library
library.add(faHome, faUser, faTwitter);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon) // register FontAwesomeIcon component globally
  .use(router) // Use the router instance
  .mount("#app");
