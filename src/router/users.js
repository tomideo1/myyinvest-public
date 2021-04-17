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
        path: "wallet",
        name: "wallet",
        redirect: "wallet/home",
        component: () => import(/* webpackChunkName: "user-profile" */ "../views/users/wallet/index.vue"),
        meta: {
          middleware: [auth]
        },
        children: [
          {
            path: "home",
            name: "wallet-home",
            component: () => import(/* webpackChunkName: "user-profile" */ "../views/users/wallet/home.vue"),
            meta: {
              middleware: [auth]
            }
          },
          {
            path: "fund",
            name: "wallet-fund",
            redirect: { name: "wallet-fund-home" },
            component: () => import(/* webpackChunkName: "user-profile" */ "../views/users/wallet/fund/index.vue"),
            meta: {
              middleware: [auth]
            },
            children: [
              {
                path: "home",
                name: "wallet-fund-home",
                component: () => import(/* webpackChunkName: "user-profile" */ "../views/users/wallet/fund/fund.vue"),
                meta: {
                  middleware: [auth]
                }
              },
              {
                path: "bank-transfer",
                name: "wallet-fund-bank-transfer",
                component: () => import(/* webpackChunkName: "user-profile" */ "../views/users/wallet/fund/bankTransfer.vue"),
                meta: {
                  middleware: [auth]
                }
              },
              {
                path: "ussd",
                name: "wallet-fund-ussd",
                component: () => import(/* webpackChunkName: "user-profile" */ "../views/users/wallet/fund/ussd.vue"),
                meta: {
                  middleware: [auth]
                }
              }
            ]
          }
        ]
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
        component: () => import(/* webpackChunkName: "user-notifications" */ "../views/general/notifications.vue"),
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
        path: "banks-and-cards/add-bank",
        name: "addbank",
        component: () => import(/* webpackChunkName: "add-bank" */ "../views/users/AddBank.vue"),
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
      },
      {
        path: "myy-portfolio",
        name: "portfolio",
        component: () => import(/* webpackChunkName: "myy-portfolio" */ "../views/users/MyyPortfolio.vue"),
        meta: {
          middleware: [auth]
        }
      }
    ]
  }
];
