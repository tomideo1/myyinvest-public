<template>
  <div class="wrapper">
    <div class="icon-group">
      <div v-if="windowWidth < 1023" class="hamburger-nav">
        <svg style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" @click="smOpenSideBar" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12">
          </line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </div>
      <div class="nav-icon">
        <img style="cursor: pointer" width="162" @click="$router.push('/')" height="26" src="@/assets/logos/Myylogo2.png" alt="Logo" />
      </div>
    </div>
    <div class="nav-details">
      <!-- <div class="nav-title">
        <span>{{ name }}</span>
      </div> -->
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
    },
    windowWidth()     { return this.$store.state.responsive.windowWidth },
    mobileResponsive: {
      get()    { return this.$store.state.responsive.mobileResponsive },
      set(val) { this.$store.commit('TOGGLE_MOBILE_RESPONSIVE', val) }
    },
  },
  methods: {
    smOpenSideBar() {
      const mobileState = !this.mobileResponsive.open
      this.$store.commit('TOGGLE_MOBILE_RESPONSIVE', {open: mobileState});
      this.$store.commit('TOGGLE_SIDEBAR_NAV_MENU_ACTIVE', {open: true});
    }
  }
};
</script>

<style scoped>
.hamburger-nav {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 1em;
}

.icon-group {
  display: flex;
  justify-content: center;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

div.nav-icon {
  display: flex;
  align-items: center;
  margin-left: var(--base-size);
}

div.nav-details {
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-md);
  font-weight: 600;
}
</style>
