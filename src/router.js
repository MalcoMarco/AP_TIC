import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Fotos from "./views/fotos.vue";
import Convenios from "./views/convenios.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/fotos",
      name: "fotos",
      component: Fotos
    },
    {
      path: "/nosotros",
      name: "nosotros",
      component: () =>
        import(/* webpackChunkName: "nosotros" */ "./views/nosotros.vue")
    },
    {
      path: "/recursos",
      name: "recursos",
      component: () =>
        import("./views/recursoseducativos.vue")
    },
    {
      path: "/Convenios",
      name: "convenios",
      component: Convenios
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
