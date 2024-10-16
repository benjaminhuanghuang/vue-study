import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons"; // Import specific icons
import { faTwitter } from "@fortawesome/free-brands-svg-icons"; // Import brand icons

import { initializeApp } from "firebase/app";

import "./tailwind.css";
import router from "./router/index.ts"; // Import the router configuration

import App from "./App.vue";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  projectId: import.meta.env.PROJECT_ID,
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  appId: import.meta.env.APP_ID,
};
// Initialize Firebase
initializeApp(firebaseConfig);

// Add icons to the library
library.add(faHome, faUser, faTwitter);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon) // register FontAwesomeIcon component globally
  .use(router) // Use the router instance
  .mount("#app");
