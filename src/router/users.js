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
        path: "notifications",
        name: "Notifications",
        component: () => import(/* webpackChunkName: "user-notifications" */ "../views/users/Notifications.vue"),
        meta: {
          middleware: [auth]
        }
      }
    ]
  }
];
