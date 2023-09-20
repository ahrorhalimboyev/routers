import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import CarsTableView from "../views/CarsTableView.vue";
import CarsInfoView from "../views/CarsInfoView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/cartable",
    name: "cartable",
    component: CarsTableView,
  },
  {
    path: "/carinfo",
    name: "car",
    component: CarsInfoView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
