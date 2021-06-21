<template>
  <div class="portfolio-container">
    <div class="inv-plan" v-if="getRouteSlug === 'income-plan'">
      <PlanHeader title="income plan" :show-summary="false" />
      <div class="inv-plan__content">
        <div class="inv-plan__graph-container">
          <PlanSummary :earnings="10416" :capital="0.26" />
          <BarChart :chartdata="chartData" :options="options" :styles="myStyles" />
        </div>
        <div class="trans inv-trans">
          <div class="trans__row inv-trans__heading">
            <div :class="['trans__head', { 'trans__head--mbl-hide': isTableToggled }]">date</div>
            <div :class="['trans__head', { 'trans__head--mbl-hide': isTableToggled }]">project</div>
            <div :class="['trans__head', { 'trans__head--mbl-hide': isTableToggled }]">amount</div>
            <div :class="['trans__head', 'trans__head--md', { 'trans__head--mbl-hide': isTableToggled }]">tokens</div>
            <div :class="['trans__head', ' trans__head--md', { 'trans__head--mbl-hide': !isTableToggled }]">ROI</div>
            <div :class="['trans__head', { 'trans__head--mbl-hide': !isTableToggled }]">start date</div>
            <div :class="['trans__head', { 'trans__head--mbl-hide': !isTableToggled }]">end date</div>
            <div :class="['trans__head', 'trans__head--sm', { 'trans__head--mbl-hide': !isTableToggled }]"></div>
            <!-- eslint-disable-next-line -->
            <MainIcon name="right-caret" :class="['trans__caret', 'trans__caret--right', { 'trans__caret--hidden': isTableToggled }]" @click="toggleTable" />
            <!-- eslint-disable-next-line -->
            <MainIcon name="left-caret" :class="['trans__caret', 'trans__caret--left', { 'trans__caret--hidden': !isTableToggled }]" @click="toggleTable" />
          </div>
          <PlanTransaction v-for="i in 5" :key="i" @display-popup="isModalVisible = true" :is-toggled="isTableToggled" />
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
            <div :class="['trans__head', { 'trans__head--mbl-hide': isTableToggled }]">date</div>
            <div :class="['trans__head', { 'trans__head--mbl-hide': isTableToggled }]">project</div>
            <div :class="['trans__head', { 'trans__head--mbl-hide': isTableToggled }]">amount</div>
            <div :class="['trans__head', 'trans__head--md', { 'trans__head--mbl-hide': isTableToggled }]">tokens</div>
            <div :class="['trans__head', ' trans__head--md', { 'trans__head--mbl-hide': !isTableToggled }]">
              rental income %
            </div>
            <div :class="['trans__head', { 'trans__head--mbl-hide': !isTableToggled }]">start date</div>
            <div :class="['trans__head', { 'trans__head--mbl-hide': !isTableToggled }]">end date</div>
            <div :class="['trans__head', 'trans__head--sm', { 'trans__head--mbl-hide': !isTableToggled }]"></div>
            <!-- eslint-disable-next-line -->
            <MainIcon name="right-caret" :class="['trans__caret', 'trans__caret--right', { 'trans__caret--hidden': isTableToggled }]" @click="toggleTable" />
            <!-- eslint-disable-next-line -->
            <MainIcon name="left-caret" :class="['trans__caret', 'trans__caret--left', { 'trans__caret--hidden': !isTableToggled }]" @click="toggleTable" />
          </div>
          <PlanTransaction v-for="i in 5" :key="i" @display-popup="isModalVisible = true" :is-toggled="isTableToggled" />
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
            <div :class="['trans__head', { 'trans__head--mbl-hide': isTableToggled }]">date</div>
            <div :class="['trans__head', { 'trans__head--mbl-hide': isTableToggled }]">project</div>
            <div :class="['trans__head', { 'trans__head--mbl-hide': isTableToggled }]">amount</div>
            <div :class="['trans__head', 'trans__head--md', { 'trans__head--mbl-hide': isTableToggled }]">tokens</div>
            <div :class="['trans__head', ' trans__head--md', { 'trans__head--mbl-hide': !isTableToggled }]">rental income %</div>
            <div :class="['trans__head', { 'trans__head--mbl-hide': !isTableToggled }]">start date</div>
            <div :class="['trans__head', { 'trans__head--mbl-hide': !isTableToggled }]">end date</div>
            <div :class="['trans__head', 'trans__head--sm', { 'trans__head--mbl-hide': !isTableToggled }]"></div>
            <!-- eslint-disable-next-line -->
            <MainIcon name="right-caret" :class="['trans__caret', 'trans__caret--right', { 'trans__caret--hidden': isTableToggled }]" @click="toggleTable" />
            <!-- eslint-disable-next-line -->
            <MainIcon name="left-caret" :class="['trans__caret', 'trans__caret--left', { 'trans__caret--hidden': !isTableToggled }]" @click="toggleTable" />
          </div>
          <PlanTransaction v-for="i in 5" :key="i" @display-popup="isModalVisible = true" :is-toggled="isTableToggled" />
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

    <!-- <Modal :config="{ isVisible: isModalVisible, size: 'md' }" show-cancel @close-modal="isModalVisible = false">
      <div class="inv-modal">
        <div class="inv-modal__data">
          <span>Date</span>
          <span>21st. Jan 2021</span>
        </div>
        <div class="inv-modal__data">
          <span>Purpose</span>
          <span>Project</span>
        </div>
        <div class="inv-modal__data">
          <span>Percentage</span>
          <span>10%</span>
        </div>
        <div class="inv-modal__data">
          <span>Earnings</span>
          <span>N25,000</span>
        </div>
      </div>
    </Modal> -->
    <Modal :config="{ isVisible: isModalVisible, size: 'md' }" show-cancel @close-modal="isModalVisible = false">
      <div class="trans">
        <div class="trans__row">
          <div class="trans__head">Date</div>
          <div class="trans__head">Purpose</div>
          <div class="trans__head">Earnings</div>
        </div>
        <div class="trans__row">
          <div class="trans__data">21st. Jan 2021</div>
          <div class="trans__data">Project</div>
          <div class="trans__data trans__data--red">N25,000</div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import BarChart from "@/components/Shared/charts/BarChart.vue";
import PlanHeader from "@/components/users/portfolio/PlanHeader.vue";
import PlanSummary from "@/components/users/portfolio/PlanSummary.vue";
import PlanTransaction from "@/components/users/portfolio/PlanTransaction.vue";
import Modal from "@/components/Shared/modal.vue";
import MainIcon from "@/components/Shared/mainIcon.vue";
import Api from "@/utils/api.js";

export default {
  name: "PortfolioDetail",
  components: {
    BarChart,
    PlanHeader,
    PlanSummary,
    PlanTransaction,
    Modal,
    MainIcon
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
      isModalVisible: false,
      isTableToggled: false
    };
  },
  methods: {
    toggleTable() {
      this.isTableToggled = !this.isTableToggled;
    }
  },
  computed: {
    getRouteSlug() {
      return this.$route.params.slug;
    }
  },
  async created() {
    const res = await Api.get("portfolio/get", true);
    console.log(res.data);
  }
};
</script>
