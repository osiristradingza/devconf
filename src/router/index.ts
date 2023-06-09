import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { dataJobs } from "@/assets/data/data-jobs";
import { data } from "autoprefixer";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0, behavior: "smooth" };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Betway X DevConf",
      },
    },
    {
      path: "/careers/:id",
      name: "careers",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/careers/index.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const title = to.meta.title;
  const { params } = to;
  // @ts-ignore
  if (title) document.title = title;
  if (params.id) {
    const career = dataJobs.find(({ key }) => params.id === key);
    if (career?.title) document.title = `${career.company} - ${career.title}`;
  }
  next();
});

export default router;
