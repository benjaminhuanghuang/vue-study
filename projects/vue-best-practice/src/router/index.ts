import { createRouter, createWebHistory } from "vue-router";
//
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import { getAuth } from "firebase/auth";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
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

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = getAuth().onAuthStateChanged((user) => {
      getAuth(),
      (user)=> {
        removeListener(),
        resolve(user);
      },
     reject);
  });
};
 
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router;
