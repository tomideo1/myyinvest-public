import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Shared/index.vue";
import Landing from "../views/Shared/Landing.vue";
import Listings from "../views/Shared/listings.vue";
import Faq from "../views/Shared/faq.vue";
import Terms from "../views/Shared/terms.vue";
import Insight from "../views/Shared/insight.vue";
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
      },
      {
        path: "listings",
        name: "listings",
        component: Listings
      },
      {
        path: "faq",
        name: "faq",
        component: Faq
      },
      {
        path: "insight",
        name: "insight",
        component: Insight,
        meta: {
          noFooter: true
        }
      },
      {
        path: "terms",
        name: "terms",
        component: Terms
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
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active"
});

export default router;
