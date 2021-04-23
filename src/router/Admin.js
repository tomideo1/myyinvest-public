const routeOptions = [
  {
    path: "/admin/statistics",
    name: "AdminStatistics",
    meta: {
      layout: "AdminLayout"
    }
  },
  {
    path: "/admin/plan/income",
    name: "AdminPlanIncome",
    meta: {
      layout: "AdminLayout"
    }
  },
  {
    path: "/admin/plan/rental",
    name: "AdminPlanRental",
    meta: {
      layout: "AdminLayout"
    }
  },
  {
    path: "/admin/plan/special",
    name: "AdminPlanSpecial",
    meta: {
      layout: "AdminLayout"
    }
  },
  {
    path: "/admin/special-form",
    name: "AdminSpecial",
    meta: {
      layout: "AdminLayoutWithOptions"
    }
  },
  {
    path: "/admin/view-insights",
    name: "AdminInsightView",
    meta: {
      layout: "AdminLayoutWithOptions"
    }
  },
  {
    path: "/admin/add-insights",
    name: "AdminInsightAdd",
    meta: {
      layout: "AdminLayout"
    }
  },
  {
    path: "/admin/view-faqs",
    name: "AdminFaqView",
    meta: {
      layout: "AdminLayoutWithOptions"
    }
  },
  {
    path: "/admin/add-faqs",
    name: "AdminFaqAdd",
    meta: {
      layout: "AdminLayout"
    }
  },
  {
    path: "/admin/all-users",
    name: "AdminUsersView",
    meta: {
      layout: "AdminLayoutWithOptions"
    }
  },
  {
    path: "/admin/users/:id",
    name: "AdminUsersDetail",
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
    path: "/admin/users/:id/transactions",
    name: "AdminUsersTransactions",
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
    name: "AdminFinanceTransactions",
    meta: {
      layout: "AdminLayoutWithOptions"
    }
  },
  {
    path: "/admin/finance/wallet-accounts",
    name: "AdminFinanceWallet",
    meta: {
      layout: "AdminLayoutWithOptions"
    }
  },
  {
    path: "/admin/finance/bank-accounts",
    name: "AdminFinanceBank",
    meta: {
      layout: "AdminLayoutWithOptions"
    }
  },
  {
    path: "/admin/view-notifications",
    name: "AdminNotificationView",
    meta: {
      layout: "AdminLayoutWithOptions"
    }
  },
  {
    path: "/admin/add-notifications",
    name: "AdminNotificationAdd",
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
