import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/art",
      name: "art",
      component: () => import("./views/Art.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/projet/liebr",
      name: "liebr",
      component: () => import("./views/projet/Liebr.vue")
    },
    {
      path: "/projet/blackmarch",
      name: "blackmarch",
      component: () => import("./views/projet/BlackMarch.vue")
    },
    {
      path: "/projet/lesptitscoquelicots",
      name: "lesptitscoquelicots",
      component: () => import("./views/projet/Lesptitscoquelicots.vue")
    },
    {
      path: "/projet/terrefete",
      name: "terrefete",
      component: () => import("./views/projet/Terrefete.vue")
    },
    {
      path: "/projet/dataforgood",
      name: "dataforgood",
      component: () => import("./views/projet/DataforGood.vue")
    }
  ]
});
