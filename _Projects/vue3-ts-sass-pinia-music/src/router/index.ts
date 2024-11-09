import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Root.vue"),
    children: [
      {
        path: "/discover",
        name: "discover",
        component: () => import("../views/discover/index.vue"),
      },
      {
        path: "/dj",
        name: "dj",
        component: () => import("../views/dj/index.vue"),
      },
      {
        path: "/music",
        name: "music",
        component: () => import("../views/music/index.vue"),
      },
      {
        path: "/video",
        name: "video",
        component: () => import("../views/video/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
