import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AddSubjectView from "../views/AddSubjectView.vue";
import SubjectView from "../views/SubjectView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/addSubject",
    name: "addSubject",
    component: AddSubjectView,
  },
  {
    path: "/subject/:id",
    name: "subject",
    component: SubjectView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
