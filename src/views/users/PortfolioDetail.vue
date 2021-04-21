<template>
  <div class="portfolio-container">
    <div class="inv-plan" v-if="getRouteSlug === 'income-plan'">
      <p class="inv-plan__title">Income Plan</p>
      <div class="inv-plan__content">
        <div class="inv-plan__graph">
          <BarChart :chartdata="chartData" :options="options" :styles="myStyles" />
        </div>
        <div class="trans inv-trans">
          <div class="trans__row inv-trans__heading">
            <div class="trans__head">date</div>
            <div class="trans__head">project</div>
            <div class="trans__head">amount</div>
            <div class="trans__head trans__head--md">tokens</div>
            <div class="trans__head trans__head--md trans__head--mbl-hide">ROI</div>
            <div class="trans__head trans__head--mbl-hide">start date</div>
            <div class="trans__head trans__head--mbl-hide">end date</div>
            <div class="trans__head trans__head--sm trans__head--mbl-hide"></div>
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
      <div class="inv-plan__header">
        <p class="inv-plan__title">Rental Plan</p>
        <div class="inv-plan__summary inv-plan__summary--mbl-column">
          <div class="inv-smry">
            <span class="inv-smry__title">Accumulated Savings</span>
            <p class="inv-smry__value inv-smry__value--green">N10,416</p>
          </div>
          <div class="inv-smry">
            <span class="inv-smry__title">Capital Invested</span>
            <p class="inv-smry__value">0.20</p>
          </div>
        </div>
      </div>
      <div class="inv-plan__content">
        <div class="trans inv-trans">
          <div class="trans__row inv-trans__heading">
            <div class="trans__head">date</div>
            <div class="trans__head">project</div>
            <div class="trans__head">amount</div>
            <div class="trans__head trans__head--md">tokens</div>
            <div class="trans__head trans__head--md trans__head--mbl-hide">Rental Income %</div>
            <div class="trans__head trans__head--mbl-hide">start date</div>
            <div class="trans__head trans__head--mbl-hide">end date</div>
            <div class="trans__head trans__head--sm trans__head--mbl-hide"></div>
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
      <div class="inv-plan__header">
        <p class="inv-plan__title">Special Plan</p>
        <div class="inv-plan__summary inv-plan__summary--mbl-column">
          <div class="inv-smry">
            <span class="inv-smry__title">Accumulated Savings</span>
            <p class="inv-smry__value inv-smry__value--green">N10,416</p>
          </div>
          <div class="inv-smry">
            <span class="inv-smry__title">Capital Invested</span>
            <p class="inv-smry__value">0.20</p>
          </div>
        </div>
      </div>
      <div class="inv-plan__content">
        <div class="trans inv-trans">
          <div class="trans__row inv-trans__heading">
            <div class="trans__head">date</div>
            <div class="trans__head">project</div>
            <div class="trans__head">amount</div>
            <div class="trans__head trans__head--md">tokens</div>
            <div class="trans__head trans__head--md trans__head--mbl-hide">Rental Income %</div>
            <div class="trans__head trans__head--mbl-hide">start date</div>
            <div class="trans__head trans__head--mbl-hide">end date</div>
            <div class="trans__head trans__head--sm trans__head--mbl-hide"></div>
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
import BarChart from "@/components/Shared/charts/BarChart.vue";
import PlanTransaction from "@/components/PlanTransaction.vue";

export default {
  name: "PortfolioDetail",
  components: {
    BarChart,
    PlanTransaction
  },
  data() {
    return {
      chartData: {
        labels: ["N10,246", "N10,246", "N10,246", "N10,246", "N10,246"],
        datasets: [
          {
            label: "Investment Amount",
            data: [5, 15, 25, 35, 40],
            backgroundColor: "#C10000"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                padding: 10
              }
            }
          ]
        }
      },
      myStyles: {
        // position: "relative",
        width: "100%",
        height: "100%"
      }
    };
  },
  computed: {
    getRouteSlug() {
      return this.$route.params.slug;
    }
  }
};
</script>
