import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router/auto";
import App from "./App.vue";
import { fetchToken } from "./logic";

import "uno.css";

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => {
    return routes;
  },
});

router.beforeEach(() => {
  console.log(1)
  fetchToken();
});

const app = createApp(App);
app.use(router);
app.mount("#app");
