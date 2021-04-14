const routeOptions = [
  {
    path: "/admin/view-insights",
    name: "ViewAdminInsights",
    meta: {
      layout: "AdminLayoutWithOptions"
    }
  },
  {
    path: "/admin/add-insights",
    name: "AddAdminInsights",
    meta: {
      layout: "AdminLayout"
    }
  },
  {
    path: "/admin/view-faqs",
    name: "ViewAdminFaqs",
    meta: {
      layout: "AdminLayout"
    }
  },
  {
    path: "/admin/add-faqs",
    name: "AddAdminFaqs",
    meta: {
      layout: "AdminLayout"
    }
  },
  {
    path: "/admin/all-users",
    name: "AllUsers",
    meta: {
      layout: "AdminLayoutWithOptions"
    }
  },
  {
    path: "/admin/users/:id",
    name: "ViewUserDetails",
    meta: {
      layout: "AdminLayoutWithOptions"
    },
    props: true
    // props: {
    //   default: true,
    //   // function mode, more about it below
    //   sidebar: route => ({ search: route.query.q })
    // }
  },
  {
    path: "/admin/finance/transactions",
    name: "AdminTransactions",
    meta: {
      layout: "AdminLayoutWithOptions"
    }
  },
  {
    path: "/admin/finance/accounts",
    name: "AdminAccounts",
    meta: {
      layout: "AdminLayoutWithOptions"
    }
  },
  {
    path: "/admin/view-notifications",
    name: "ViewAdminNotifications",
    meta: {
      layout: "AdminLayoutWithOptions"
    }
  },
  {
    path: "/admin/add-notifications",
    name: "AddAdminNotifications",
    meta: {
      layout: "AdminLayout"
    }
  },
  {
    path: "/admin/newsletters",
    name: "AdminNewsletters",
    meta: {
      layout: "AdminLayoutWithOptions"
    }
  }
];

const routes = routeOptions.map(route => {
  return {
    ...route,
    component: () => import(/* webpackChunkName: "[request]" */ `@/views/admin/${route.name}.vue`)
  };
});

export default [
  {
    path: "/admin",
    nmae: "Admin",
    component: () => import(/* webpackChunkName: "Admin" */ "@/views/admin/index.vue"),
    meta: {
      layout: "AdminLayout"
    }
  },
  ...routes
];
