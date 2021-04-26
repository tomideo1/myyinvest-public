<template>
  <div class="inv-plan__summary">
    <div class="inv-smry">
      <span class="inv-smry__title">Accumulated Earnings</span>
      <p class="inv-smry__value inv-smry__value--green">N{{ earnings.toLocaleString() }}</p>
    </div>
    <div class="inv-smry">
      <span class="inv-smry__title">Capital Invested</span>
      <p class="inv-smry__value">{{ capital }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanSummary",
  props: {
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
