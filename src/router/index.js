import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: () => import("../views/Testimonials.vue")
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../views/Contacts.vue")
  },
  {
    path: "/checkout/result",
    name: "CheckoutResult",
    component: () => import("../views/CheckoutResult.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
