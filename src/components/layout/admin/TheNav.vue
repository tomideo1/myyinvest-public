<template>
  <div class="nav-wrapper">
    <div class="nav-icon">
      <img style="cursor: pointer" width="162" height="26" src="@/assets/logos/Myylogo2.png" alt="Myyinvest Logo" @click="$router.push('/admin')" />
    </div>
    <div class="nav-details">
      <div class="nav-title">
        <span>{{ name }} <slot name="username"></slot> </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      let val = "";
      // const userD = /\/admin\/users\/[1-9]\d*$/gim;
      const user_d = /^\/admin\/users\/[1-9][0-9]*$/gim;
      const user_t = /^\/admin\/users\/[1-9][0-9]*\/transactions$/gim;

      const currentRoute = this.$route.fullPath;

      if (currentRoute.match(user_d)) {
        val = "User Details";
      } else if (currentRoute.match(user_t)) {
        val = "User Transactions";
      } else
        switch (this.$route.path) {
          case "/admin":
            val = "Overview";
            break;
          case "/admin/statistics":
            val = "Statistics";
            break;
          case "/admin/plans":
            val = "Plans";
            break;
          case "/admin/special-form":
            val = "Special Form";
            break;
          case "/admin/view-insights":
            val = "View Insights";
            break;
          case "/admin/add-insights":
            val = "Add Insight";
            break;
          case "/admin/all-users":
            val = "All Users";
            break;
          case "/admin/finance/transactions":
            val = "Transactions";
            break;
          case "/admin/finance/wallet-accounts":
            val = "Wallet Accounts";
            break;
          case "/admin/finance/bank-accounts":
            val = "Bank Accounts";
            break;
          case "/admin/view-notifications":
            val = "View Notifications";
            break;
          case "/admin/add-notifications":
            val = "Add Notification";
            break;
          case "/admin/faq/questions":
            val = "FAQ Questions";
            break;
          case "/admin/faq/answers":
            val = "FAQ Answers";
            break;
          case "/admin/newsletters":
            val = "Newsletters";
            break;
          default:
            val = "";
        }
      return val;
    }
  }
};
</script>

<style scoped>
.nav-wrapper {
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 100%;
}

div.nav-icon {
  display: flex;
  align-items: center;
  margin-left: var(--base-size);
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

div.nav-details {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  font-size: var(--font-md);
  font-weight: 600;
}
</style>
