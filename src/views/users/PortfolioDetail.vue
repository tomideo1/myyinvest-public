<template>
  <div class="portfolio-container">
    <div class="inv-plan" v-if="getRouteSlug === 'income-plan'">
      <p class="inv-plan__title">Income Plan</p>
      <div class="inv-plan__content">
        <div class="inv-plan__graph"></div>
        <div class="trans inv-trans">
          <div class="trans__row inv-trans__heading">
            <div class="trans__head">date</div>
            <div class="trans__head">project</div>
            <div class="trans__head">amount</div>
            <div class="trans__head trans__head--md">tokens</div>
            <div class="trans__head trans__head--md">ROI</div>
            <div class="trans__head">start date</div>
            <div class="trans__head">end date</div>
            <div class="trans__head trans__head--sm"></div>
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

    <div class="inv-plan" v-else-if="getRouteSlug === 'rental-plan'">
      <p class="inv-plan__title">Rental Plan</p>
      <div class="inv-plan__content">
        <div class="trans inv-trans">
          <div class="trans__row inv-trans__heading">
            <div class="trans__head">date</div>
            <div class="trans__head">project</div>
            <div class="trans__head">amount</div>
            <div class="trans__head trans__head--md">tokens</div>
            <div class="trans__head trans__head--md">Rental Income %</div>
            <div class="trans__head">start date</div>
            <div class="trans__head">end date</div>
            <div class="trans__head trans__head--sm"></div>
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

    <div class="inv-plan" v-else-if="getRouteSlug === 'special-plan'">
      <p class="inv-plan__title">Special Plan</p>
      <div class="inv-plan__content">
        <div class="trans inv-trans">
          <div class="trans__row inv-trans__heading">
            <div class="trans__head">date</div>
            <div class="trans__head">project</div>
            <div class="trans__head">amount</div>
            <div class="trans__head trans__head--md">tokens</div>
            <div class="trans__head trans__head--md">Rental Income %</div>
            <div class="trans__head">start date</div>
            <div class="trans__head">end date</div>
            <div class="trans__head trans__head--sm"></div>
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
  name: "PortfolioDetail",
  components: {
    PlanTransaction
  },
  computed: {
    getRouteSlug() {
      return this.$route.params.slug;
    }
  }
};
</script>
