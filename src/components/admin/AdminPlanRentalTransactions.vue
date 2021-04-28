<template>
  <section class="main-wrapper">
    <article class="new-table">
      <!-- <p class="title">Latest Users</p> -->
      <div class="table">
        <div class="table-title table-row">
          <div class="sn">SN</div>
          <div class="fullname">Full Name</div>
          <div class="tokens">Tokens</div>
          <div class="project">Project</div>
          <div class="payment-frequency">Project Duration</div>
          <div class="frequency-duration">Frequency Duration</div>
        </div>
        <div class="table-content table-row" v-for="x in 50" :key="x">
          <div class="sn">{{ formatNum(x) }}</div>
          <div class="fullname">John Doe</div>
          <div class="tokens">5</div>
          <div class="project">Project {{ x }}</div>
          <div class="payment-frequency">1 year</div>
          <div class="frequency-duration">Frequency</div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import "@/assets/admin/styles/new-table.css";

export default {
  name: "AdminPlanRentalTransactions",

  metaInfo: {
    title: "Myyinvest - Plan > Rental Transactions (Admin)",
    titleTemplate: null
  }
};
</script>

<style scoped>
.new-table .table-row div {
  width: 15.5%;
  text-align: center;
}

.table-row div.sn {
  width: 6%;
}

.table-row div.fullname {
  width: 20%;
}

.table-row div.tokens {
  width: 12%;
}
</style>
