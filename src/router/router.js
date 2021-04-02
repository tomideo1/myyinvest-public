import Vue from "vue";
import VueRouter from "vue-router";
import userRoutes from "./users";
import middlewarePipeline from "./kernel/middlewarePipeline";
import { store } from "../store/store";
// import NProgress from "nprogress";
// import "nprogress/nprogress.css";
import progressFns from "@/utils/helper.js";

Vue.use(VueRouter);

const baseRoutes = [
  {
    path: "/",
    name: "landing",
    component: () => import(/* webpackChunkName: "landing" */ "../views/Shared/index.vue"),
    redirect: "/home",
    children: [
      {
        path: "about",
        name: "about",
        component: () => import(/* webpackChunkName: "about" */ "../views/Shared/About.vue")
      },
      {
        path: "home",
        name: "home",
        component: () => import(/* webpackChunkName: "home" */ "../views/Shared/Landing.vue")
      },
      {
        path: "listings",
        name: "listings-main",
        component: () => import(/* webpackChunkName: "listings-main" */ "../views/Shared/listings/index.vue"),
        redirect: {
          name: "listings"
        },
        children: [
          {
            path: "",
            name: "listings",
            component: () => import(/* webpackChunkName: "listings" */ "../views/Shared/listings/listings.vue")
          },
          {
            path: "single",
            name: "single-listing",
            component: () => import(/* webpackChunkName: "single" */ "../views/Shared/listings/single.vue")
          }
        ]
      },
      {
        path: "faq",
        name: "faq",
        component: () => import(/* webpackChunkName: "faq" */ "../views/Shared/faq.vue")
      },
      {
        path: "insight",
        name: "insight",
        component: () => import(/* webpackChunkName: "insight" */ "../views/Shared/insight/insight.vue"),
        redirect: {
          name: "blogs"
        },
        children: [
          {
            path: "blogs",
            name: "blogs",
            component: () => import(/* webpackChunkName: "blogs" */ "../views/Shared/insight/blogs.vue")
          },
          {
            path: "blogs/single",
            name: "single-blog",
            component: () => import(/* webpackChunkName: "single-blog" */ "../views/Shared/insight/single.vue")
          }
        ]
      },

      {
        path: "terms",
        name: "terms",
        component: () => import(/* webpackChunkName: "terms" */ "../views/Shared/terms.vue")
      },
      {
        path: "disclaimer",
        name: "disclaimer",
        component: () => import(/* webpackChunkName: "disclaimer" */ "../views/Shared/disclaimer.vue")
      },
      {
        path: "privacy",
        name: "privacy",
        component: () => import(/* webpackChunkName: "privacy" */ "../views/Shared/privacy.vue")
      }
    ]
  },

  {
    path: "/register",
    name: "register",
    component: () => import(/* webpackChunkName: "register" */ "../views/Auth/index.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Auth/index.vue")
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: () => import(/* webpackChunkName: "forgotPassword" */ "../views/Auth/forgotPassword.vue")
  },
  {
    path: "/email-sent/:email",
    name: "confirmMessage",
    component: () => import(/* webpackChunkName: "v" */ "../views/Auth/confirmMessage.vue")
  },
  {
    path: "/change-password",
    name: "confirmPassword",
    component: () => import(/* webpackChunkName: "confirmPassword" */ "../views/Auth/confirmPassword.vue")
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  // }
];

const { start: progressStart, stop: progressStop } = progressFns();

const routes = baseRoutes.concat(userRoutes);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active"
});

router.beforeResolve((to, from, next) => {
  // Start the route progress bar.
  // NProgress.start();
  progressStart();
  next();
});

/* eslint-disable no-unused-vars */
router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  // NProgress.done();
  progressStop();
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }

  const middleware = to.meta.middleware;
  const context = {
    to,
    from,
    next,
    router,
    store
  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  });
});

export default router;
