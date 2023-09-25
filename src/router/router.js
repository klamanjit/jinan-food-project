import { createRouter, createWebHistory } from "vue-router";

import Home from "../page/Home.vue";
import LogIn from "../page/LogIn.vue";
import ShoppingCart from "../page/ShoppingCart.vue";
import ReviewOrder from "../page/ReviewOrder.vue";

const router = createRouter({
  history: createWebHistory("/jinan-food-project"),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home, name: "home" },
    { path: "/login", component: LogIn, name: "login" },
    { path: "/cart", component: ShoppingCart, name: "cart" },
    { path: "/review", component: ReviewOrder, name: "review" },
  ],
});

function isAuthenticated() {
  const token = localStorage.getItem("token");
  return !!token;
}

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !isAuthenticated()) next({ name: "login" });
  else next();
});

export default router;
