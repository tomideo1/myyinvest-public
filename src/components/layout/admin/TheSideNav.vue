<template>
  <div class="menu">
    <router-link to="/admin" class="main-route">
      <img src="@/assets/admin/icons/home.svg" alt="Overview icon" class="icon" />
      <span>Overview</span>
    </router-link>
    <router-link to="/admin/statistics" class="main-route">
      <img src="@/assets/admin/icons/statistics.svg" alt="Statistics icon" class="icon" />
      <span>Statistics</span>
    </router-link>
    <router-link to="/admin/all-users" :class="[myPath('/admin/users/'), 'main-route']">
      <img src="@/assets/admin/icons/user.svg" alt="User icon" class="icon" />
      <span>Users</span>
    </router-link>
    <router-link to="/admin/projects" class="main-route">
      <img src="@/assets/admin/icons/checklist.svg" alt="Projects icon" class="icon" />
      <span>Projects</span>
    </router-link>
    <div :class="[myPath('admin/finance/'), 'main-route']" @click="noFinance = !noFinance">
      <img src="@/assets/admin/icons/money.svg" alt="Transactions icon" class="icon" />
      <span>Financial Report</span>
    </div>
    <div class="sub-nav" v-if="!noFinance">
      <!-- <transition-group name="list"> -->
      <router-link to="/admin/finance/transactions">Transactions</router-link>
      <router-link to="/admin/finance/accounts">Accounts</router-link>
      <!-- </transition-group> -->
    </div>
    <div :class="[myPath('-insights'), 'main-route']" @click="noInsight = !noInsight">
      <img src="@/assets/admin/icons/window.svg" alt="Insight icon" class="icon" />
      <span>Insights</span>
    </div>
    <div class="sub-nav" v-if="!noInsight">
      <!-- <transition-group name="list"> -->
      <router-link to="/admin/view-insights">View Insights</router-link>
      <router-link to="/admin/add-insights">Add Insights</router-link>
      <!-- </transition-group> -->
    </div>
    <div :class="[myPath('-notification'), 'main-route']" @click="noNotification = !noNotification">
      <img src="@/assets/admin/icons/bell.svg" alt="Notifications icon" class="icon" />
      <span>Notifications</span>
    </div>
    <div class="sub-nav" v-if="!noNotification">
      <!-- <transition-group name="list"> -->
      <router-link to="/admin/view-notifications">View Notifications</router-link>
      <router-link to="/admin/add-notifications">Add Notifications</router-link>
      <!-- </transition-group> -->
    </div>
    <div :class="[myPath('-faqs'), 'main-route']" @click="noPost = !noPost">
      <img src="@/assets/admin/icons/phone.svg" alt="Talk to us icon" class="icon" />
      <span>FAQ</span>
    </div>
    <div class="sub-nav" v-if="!noPost">
      <!-- <transition-group name="list"> -->
      <router-link to="/admin/view-faqs">View FAQs</router-link>
      <router-link to="/admin/add-faqs">Add FAQs</router-link>
      <!-- </transition-group> -->
    </div>
    <router-link to="/admin/newsletters" class="main-route">
      <img src="@/assets/admin/icons/envelope.svg" alt="Newsletter icon" class="icon" />
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
      noNotification: true,
      noFinance: true
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

.menu div.main-route:hover .icon,
.menu a.main-route:hover .icon,
.menu .active-main-route .icon,
a.main-route.exact-active.active .icon {
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

.list-enter-active,
.list-leave-active,
.list-move {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}

.list-enter {
  opacity: 0;
  transform: translateX(50px) scaleY(0.5);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
}

.list-leave-active {
  position: absolute;
}

.list-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: center top;
}
</style>
