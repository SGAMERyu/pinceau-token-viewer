import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router/auto";
import App from "./App.vue";

import "uno.css";

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => {
    return routes;
  },
});

const app = createApp(App);
app.use(router);
app.mount("#app");
