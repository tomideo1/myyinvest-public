<template>
  <div>
    <section class="section-wrap">
      <p class="section-title">Total number of investors</p>

      <div class="card-group">
        <div class="investor-card">
          <div class="card-title">Income Plan</div>
          <div class="card-value">5,000</div>
        </div>

        <div class="investor-card">
          <div class="card-title">Rental Plan</div>
          <div class="card-value">10,000</div>
        </div>

        <div class="investor-card">
          <div class="card-title">Total Transactions</div>
          <div class="card-value">10,000</div>
        </div>
      </div>
    </section>
    <section class="section-wrap" v-for="(info, index) in transactionView" :key="index">
      <p class="section-title">{{ info.topic }}</p>

      <div class="chart-group" v-for="(detail, index) in info.chart" :key="index">
        <div :class="detail.classname">
          <div class="subject-title">{{ detail.title }}</div>
          <div class="chart"></div>
          <div class="value">{{ detail.value }}%</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import transactionView from "@/utils/viewUtils/adminStatistics/transactionHelper.js";

export default {
  name: "AdminStatsTransaction",

  metaInfo: {
    title: "Myyinvest - Statistics > Transactions (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      transactionView
    };
  }
};
</script>

<style scoped>
.investor-card {
  width: calc(100% / 4);
}

.investor-card:not(:last-child) {
  margin-right: var(--base-size);
}

.investor-card:hover {
  padding: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  transform: scale(1.02);
  z-index: auto;
  box-shadow: 2px 2px 6px 0 #bebebe, -2px -2px 6px 0 #ffffff;
}

.card-title {
  margin-bottom: 0;
  color: gray;
}

.card-value {
  font-size: var(--font-xxx) !important;
  color: var(--myyinvest-red);
}
</style>
