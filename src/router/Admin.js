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
    name: "ViewAdminInsights",
    component: () => import("@/views/admin/ViewInsights.vue")
    // meta: {
    //   layout: "TheAdminLayout"
    // }
  },
  {
    path: "/admin/add-insights",
    name: "AddAdminInsights",
    component: () => import("@/views/admin/AddInsights.vue")
  },
  {
    path: "/admin/view-posts",
    name: "ViewAdminPosts",
    component: () => import("@/views/admin/ViewPosts.vue")
  },
  {
    path: "/admin/add-posts",
    name: "AddAdminPosts",
    component: () => import("@/views/admin/AddPosts.vue")
  },
  {
    path: "/admin/view-users",
    name: "ViewAdminUsers",
    component: () => import("@/views/admin/ViewUsers.vue")
  },
  {
    path: "/admin/add-users",
    name: "AddAdminUsers",
    component: () => import("@/views/admin/AddUsers.vue")
  },
  {
    path: "/admin/transactions",
    name: "AdminTransactions",
    component: () => import("@/views/admin/AdminTransactions.vue")
  }
];
