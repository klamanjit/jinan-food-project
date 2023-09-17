import { createRouter, createWebHistory } from "vue-router";

import Home from "../page/Home.vue";
import LogIn from "../page/LogIn.vue";
import ShoppingCart from "../page/ShoppingCart.vue";
import ReviewOrder from "../page/ReviewOrder.vue";

const router = createRouter({
  history: createWebHistory("/jinan-food-project"),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/login", component: LogIn },
    { path: "/cart", component: ShoppingCart },
    { path: "/review", component: ReviewOrder },
  ],
});

export default router;
