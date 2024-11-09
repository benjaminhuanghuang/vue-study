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
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};
// Initialize Firebase
initializeApp(firebaseConfig);

// Add fontawesome icons to the library
library.add(faHome, faUser, faTwitter);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon) // register FontAwesomeIcon component globally
  .use(router) // Use the router instance
  .mount("#app");
