<template>
  <div>
    <div class="main-content">
      <section class="table content-titles">
        <div class="sn">S/N</div>
        <div class="fullname">Full Name</div>
        <div class="email">Email Address</div>
        <div class="investment-cost">Investment Cost</div>
        <div class="tokens">Tokens</div>
        <div class="plan">Plan</div>
        <div class="wallet">Wallet Account</div>
        <div class="date">Date</div>
      </section>

      <section class="table contents" v-for="x in 10" :key="x">
        <div class="sn">{{ formatNum(x) }}</div>
        <div class="fullname">Valentine Offiah</div>
        <div class="email">voffiah@gmail.com</div>
        <div class="investment-cost">₦70000</div>
        <div class="tokens">35</div>
        <div class="plan">Cambridge Apartm.</div>
        <div class="wallet">23569765321</div>
        <div class="date">17th Feb. 2021</div>
      </section>
    </div>

    <base-pagination :currentPage="currentPage" />
  </div>
</template>

<script>
import BasePagination from "@/components/admin/BasePagination.vue";

export default {
  name: "AdminFinanceTransactions",

  metaInfo: {
    title: "Myyinvest - Transactions (Admin)",
    titleTemplate: null
  },

  components: { BasePagination },

  data() {
    return {
      // status: "Success",
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
  width: 12%;
  padding: 2px;
}

section div.sn {
  width: 6%;
}

section div.email,
section div.fullname {
  width: 18%;
}

section div.tokens {
  width: 8%;
}

section div.plan {
  width: 14%;
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
