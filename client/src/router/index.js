import { createRouter, createWebHistory } from "vue-router";
import NfPage from "../pages/Nf.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: NfPage,
  },
  {
    path: "/users/nfs",
    name: "Nfs",
    component: NfPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;