export default [
  {
    path: "/admin",
    component: () => import("../views/admin/index.vue")
    // children: [
    //     {
    //         path: "dashboard",
    //         name: "user-dashboard",
    //         component: () => import("../views/users/dashboard.vue")
    //     },
    //     {
    //         path: "profile",
    //         name: "user-profile",
    //         component: () => import("../views/users/profile.vue")
    //     }
    // ]
  }
];
