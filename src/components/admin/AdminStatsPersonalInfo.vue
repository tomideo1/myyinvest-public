<template>
  <div>
    <section class="section-wrap" v-for="(info, index) in personalInfoView" :key="index">
      <p class="section-title">{{ info.topic }}</p>

      <div class="chart-group" v-for="(detail, index) in info.chart" :key="index">
        <div :class="detail.classname">
          <div class="subject-title">{{ detail.title }}</div>
          <div class="chart" :style="{ width: detail.value + '%' }"></div>
          <div class="value">{{ detail.value }}%</div>
          <div class="value">{{ detail.value * detail.value }}/{{ detail.value * 100 }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import personalInfoView from "@/utils/viewUtils/adminStatistics/personalInfoHelper.js";

export default {
  name: "AdminStatsPersonalInfo",

  metaInfo: {
    title: "Myyinvest - Statistics > Personal Infomation (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      personalInfoView
    };
  }
};
</script>

<style scoped>
.chart-group div {
  /* display: grid; */
  grid-template-columns: 3fr 5fr 1fr 1fr;
  /* width: 60%; */
}
</style>
