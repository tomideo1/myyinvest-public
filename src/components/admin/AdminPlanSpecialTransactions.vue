<template>
  <section class="main-wrapper">
    <article class="new-table">
      <!-- <p class="title">Latest Users</p> -->
      <div class="table">
        <div class="table-title table-row">
          <div class="sn">SN</div>
          <div class="fullname">Full Name</div>
          <div class="tokens">Tokens</div>
          <div class="plan">Plan</div>
          <div class="project">Project</div>
        </div>
        <div class="table-content table-row" v-for="x in 50" :key="x">
          <div class="sn">{{ formatNum(x) }}</div>
          <div class="fullname">John Doe</div>
          <div class="tokens">5</div>
          <div class="plan">Plan {{ x }}</div>
          <div class="project">Project {{ x }}</div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import "@/assets/admin/styles/new-table.css";

export default {
  name: "AdminPlanSpecialTransaction",

  metaInfo: {
    title: "Myyinvest - Plan > Transaction Special (Admin)",
    titleTemplate: null
  }
};
</script>

<style scoped>
.new-table .table-row div {
  width: 23%;
  text-align: center;
}

.table-row div.sn {
  width: 10%;
}

.table-row div.fullname {
  width: 30%;
}

.table-row div.tokens {
  width: 14%;
}
</style>
