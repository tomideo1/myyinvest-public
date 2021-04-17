<template>
  <div>
    <div class="main-content">
      <section class="table content-titles">
        <div class="sn">S/N</div>
        <div class="date">Date</div>
        <div class="plan">Plan</div>
        <div class="period">Holding Period</div>
        <div class="tokens">Tokens</div>
        <div class="cost">Investment Cost</div>
        <div class="frequency">Payment Frequency</div>
        <div class="duration">Payment Duration</div>
      </section>

      <section class="table contents" v-for="x in 10" :key="x">
        <div class="sn">{{ formatNum(x) }}</div>
        <div class="date">Date</div>
        <div class="plan">Plan</div>
        <div class="period">Holding Period</div>
        <div class="tokens">Tokens</div>
        <div class="cost">Investment Cost</div>
        <div class="frequency">Payment Frequency</div>
        <div class="duration">Payment Duration</div>
      </section>
    </div>

    <base-pagination :currentPage="currentPage" />
  </div>
</template>

<script>
import BasePagination from "@/components/admin/BasePagination.vue";

export default {
  name: "AdminTransactions",

  metaInfo: {
    title: "Myyinvest - Transactions (Admin)",
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
.title-area {
  color: var(--myyinvest-red);
  font-weight: 600;
  text-align: center;
}

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

section div.frequency,
section div.plan {
  width: 16%;
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
