import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "MainLayout",
      component: () => import("@/layouts/MainLayout.vue"),
      children: [
        {
          path: "/",
          name: "HomePage",
          component: () => import("@/views/HomePage.vue"),
        },
        {
          path: "/about",
          name: "AboutPage",
          component: () => import("@/views/AboutPage.vue"),
        },
      ],
    },
  ],
});

export default router;
