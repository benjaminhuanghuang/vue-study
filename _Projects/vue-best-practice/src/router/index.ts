import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
//
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SignIn from "../views/SignIn.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signIn",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/protected",
    name: "Protected",
    component: () => import("../views/Protected.vue"),
    meta: {
      requireAuth: true,
    },
  },
];

// Create the router instance
const router = createRouter({ 
  history: createWebHistory("/"), // This creates an HTML5 history mode router
  routes,
});

// Wait for the current user to be loaded. Used when the app is refreshed
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user); 
      },
      reject
    );
  });
};

// Global navigation guard, applied to all routes
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    // Don't call getAuth().currentUser here. Firebase is not guaranteed to be loaded
    // If use refresh the page, the user will be null and the user will be redirected to the home page
    if (await getCurrentUser()) {  
      next();
    } else {
      alert("You must be logged in to access this page");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
