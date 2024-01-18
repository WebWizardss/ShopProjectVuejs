import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ShoppingView from "../views/ShoppingView.vue";
import DetailsView from "../views/DetailsView.vue";
import ReviewList from "../views/ReviewsListView.vue";
import { UserStore } from "../store/ServicePinia";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/DetailsView/:id",
    name: "DetailsView",
    component: DetailsView,
  },
  {
    path: "/ShoppingView",
    name: "ShoppingView",
    component: ShoppingView,
  },
  {
    path: "/ReviewList",
    name: "ReviewList",
    component: ReviewList,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = UserStore();
  let user = store.user;
  if (to.name === "ReviewList" && (!user || user.IsAdmin == false)) {
    next({ name: "LoginView" });
  } else {
    next();
  }
});

export default router;
