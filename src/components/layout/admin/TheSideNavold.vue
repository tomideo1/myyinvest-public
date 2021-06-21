<template>
  <div>
    <div class="menu-toggler-wrapper">
      <span>
        <svg  @click="closeSideBarPerm" v-if="sideBarState.open && sideBarState.stay" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" 
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
          stroke-linejoin="round" class="lg-menu-toggler collapse-toggle-icon feather feather-disc">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
  
        <svg  @click="openSideBarPerm" v-if="!sideBarState.stay && sideBarState.open" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" 
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
          stroke-linejoin="round" class="lg-menu-toggler collapse-toggle-icon feather feather-disc">
          <circle cx="12" cy="12" r="10"></circle>
        </svg>

        <!-- cross -->
        <svg xmlns="http://www.w3.org/2000/svg" @click="smCloseSidebar" width="20px" height="20px" 
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
          stroke-linecap="round" stroke-linejoin="round" class="sm-menu-toggler d-block d-xl-none feather feather-x">
          <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </span>
    </div>
    <div class="menu">
      <router-link to="/admin" class="main-route">
        <img src="@/assets/admin/icons/home.svg" alt="Overview Logo" class="logo" />
        <span v-if="sideBarState.open">Overview</span>
      </router-link>
      <router-link to="/admin/statistics" class="main-route">
        <img src="@/assets/admin/icons/statistics.svg" alt="Statistics Logo" class="logo" />
        <span v-if="sideBarState.open">Statistics</span>
      </router-link>
      <router-link to="/admin/all-users" :class="[myPath('/admin/users/'), 'main-route']">
        <img src="@/assets/admin/icons/user.svg" alt="User Logo" class="logo" />
        <span v-if="sideBarState.open">Users</span>
      </router-link>
      <router-link to="/admin/projects" class="main-route">
        <img src="@/assets/admin/icons/checklist.svg" alt="Projects Logo" class="logo" />
        <span v-if="sideBarState.open">Projects</span>
      </router-link>
      <router-link to="/admin/transactions" class="main-route">
        <img src="@/assets/admin/icons/money.svg" alt="Transactions Logo" class="logo" />
        <span v-if="sideBarState.open">Transactions</span>
      </router-link>
      <div :class="[myPath('-insights'), 'main-route']" @click="noInsight = !noInsight">
        <img src="@/assets/admin/icons/window.svg" alt="Insight Logo" class="logo" />
        <span v-if="sideBarState.open">Insights</span>
      </div>
      <div class="sub-nav" v-if="!noInsight">
        <!-- <transition name="expand-fly"> -->
        <router-link to="/admin/view-insights"> <span></span>View Insights</router-link>
        <router-link to="/admin/add-insights"> <span></span>Add Insights</router-link>
        <!-- </transition> -->
      </div>
      <div :class="[myPath('-notification'), 'main-route']" @click="noNotification = !noNotification">
        <img src="@/assets/admin/icons/bell.svg" alt="Notifications Logo" class="logo" />
        <span v-if="sideBarState.open">Notifications</span>
      </div>
      <div class="sub-nav" v-if="!noNotification">
        <!-- <transition name="expand-fly"> -->
        <router-link to="/admin/view-notifications"> <span></span>View Notifications</router-link>
        <router-link to="/admin/add-notifications"> <span></span>Add Notifications</router-link>
        <!-- </transition> -->
      </div>
      <div :class="[myPath('-faqs'), 'main-route']" @click="noPost = !noPost">
        <img src="@/assets/admin/icons/phone.svg" alt="Talk to us Logo" class="logo" />
        <span v-if="sideBarState.open">FAQ</span>
      </div>
      <div class="sub-nav" v-if="!noPost">
        <!-- <transition name="expand-fly"> -->
        <router-link to="/admin/view-faqs"> <span></span>View FAQs</router-link>
        <router-link to="/admin/add-faqs"> <span></span>Add FAQs</router-link>
        <!-- </transition> -->
      </div>
      <router-link to="/admin/newsletters" class="main-route">
        <img src="@/assets/admin/icons/envelope.svg" alt="Newsletter Logo" class="logo" />
        <span v-if="sideBarState.open">Newsletter</span>
      </router-link>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      noInsight: true,
      noPost: true,
      noNotification: true,
      sideBarState: {
        open: true,
        stay: true
      },
      // noUser: true,
    };
  },

  methods: {
    myPath(route) {
      if (this.currentPath.includes(route)) {
        return "active-main-route";
      } else "";
    },
    closeSideBarPerm() {
      this.sideBarState.open = !this.sideBarState.open;
      this.$emit('toggle-sidebar', this.sideBarState)
    },

    openSideBarPerm() {
      this.sideBarState.open = true
      this.sideBarState.stay = true
      // this.$emit('toggle-sidebar', this.sideBarState)
    },

    smCloseSidebar() {
      this.sideBarState.open = false;
      this.sideBarState.stay = false;
    }
  },

  computed: {
    currentPath() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.lg-menu-toggler {
  display: none;
}

@media (min-width: 1024px) {
  .lg-menu-toggler {
    display: inline-block;
  }
}

.menu-toggler-wrapper {
  /* margin-top: .9em; */
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  padding-right: .5em;
  cursor: pointer;
}

.menu {
  display: flex;
  flex-direction: column;
  /* margin-top: 50px; */
}

.menu a.main-route,
.menu div.main-route {
  max-width: 75%;
  padding: 10px var(--base-size);
  border: 1px solid transparent;
  border-top-right-radius: var(--base-size);
  border-bottom-right-radius: var(--base-size);
  font-weight: 600;
}

.menu a.main-route:not(:last-child),
.menu div.main-route:not(:last-child) {
  margin-bottom: 5px;
}

.menu div.main-route:hover,
.active-main-route,
.menu a.main-route:hover,
.menu a.main-route.exact-active.active {
  color: var(--myyinvest-white) !important;
  background-color: var(--myyinvest-red);
  cursor: pointer;
}

.menu div.main-route:hover .logo,
.menu a.main-route:hover .logo,
.menu .active-main-route .logo,
a.main-route.exact-active.active .logo {
  filter: invert(100%) sepia(8%) saturate(0%) hue-rotate(121deg) brightness(109%) contrast(105%);
}

.menu a.main-route span,
.menu div.main-route span {
  margin-left: var(--base-size);
}

.menu .sub-nav {
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 60px;
}

.menu .sub-nav a {
  display: flex;
  align-items: center;
  width: 80%;
  padding: 5px;
  border-radius: 5px;
}

.menu .sub-nav a:hover,
.menu .sub-nav a.exact-active.active {
  color: var(--myyinvest-white) !important;
  background-color: var(--myyinvest-red);
}

.menu .sub-nav a span {
  display: inline-block;
  width: 5px;
  height: 5px;
  margin: 0 10px;
  border-radius: 50%;
  background-color: var(--myyinvest-red);
}

.menu .sub-nav a:hover span,
.menu .sub-nav a.exact-active.active span {
  background-color: var(--myyinvest-white) !important;
}

.menu .sub-nav a:not(:last-child) {
  margin-bottom: 2px;
}

/* .expand-fly-in */
</style>
