export default function() {
  let customerRoutes = [
    {
      title: "Overview",
      routeIcon: "home",
      identifier: "overview",
      to: {
        name: "overview"
      }
    },
    {
      title: "Browse Assets",
      routeIcon: "assets",
      identifier: "assets",
      to: {
        name: "assets"
      }
    },
    {
      title: "Myy Portfolio",
      routeIcon: "portfolio",
      identifier: "portfolio",
      to: {
        name: "portfolio"
      }
    },
    {
      title: "Transactions",
      routeIcon: "wallet",
      identifier: "transactions",
      to: {
        name: "transactions"
      }
    },
    {
      title: "Bank and Cards",
      routeIcon: "atm-card",
      identifier: "banks",
      to: {
        name: "banks"
      }
    },
    {
      title: "Refer and Earn",
      routeIcon: "money",
      identifier: "refer",
      to: {
        name: "refer"
      }
    },
    // {
    //   title: "Talk to us",
    //   routeIcon: "phone",
    //   identifier: "talk",
    //   to: {
    //     name: "talk"
    //   }
    // },
    {
      title: "Profile",
      routeIcon: "profile",
      identifier: "profile",
      to: {
        name: "profile"
      }
    }

    // {
    //   title: "Settings",
    //   routeIcon: "cog",
    //   identifier: "settings",
    //   to: {
    //     name: "settings"
    //   }
    // }
  ];
  let appRoutes = [
    {
      title: "Menu",
      items: []
    }
  ];

  appRoutes[0].items = [...customerRoutes];
  return appRoutes[0].items;
}
