import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Shared/index.vue";
import Landing from "../views/Shared/Landing.vue";
import listingsIndex from "../views/Shared/listings/index";
import Listings from "../views/Shared/listings/listings";
import SingleListings from "../views/Shared/listings/single";
import Faq from "../views/Shared/faq.vue";
import Terms from "../views/Shared/terms.vue";
import Disclaimer from "../views/Shared/disclaimer.vue";
import Privacy from "../views/Shared/privacy.vue";
import Insight from "../views/Shared/insight/insight.vue";
import Blogs from "../views/Shared/insight/blogs.vue";
import SingleBlog from "../views/Shared/insight/single.vue";
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
        name: "listings-main",
        component: listingsIndex,
        redirect: {
          name: "listings"
        },
        children: [
          {
            path: "",
            name: "listings",
            component: Listings
          },
          {
            path: "single",
            name: "single-listing",
            component: SingleListings
          }
        ]
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
        redirect: {
          name: "blogs"
        },
        children: [
          {
            path: "blogs",
            name: "blogs",
            component: Blogs
          },
          {
            path: "blogs/single",
            name: "single-blog",
            component: SingleBlog
          }
        ]
      },

      {
        path: "terms",
        name: "terms",
        component: Terms
      },
      {
        path: "disclaimer",
        name: "disclaimer",
        component: Disclaimer
      },
      {
        path: "privacy",
        name: "privacy",
        component: Privacy
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
