import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Shared/index.vue";
import Landing from "../views/Shared/Landing.vue";
import About from "../views/Shared/About.vue";
import Auth from "../views/Auth/index";
import forgotPassword from "../views/Auth/forgotPassword";
import confirmPassword from "../views/Auth/confirmPassword";
import confirmMessage from "../views/Auth/confirmMessage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing",
    component: Index,
    redirect: "/home",
    children: [
      {
        path: "about",
        name: "about",
        component: About
      },
      {
        path: "home",
        name: "home",
        component: Landing
      }
    ]
  },

  {
    path: "/register",
    name: "register",
    component: Auth
  },
  {
    path: "/login",
    name: "login",
    component: Auth
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: forgotPassword
  },
  {
    path: "/email-sent",
    name: "confirmMessage",
    component: confirmMessage
  },
  {
    path: "/change-password",
    name: "confirmPassword",
    component: confirmPassword
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
