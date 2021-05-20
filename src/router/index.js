import Vue from "vue";
import VueRouter from "vue-router";
import Products from "../views/Products.vue";
import Customers from "../views/Customers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/customers",
    name: "Customers",
    component: Customers,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
