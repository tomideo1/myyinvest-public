<template>
  <section>
    <article class="new-table">
      <p class="title">Special Form</p>
      <div class="table">
        <div class="table-title table-row">
          <div class="sn">SN</div>
          <div class="fullname">Full Name</div>
          <div class="email">Email Address</div>
          <div class="phone">Phone Number</div>
          <div class="interest">Interest</div>
          <div class="frequency-duration">Amount</div>
        </div>
        <div class="table-content table-row" v-for="x in 50" :key="x">
          <div class="sn">{{ formatNum(x) }}</div>
          <div class="fullname">John Doe</div>
          <div class="email">5</div>
          <div class="phone">Phone</div>
          <div class="interest">1</div>
          <div class="amount">Frequency</div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import "@/assets/admin/styles/new-table.css";

export default {
  name: "AdminSpecial",

  metaInfo: {
    title: "Myyinvest - Special (Admin)",
    titleTemplate: null
  }
};
</script>

<style scoped>
.new-table .table-row div {
  width: 17%;
  text-align: center;
}

.table-row div.sn {
  width: 8%;
}

.table-row div.fullname {
  width: 24%;
}
</style>
