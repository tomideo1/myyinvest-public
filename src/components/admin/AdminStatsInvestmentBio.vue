<template>
  <div>
    <section class="section-wrap" v-for="(info, index) in investmentBioView" :key="index">
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
import investmentBioView from "@/utils/viewUtils/adminStatistics/investmentBioHelper.js";

export default {
  data() {
    return {
      investmentBioView
    };
  }
};
</script>

<style scoped></style>
