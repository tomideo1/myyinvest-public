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
    <div :class="[myPath('/admin/plan/'), 'main-route']" tabindex="0" @click="noPlan = !noPlan">
      <img src="@/assets/admin/icons/checklist.svg" alt="Plans icon" class="icon" />
      <span>Plans</span>
    </div>
    <div class="sub-nav" v-if="!noPlan">
      <transition-group name="slide">
        <router-link v-for="plan in plans" :to="plan.route" :key="plan.key"><span></span> {{ plan.title }} Plan</router-link>
      </transition-group>
    </div>
    <router-link to="/admin/special-form" class="main-route">
      <img src="@/assets/admin/icons/special.svg" alt="Special Form icon" class="icon" />
      <span>Special Form</span>
    </router-link>
    <div :class="[myPath('/admin/finance/'), 'main-route']" tabindex="0" @click="noFinance = !noFinance">
      <img src="@/assets/admin/icons/money.svg" alt="Transactions icon" class="icon" />
      <span>Financial Report</span>
    </div>
    <div class="sub-nav" v-if="!noFinance">
      <transition-group name="slide">
        <router-link v-for="transaction in transactions" :to="transaction.route" :key="transaction.key"><span></span> {{ transaction.title }}</router-link>
      </transition-group>
    </div>
    <div :class="[myPath('-insights'), 'main-route']" tabindex="0" @click="noInsight = !noInsight">
      <img src="@/assets/admin/icons/window.svg" alt="Insight icon" class="icon" />
      <span>Insights</span>
    </div>
    <div class="sub-nav" v-if="!noInsight">
      <transition-group name="slide">
        <router-link v-for="insight in insights" :to="insight.route" :key="insight.key"><span></span> {{ insight.title }} Insights</router-link>
      </transition-group>
    </div>
    <div :class="[myPath('-notification'), 'main-route']" tabindex="0" @click="noNotification = !noNotification">
      <img src="@/assets/admin/icons/bell.svg" alt="Notifications icon" class="icon" />
      <span>Notifications</span>
    </div>
    <div class="sub-nav" v-if="!noNotification">
      <transition-group name="slide">
        <router-link v-for="notif in notifications" :to="notif.route" :key="notif.key"><span></span> {{ notif.title }} Notifications</router-link>
      </transition-group>
    </div>
    <div :class="[myPath('-faqs'), 'main-route']" tabindex="0" @click="noFaq = !noFaq">
      <img src="@/assets/admin/icons/phone.svg" alt="Talk to us icon" class="icon" />
      <span>FAQ</span>
    </div>
    <div class="sub-nav" v-if="!noFaq">
      <transition-group name="slide">
        <router-link v-for="faq in faqs" :to="faq.route" :key="faq.key"><span></span> {{ faq.title }} FAQ</router-link>
      </transition-group>
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
      noFaq: true,
      noNotification: true,
      noFinance: true,
      noPlan: true,
      plans: [
        {
          route: "/admin/plan/add",
          key: "pAdd",
          title: "Add"
        },

        {
          route: "/admin/plan/income",
          key: "pIncome",
          title: "Income"
        },

        {
          route: "/admin/plan/rental",
          key: "pRental",
          title: "Rental"
        },

        {
          route: "/admin/plan/special",
          key: "pSpecial",
          title: "Special"
        }
      ],

      transactions: [
        {
          route: "/admin/finance/transactions",
          key: "aTransact",
          title: "Transactions"
        },

        {
          route: "/admin/finance/wallet-accounts",
          key: "aWallet",
          title: "Wallet Accounts"
        },

        {
          route: "/admin/finance/bank-accounts",
          key: "aBank",
          title: "Bank Accounts"
        },

        {
          route: "/admin/finance/refer-and-earn",
          key: "aRefer",
          title: "Refer and Earn"
        }
      ],

      insights: [
        {
          route: "/admin/view-insights",
          key: "vInsight",
          title: "View"
        },

        {
          route: "/admin/add-insights",
          key: "aInsight",
          title: "Add"
        }
      ],

      notifications: [
        {
          route: "/admin/view-notifications",
          key: "vNotification",
          title: "View"
        },

        {
          route: "/admin/add-notifications",
          key: "aNotification",
          title: "Add"
        }
      ],

      faqs: [
        {
          route: "/admin/view-faqs",
          key: "vFaq",
          title: "View"
        },

        {
          route: "/admin/add-faqs",
          key: "aFaq",
          title: "Add"
        }
      ]
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
*:focus {
  outline: none;
  border-color: var(--myyinvest-red) !important;
}

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
  margin-left: 60px;
}

.menu .sub-nav a {
  display: flex;
  align-items: center;
  width: 80%;
  margin-bottom: 2px;
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

/* .list-enter-active,
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
} */

.slide-enter-active {
  transition-duration: 0.5s;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave-from {
  max-height: 300px;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
