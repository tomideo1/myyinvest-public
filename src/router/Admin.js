export default [
  {
    path: "/admin",
    component: () => import("@/views/admin/index.vue")
    // meta: {
    //   layout: "TheAdminLayout"
    // },
    // children: [
    //   {
    //     path: "view-insights",
    //     name: "view-insight",
    //     component: () => import("@/views/admin/ViewInsights.vue")
    //   }
    // ]
  },
  {
    path: "/admin/view-insights",
    name: "view-insights",
    component: () => import("@/views/admin/ViewInsights.vue")
    // meta: {
    //   layout: "TheAdminLayout"
    // }
  },
  {
    path: "/admin/add-insights",
    name: "view-insights",
    component: () => import("@/views/admin/AddInsights.vue")
  }
];
