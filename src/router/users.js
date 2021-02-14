export default [
  {
    path: "/user",
    component: () => import(/* webpackChunkName: "user-index" */ "../views/users/index.vue"),
    children: [
      {
        path: "dashboard",
        name: "user-dashboard",
        component: () => import(/* webpackChunkName: "user-dashboard" */ "../views/users/dashboard.vue")
        // meta: {
        //     middleware: [auth],
        // },
      },
      {
        path: "profile",
        name: "user-profile",
        component: () => import(/* webpackChunkName: "user-profile" */ "../views/users/profile.vue")
      }
    ]
  }
];
