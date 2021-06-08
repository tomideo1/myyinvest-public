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
    name: "ViewInsights",
    component: () => import("@/views/admin/ViewInsights.vue")
    // meta: {
    //   layout: "TheAdminLayout"
    // }
  },
  {
    path: "/admin/add-insights",
    name: "AddInsights",
    component: () => import("@/views/admin/AddInsights.vue")
  },
  {
    path: "/admin/view-faqs",
    name: "ViewFaqs",
    component: () => import("@/views/admin/ViewFaqs.vue")
  },
  {
    path: "/admin/add-faqs",
    name: "AddFaqs",
    component: () => import("@/views/admin/AddFaqs.vue")
  },
  {
    path: "/admin/all-users",
    name: "AllUsers",
    component: () => import("@/views/admin/AllUsers.vue")
  },
  {
    path: "/admin/users/:id",
    name: "ViewUser",
    component: () => import("@/views/admin/ViewUser.vue"),
    props: true
    // props: {
    //   default: true,
    //   // function mode, more about it below
    //   sidebar: route => ({ search: route.query.q })
    // }
  },
  {
    path: "/admin/transactions",
    name: "AdminTransactions",
    component: () => import("@/views/admin/AdminTransactions.vue")
  },
  {
    path: "/admin/view-notifications",
    name: "ViewNotifications",
    component: () => import("@/views/admin/ViewAdminNotifications.vue")
  },
  {
    path: "/admin/add-notifications",
    name: "AddNotifications",
    component: () => import("@/views/admin/AddAdminNotifications.vue")
  },
  {
    path: "/admin/newsletters",
    name: "AdminNewsletters",
    component: () => import("@/views/admin/AdminNewsletters.vue")
  }
];
