import auth from "./middleware/auth";
export default [
  {
    path: "/user",
    meta: {
      middleware: [auth]
    },
    component: () => import(/* webpackChunkName: "user-index" */ "../views/users/index.vue"),
    children: [
      {
        path: "dashboard",
        name: "overview",
        component: () => import(/* webpackChunkName: "user-dashboard" */ "../views/users/dashboard.vue"),
        meta: {
          middleware: [auth]
        }
        // meta: {
        //     middleware: [auth],
        // },
      },
      {
        path: "profile",
        name: "profile",
        component: () => import(/* webpackChunkName: "user-profile" */ "../views/users/profile.vue"),
        meta: {
          middleware: [auth]
        }
      },
      {
        path: "settings",
        name: "settings",
        component: () => import(/* webpackChunkName: "user-profile" */ "../views/users/settings.vue"),
        meta: {
          middleware: [auth]
        }
      },
      {
        path: "notifications",
        name: "notifications",
        component: () => import(/* webpackChunkName: "user-notifications" */ "../views/general/Notifications.vue"),
        meta: {
          middleware: [auth]
        }
      },
      {
        path: "banks-and-cards",
        name: "banks",
        component: () => import(/* webpackChunkName: "banks-and-cards" */ "../views/users/BanksAndCards.vue"),
        meta: {
          middleware: [auth]
        }
      },
      {
        path: "refer-and-earn",
        name: "refer",
        component: () => import(/* webpackChunkName: "refer-and-earn" */ "../views/users/ReferAndEarn.vue"),
        meta: {
          middleware: [auth]
        }
      }
    ]
  }
];
