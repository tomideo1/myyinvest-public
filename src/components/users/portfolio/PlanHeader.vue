<template>
  <div class="inv-plan__header">
    <p class="inv-plan__title">{{ title }}</p>
    <PlanSummary :earnings="earnings" :capital="capital" />
  </div>
</template>

<script>
import PlanSummary from "./PlanSummary.vue";

export default {
  name: "PlanHeader",
  components: {
    PlanSummary
  },
  props: {
    title: {
      type: String,
      required: true
    },
    earnings: {
      type: Number,
      required: true
    },
    capital: {
      type: Number,
      required: true
    }
  }
};
</script>
