<template>
  <div class="portfolio-container">
    <div class="inv-plan">
      <p class="inv-plan__title">Income Plan</p>
      <div class="inv-plan__content">
        <div class="inv-plan__graph">
          <p>It's a graph</p>
        </div>
        <div class="trans inv-trans">
          <div class="trans__row">
            <div class="trans__head">date</div>
            <div class="trans__head">project</div>
            <div class="trans__head">amount</div>
            <div class="trans__head trans__head--md">tokens</div>
            <div class="trans__head trans__head--sm">ROI</div>
            <div class="trans__head">start date</div>
            <div class="trans__head">end date</div>
          </div>
          <PlanTransaction v-for="i in 7" :key="i" />
          <div class="trans__pagination">
            <button type="button" class="trans__btn trans__btn--lg">Previous</button>
            <button type="button" class="trans__btn" :class="{ 'trans__btn--active': num === 1 }" v-for="num in 4" :key="num">
              {{ num }}
            </button>
            <button type="button" class="trans__btn trans__btn--lg">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlanTransaction from "@/components/PlanTransaction.vue";

export default {
  name: "MyyPortfolio",
  components: {
    PlanTransaction
  }
};
</script>
