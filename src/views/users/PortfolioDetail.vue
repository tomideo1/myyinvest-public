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
            <div :class="['trans__head', { 'trans__head--mbl-hide': isTableToggled }]">date</div>
            <div :class="['trans__head', { 'trans__head--mbl-hide': isTableToggled }]">project</div>
            <div :class="['trans__head', { 'trans__head--mbl-hide': isTableToggled }]">amount</div>
            <div :class="['trans__head', 'trans__head--md', { 'trans__head--mbl-hide': isTableToggled }]">tokens</div>
            <div :class="['trans__head', ' trans__head--md', { 'trans__head--mbl-hide': !isTableToggled }]">ROI</div>
            <div :class="['trans__head', { 'trans__head--mbl-hide': !isTableToggled }]">start date</div>
            <div :class="['trans__head', { 'trans__head--mbl-hide': !isTableToggled }]">end date</div>
            <div :class="['trans__head', 'trans__head--sm', { 'trans__head--mbl-hide': !isTableToggled }]"></div>
            <div :class="['trans__caret', { 'trans__caret--hidden': isTableToggled }]" @click="toggleTable">
              <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.0058 10.0158C0.874192 10.0166 0.743729 9.99133 0.621892 9.94157C0.500054 9.89181 0.389238 9.81848 0.295798 9.7258C0.20207 9.63283 0.127676 9.52223 0.0769072 9.40038C0.0261385 9.27852 0 9.14781 0 9.0158C0 8.88379 0.0261385 8.75308 0.0769072 8.63122C0.127676 8.50936 0.20207 8.39876 0.295798 8.3058L3.6058 5.0158L0.425798 1.7058C0.239547 1.51844 0.135006 1.26498 0.135006 1.0008C0.135006 0.736612 0.239547 0.483161 0.425798 0.295798C0.518761 0.20207 0.629362 0.127675 0.751222 0.0769067C0.873081 0.026138 1.00379 0 1.1358 0C1.26781 0 1.39852 0.026138 1.52038 0.0769067C1.64223 0.127675 1.75284 0.20207 1.8458 0.295798L5.7058 4.2958C5.88903 4.48273 5.99166 4.73405 5.99166 4.9958C5.99166 5.25755 5.88903 5.50887 5.7058 5.6958L1.7058 9.6958C1.61604 9.79273 1.50797 9.87092 1.38782 9.92584C1.26767 9.98077 1.13783 10.0113 1.0058 10.0158Z"
                  fill="#C10000"
                />
              </svg>
            </div>
            <div :class="['trans__caret', 'trans__caret--left', { 'trans__caret--hidden': !isTableToggled }]" @click="toggleTable">
              <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.98639 10.0158C5.118 10.0166 5.24846 9.99133 5.3703 9.94157C5.49213 9.89181 5.60295 9.81848 5.69639 9.7258C5.79012 9.63283 5.86451 9.52223 5.91528 9.40038C5.96605 9.27852 5.99219 9.14781 5.99219 9.0158C5.99219 8.88379 5.96605 8.75308 5.91528 8.63122C5.86451 8.50936 5.79012 8.39876 5.69639 8.3058L2.38639 5.0158L5.56639 1.7058C5.75264 1.51844 5.85718 1.26498 5.85718 1.0008C5.85718 0.736612 5.75264 0.483161 5.56639 0.295798C5.47343 0.20207 5.36283 0.127675 5.24097 0.0769067C5.11911 0.026138 4.9884 0 4.85639 0C4.72438 0 4.59367 0.026138 4.47181 0.0769067C4.34995 0.127675 4.23935 0.20207 4.14639 0.295798L0.286389 4.2958C0.103162 4.48273 0.00053215 4.73405 0.00053215 4.9958C0.00053215 5.25755 0.103162 5.50887 0.286389 5.6958L4.28639 9.6958C4.37615 9.79273 4.48422 9.87092 4.60437 9.92584C4.72452 9.98077 4.85436 10.0113 4.98639 10.0158Z"
                  fill="#C10000"
                />
              </svg>
            </div>
          </div>
          <PlanTransaction v-for="i in 7" :key="i" @display-popup="isModalVisible = true" :is-toggled="isTableToggled" />
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
            <div :class="['trans__caret', { 'trans__caret--hidden': isTableToggled }]" @click="toggleTable">
              <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.0058 10.0158C0.874192 10.0166 0.743729 9.99133 0.621892 9.94157C0.500054 9.89181 0.389238 9.81848 0.295798 9.7258C0.20207 9.63283 0.127676 9.52223 0.0769072 9.40038C0.0261385 9.27852 0 9.14781 0 9.0158C0 8.88379 0.0261385 8.75308 0.0769072 8.63122C0.127676 8.50936 0.20207 8.39876 0.295798 8.3058L3.6058 5.0158L0.425798 1.7058C0.239547 1.51844 0.135006 1.26498 0.135006 1.0008C0.135006 0.736612 0.239547 0.483161 0.425798 0.295798C0.518761 0.20207 0.629362 0.127675 0.751222 0.0769067C0.873081 0.026138 1.00379 0 1.1358 0C1.26781 0 1.39852 0.026138 1.52038 0.0769067C1.64223 0.127675 1.75284 0.20207 1.8458 0.295798L5.7058 4.2958C5.88903 4.48273 5.99166 4.73405 5.99166 4.9958C5.99166 5.25755 5.88903 5.50887 5.7058 5.6958L1.7058 9.6958C1.61604 9.79273 1.50797 9.87092 1.38782 9.92584C1.26767 9.98077 1.13783 10.0113 1.0058 10.0158Z"
                  fill="#C10000"
                />
              </svg>
            </div>
            <div :class="['trans__caret', 'trans__caret--left', { 'trans__caret--hidden': !isTableToggled }]" @click="toggleTable">
              <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.98639 10.0158C5.118 10.0166 5.24846 9.99133 5.3703 9.94157C5.49213 9.89181 5.60295 9.81848 5.69639 9.7258C5.79012 9.63283 5.86451 9.52223 5.91528 9.40038C5.96605 9.27852 5.99219 9.14781 5.99219 9.0158C5.99219 8.88379 5.96605 8.75308 5.91528 8.63122C5.86451 8.50936 5.79012 8.39876 5.69639 8.3058L2.38639 5.0158L5.56639 1.7058C5.75264 1.51844 5.85718 1.26498 5.85718 1.0008C5.85718 0.736612 5.75264 0.483161 5.56639 0.295798C5.47343 0.20207 5.36283 0.127675 5.24097 0.0769067C5.11911 0.026138 4.9884 0 4.85639 0C4.72438 0 4.59367 0.026138 4.47181 0.0769067C4.34995 0.127675 4.23935 0.20207 4.14639 0.295798L0.286389 4.2958C0.103162 4.48273 0.00053215 4.73405 0.00053215 4.9958C0.00053215 5.25755 0.103162 5.50887 0.286389 5.6958L4.28639 9.6958C4.37615 9.79273 4.48422 9.87092 4.60437 9.92584C4.72452 9.98077 4.85436 10.0113 4.98639 10.0158Z"
                  fill="#C10000"
                />
              </svg>
            </div>
          </div>
          <PlanTransaction v-for="i in 7" :key="i" @display-popup="isModalVisible = true" :is-toggled="isTableToggled" />
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
            <div :class="['trans__caret', { 'trans__caret--hidden': isTableToggled }]" @click="toggleTable">
              <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.0058 10.0158C0.874192 10.0166 0.743729 9.99133 0.621892 9.94157C0.500054 9.89181 0.389238 9.81848 0.295798 9.7258C0.20207 9.63283 0.127676 9.52223 0.0769072 9.40038C0.0261385 9.27852 0 9.14781 0 9.0158C0 8.88379 0.0261385 8.75308 0.0769072 8.63122C0.127676 8.50936 0.20207 8.39876 0.295798 8.3058L3.6058 5.0158L0.425798 1.7058C0.239547 1.51844 0.135006 1.26498 0.135006 1.0008C0.135006 0.736612 0.239547 0.483161 0.425798 0.295798C0.518761 0.20207 0.629362 0.127675 0.751222 0.0769067C0.873081 0.026138 1.00379 0 1.1358 0C1.26781 0 1.39852 0.026138 1.52038 0.0769067C1.64223 0.127675 1.75284 0.20207 1.8458 0.295798L5.7058 4.2958C5.88903 4.48273 5.99166 4.73405 5.99166 4.9958C5.99166 5.25755 5.88903 5.50887 5.7058 5.6958L1.7058 9.6958C1.61604 9.79273 1.50797 9.87092 1.38782 9.92584C1.26767 9.98077 1.13783 10.0113 1.0058 10.0158Z"
                  fill="#C10000"
                />
              </svg>
            </div>
            <div :class="['trans__caret', 'trans__caret--left', { 'trans__caret--hidden': !isTableToggled }]" @click="toggleTable">
              <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.98639 10.0158C5.118 10.0166 5.24846 9.99133 5.3703 9.94157C5.49213 9.89181 5.60295 9.81848 5.69639 9.7258C5.79012 9.63283 5.86451 9.52223 5.91528 9.40038C5.96605 9.27852 5.99219 9.14781 5.99219 9.0158C5.99219 8.88379 5.96605 8.75308 5.91528 8.63122C5.86451 8.50936 5.79012 8.39876 5.69639 8.3058L2.38639 5.0158L5.56639 1.7058C5.75264 1.51844 5.85718 1.26498 5.85718 1.0008C5.85718 0.736612 5.75264 0.483161 5.56639 0.295798C5.47343 0.20207 5.36283 0.127675 5.24097 0.0769067C5.11911 0.026138 4.9884 0 4.85639 0C4.72438 0 4.59367 0.026138 4.47181 0.0769067C4.34995 0.127675 4.23935 0.20207 4.14639 0.295798L0.286389 4.2958C0.103162 4.48273 0.00053215 4.73405 0.00053215 4.9958C0.00053215 5.25755 0.103162 5.50887 0.286389 5.6958L4.28639 9.6958C4.37615 9.79273 4.48422 9.87092 4.60437 9.92584C4.72452 9.98077 4.85436 10.0113 4.98639 10.0158Z"
                  fill="#C10000"
                />
              </svg>
            </div>
          </div>
          <PlanTransaction v-for="i in 7" :key="i" @display-popup="isModalVisible = true" :is-toggled="isTableToggled" />
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
  }
};
</script>
