<template>
  <section class="main-wrapper">
    <article class="new-table">
      <!-- <p class="title">Latest Users</p> -->
      <div class="table">
        <div class="table-title table-row">
          <div class="sn">SN</div>
          <div class="fullname">Full Name</div>
          <div class="amount">Amount</div>
          <div class="tokens">Tokens</div>
          <div class="project">Project</div>
          <div class="project-duration">Project Duration</div>
          <div class="payment-frequency">Payment Frequency</div>
          <div class="frequency-duration">Frequency Duration</div>
        </div>
        <div class="table-content table-row" v-for="x in 50" :key="x">
          <div class="sn">{{ formatNum(x) }}</div>
          <div class="fullname">John Doe</div>
          <div class="amount">₦70000</div>
          <div class="tokens">5</div>
          <div class="project">Project {{ x }}</div>
          <div class="project-duration">1 year</div>
          <div class="payment-frequency">Once</div>
          <div class="frequency-duration">Frequency</div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import "@/assets/admin/styles/new-table.css";

export default {
  name: "AdminPlanIncomeTransactions",

  metaInfo: {
    title: "Myyinvest - Plan > Income Transactions (Admin)",
    titleTemplate: null
  }
};
</script>

<style scoped>
.new-table .table-row div {
  width: 14%;
  text-align: center;
}

.table-row div.sn {
  width: 4%;
}

.table-row div.fullname {
  width: 20%;
}

.table-row div.tokens,
.table-row div.project {
  width: 10%;
}
</style>
