<template>
  <div class="wrapper">
    <div class="nav-icon">
      <img style="cursor: pointer" width="162" @click="$router.push('/')" height="26" src="@/assets/logos/Myylogo2.png" alt="Logo" />
    </div>
    <div class="nav-details">
      <div class="nav-title">
        <span>{{ name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      let val = "";
      // replace with arr.include()
      switch (this.$route.path) {
        case "/admin":
          val = "Overview";
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
        case "/admin/users/":
          val = "User Details";
          break;
        case "/admin/transactions":
          val = "Transactions";
          break;
        case "/admin/view-notifications":
          val = "View Notifications";
          break;
        case "/admin/add-notifications":
          val = "Add Notification";
          break;
        case "/admin/view-faqs":
          val = "View FAQs";
          break;
        case "/admin/add-faqs":
          val = "Add FAQ";
          break;
        case "/admin/newsletters":
          val = "Newsletters";
          break;
        default:
          val = "User Details";
      }
      return val;
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 20% 80%;
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
