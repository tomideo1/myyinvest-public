<template>
  <div>
    <div class="main-content">
      <section class="table content-titles">
        <div class="sn">S/N</div>
        <div class="fullname">Fullname</div>
        <div class="email">Email Address</div>
        <div class="wallet">Wallet Account</div>
      </section>

      <section class="table contents" v-for="x in 10" :key="x">
        <div class="sn">{{ formatNum(x) }}</div>
        <div class="fullname">Fullname</div>
        <div class="email">Email Address</div>
        <div class="wallet">Wallet Account</div>
      </section>
    </div>

    <base-pagination :currentPage="currentPage" />
  </div>
</template>

<script>
import BasePagination from "@/components/admin/BasePagination.vue";

export default {
  name: "AdminFinanceWallet",

  metaInfo: {
    title: "Myyinvest - Wallet Accounts (Admin)",
    titleTemplate: null
  },

  components: { BasePagination },

  data() {
    return {
      currentPage: 1,
      totalpages: 5
    };
  },

  methods: {
    previousPage() {
      if (!this.isFirstPage) {
        this.currentPage--;
      }
    },

    nextPage() {
      if (!this.isLastPage) {
        this.currentPage++;
      }
    }
  },

  computed: {
    isFirstPage() {
      return this.currentPage === 1;
    },

    isLastPage() {
      return this.currentPage === this.totalpages;
    }
  }
};
</script>

<style scoped>
section:not(:first-child) div.investment-cost {
  color: var(--myyinvest-green);
}

section div {
  display: flex;
  justify-content: center;
  width: 19%;
  padding: 2px;
}

section div.sn {
  width: 9%;
}

section div.fullname {
  width: 34%;
}

section div.wallet {
  width: 38%;
}

section:first-child {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background-color: var(--myyinvest-white);
}

section.contents {
  margin-bottom: var(--base-size);
}

section:first-child div {
  color: gray;
  font-weight: 600;
}
</style>
