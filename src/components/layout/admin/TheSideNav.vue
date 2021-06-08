<template>
  <div class="menu">
    <router-link to="/admin" class="main-route">
      <img src="@/assets/admin/icons/home.svg" alt="Overview Logo" class="logo" />
      <span>Overview</span>
    </router-link>
    <router-link to="/admin/statistics" class="main-route">
      <img src="@/assets/admin/icons/statistics.svg" alt="Statistics Logo" class="logo" />
      <span>Statistics</span>
    </router-link>
    <router-link to="/admin/all-users" :class="[myPath('/admin/users/'), 'main-route']">
      <img src="@/assets/admin/icons/user.svg" alt="User Logo" class="logo" />
      <span>Users</span>
    </router-link>
    <router-link to="/admin/projects" class="main-route">
      <img src="@/assets/admin/icons/checklist.svg" alt="Projects Logo" class="logo" />
      <span>Projects</span>
    </router-link>
    <router-link to="/admin/transactions" class="main-route">
      <img src="@/assets/admin/icons/money.svg" alt="Transactions Logo" class="logo" />
      <span>Transactions</span>
    </router-link>
    <div :class="[myPath('-insights'), 'main-route']" @click="noInsight = !noInsight">
      <img src="@/assets/admin/icons/window.svg" alt="Insight Logo" class="logo" />
      <span>Insights</span>
    </div>
    <div class="sub-nav" v-if="!noInsight">
      <!-- <transition name="expand-fly"> -->
      <router-link to="/admin/view-insights"> <span></span>View Insights</router-link>
      <router-link to="/admin/add-insights"> <span></span>Add Insights</router-link>
      <!-- </transition> -->
    </div>
    <div :class="[myPath('-notification'), 'main-route']" @click="noNotification = !noNotification">
      <img src="@/assets/admin/icons/bell.svg" alt="Notifications Logo" class="logo" />
      <span>Notifications</span>
    </div>
    <div class="sub-nav" v-if="!noNotification">
      <!-- <transition name="expand-fly"> -->
      <router-link to="/admin/view-notifications"> <span></span>View Notifications</router-link>
      <router-link to="/admin/add-notifications"> <span></span>Add Notifications</router-link>
      <!-- </transition> -->
    </div>
    <div :class="[myPath('-faqs'), 'main-route']" @click="noPost = !noPost">
      <img src="@/assets/admin/icons/phone.svg" alt="Talk to us Logo" class="logo" />
      <span>FAQ</span>
    </div>
    <div class="sub-nav" v-if="!noPost">
      <!-- <transition name="expand-fly"> -->
      <router-link to="/admin/view-faqs"> <span></span>View FAQs</router-link>
      <router-link to="/admin/add-faqs"> <span></span>Add FAQs</router-link>
      <!-- </transition> -->
    </div>
    <router-link to="/admin/newsletters" class="main-route">
      <img src="@/assets/admin/icons/envelope.svg" alt="Newsletter Logo" class="logo" />
      <span>Newsletter</span>
    </router-link>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      noInsight: true,
      noPost: true,
      noNotification: true
      // noUser: true,
    };
  },

  methods: {
    myPath(route) {
      if (this.currentPath.includes(route)) {
        return "active-main-route";
      } else "";
    }
  },

  computed: {
    currentPath() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
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
