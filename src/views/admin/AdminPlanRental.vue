<template>
  <section class="main-wrapper">
    <p class="main-title">Rental Plan</p>
    <section>
      <nav class="tab-nav">
        <div :class="[{ 'is-active': index === currentIndex }]" @click="changeTab(tab.id, index)" v-for="(tab, index) in tabs" :key="tab.id">{{ tab.name }}</div>
      </nav>

      <section class="main-content">
        <component :is="currentTabComponent"></component>
      </section>
    </section>
  </section>
</template>

<script>
// import "@/assets/admin/styles/statistics.css";
import "@/assets/admin/styles/nav-tab.css";

export default {
  name: "AdminPlanRental",

  metaInfo: {
    title: "Myyinvest - Rental Plan (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      selectedIndex: 0,
      currentTab: "AdminPlanRentalView",
      tabs: [
        {
          name: "View",
          id: "AdminPlanRentalView"
        },
        {
          name: "Add",
          id: "AdminPlanRentalAdd"
        },
        {
          name: "Transactions",
          id: "AdminPlanRentalTransactions"
        }
      ]
    };
  },

  methods: {
    changeTab(id, index) {
      this.selectedIndex = index;
      this.currentTab = id;
    }
  },

  computed: {
    currentIndex() {
      return this.selectedIndex;
    },

    currentTabComponent() {
      if (this.currentTab) {
        return () => import(`@/components/admin/${this.currentTab}.vue`);
      }
      return () => import(`@/components/admin/${this.currentTab}.vue`);
    }
  }
};
</script>

<style scoped>
/* nav {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  background-color: var(--myyinvest-white);
}

nav {
  position: sticky;
  position: -webkit-sticky;
  top: -10px !important;
}

nav div {
  width: calc(100% / 3);
  margin: 10px 0;
  padding: 5px;
  color: gray;
  font-size: var(--font-lg);
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: all 0.25s ease;
}

nav div:hover {
  border-color: gray;
  cursor: pointer;
}

.main-content {
  width: calc(100% - 4px) !important;
  margin: auto auto var(--base-size);
} */

.is-active {
  color: var(--myyinvest-red);
  border-color: var(--myyinvest-red);
}
</style>
