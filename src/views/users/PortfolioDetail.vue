<template>
  <div class="portfolio-container">
    <div class="inv-plan" v-if="getRouteSlug === 'income-plan'">
      <p class="inv-plan__title">Income Plan</p>
      <div class="inv-plan__content">
        <div class="inv-plan__graph-container">
          <PlanSummary :earnings="10416" :capital="0.26" />
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
          <PlanTransaction v-for="i in 7" :key="i" @display-popup="isModalVisible = true" />
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
      <PlanHeader title="rental plan" :earnings="10416" :capital="0.26" />
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
          <PlanTransaction v-for="i in 7" :key="i" @display-popup="isModalVisible = true" />
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
      <PlanHeader title="special plan" :earnings="10416" :capital="0.26" />
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
          <PlanTransaction v-for="i in 7" :key="i" @display-popup="isModalVisible = true" />
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

    <Modal :config="{ isVisible: isModalVisible, size: 'md' }" show-cancel @close-modal="isModalVisible = false">
      <div></div>
    </Modal>
  </div>
</template>

<script>
import BarChart from "@/components/Shared/charts/BarChart.vue";
import PlanHeader from "@/components/users/portfolio/PlanHeader.vue";
import PlanSummary from "@/components/users/portfolio/PlanSummary.vue";
import PlanTransaction from "@/components/users/portfolio/PlanTransaction.vue";
import Modal from "@/components/Shared/modal.vue";

export default {
  name: "PortfolioDetail",
  components: {
    BarChart,
    PlanHeader,
    PlanSummary,
    PlanTransaction,
    Modal
  },
  data() {
    return {
      chartData: {
        labels: ["N10,246", "N10,246", "N10,246", "N10,246", "N10,246", "N10,246"],
        datasets: [
          {
            label: "Investment Amount",
            data: [5, 12, 19, 25, 32, 40],
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
                padding: 5
              }
            }
          ]
        }
      },
      myStyles: {
        // position: "relative",
        width: "100%",
        maxHeight: "24em"
      },
      isModalVisible: false
    };
  },
  computed: {
    getRouteSlug() {
      return this.$route.params.slug;
    }
  }
};
</script>
