import Vue from "vue";
import VueRouter from "vue-router";
import userRoutes from "./users";
import AdminRoutes from "./Admin";
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
  },

  ...AdminRoutes
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  // }
];
const routes = baseRoutes.concat(userRoutes);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active"
});

export default router;
