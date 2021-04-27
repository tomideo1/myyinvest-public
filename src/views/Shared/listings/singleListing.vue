<template>
  <!-- Income plan -->
  <ListingDetail v-if="routeSlug === 'income-plan'" @reset-params="resetParams">
    <template #title>
      Income Plan
    </template>
    <template #modal-content>
      <template v-if="transactionStep > 1">
        <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack" />
      </template>
      <template v-if="transactionStep === 1">
        <MainIcon name="tooltip" size="sm" class="lst-modal__top-icon" />
        <p class="lst-modal__title">Income Plan</p>
        <div class="lst-modal__input-container">
          <MainInput type="number" label="Tokens" v-model.number="tokens" class="lst-modal__input" />
          <MainInput type="number" label="Amount (N)" :disable="true" :value="amount" class="lst-modal__input" />
        </div>
        <button type="button" class="lst-modal__btn" :disabled="tokens <= 0" @click="transactionStep++">
          <span>Continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-else-if="transactionStep === 2">
        <p class="lst-modal__title">Payment Frequency</p>
        <div class="lst-modal__input-container">
          <button type="button" :class="getBtnClasses(isFreqSelected('oneOff'))" @click="selectFrequency('oneOff')">
            <span>one off</span>
            <MainIcon name="tooltip" size="sm" color="currentColor" />
          </button>
          <button type="button" :class="getBtnClasses(isFreqSelected('recur'))" @click="selectFrequency('recur')">
            <span>Recurring</span>
            <MainIcon name="tooltip" size="sm" color="currentColor" />
          </button>
        </div>
        <div class="lst-modal__text-container">
          <p class="lst-modal__text">
            {{ freqTextValue }}
          </p>
          <MainInput v-show="isFreqSelected('recur')" inputType="select" label="Frequency" v-model="freqValue" class="lst-modal__select" :options="freqOptions" />
        </div>
        <button type="button" class="lst-modal__btn" @click="transactionStep++">
          <span>continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-else-if="transactionStep === 3">
        <p class="lst-modal__title">Investment Period</p>
        <div class="lst-modal__input-container">
          <button type="button" :class="getBtnClasses(isInvPeriodSelected(6))" @click="selectInvPeriod(6)">
            6 months
          </button>
          <button type="button" :class="getBtnClasses(isInvPeriodSelected(12))" @click="selectInvPeriod(12)">
            12 months
          </button>
        </div>
        <div class="lst-modal__text-container">
          <p class="lst-modal__text">Returns: {{ invReturns }}</p>
        </div>
        <button type="button" class="lst-modal__btn" @click="transactionStep++">
          <span>continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-else-if="transactionStep === 4">
        <p class="lst-modal__title">Review Plan</p>
        <!-- eslint-disable-next-line -->
        <ListingPlanReview title="income plan" :amount="amount" :date="currentDate" :tokens="tokens" :frequency="getPaymentFrequency" holPeriod="6months" :invReturns="invReturns" />
        <button type="button" class="lst-modal__btn lst-modal__btn--red">
          <span>pay now</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
    </template>
  </ListingDetail>

  <ListingDetail v-else-if="routeSlug === 'rental-plan'">
    <template #title>
      Rental Plan
    </template>
    <template #modal-content>
      <template v-if="transactionStep > 1">
        <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack" />
      </template>
      <template v-if="transactionStep === 1">
        <MainIcon name="tooltip" size="sm" class="lst-modal__top-icon" />
        <p class="lst-modal__title">Rental Plan</p>
        <div class="lst-modal__input-container">
          <MainInput type="number" label="Tokens" v-model.number="tokens" class="lst-modal__input" />
          <MainInput type="number" label="Amount (N)" :disable="true" :value="amount" class="lst-modal__input" />
        </div>
        <button type="button" class="lst-modal__btn" :disabled="tokens <= 0" @click="transactionStep++">
          <span>Continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-else-if="transactionStep === 2">
        <p class="lst-modal__title">Payment Frequency</p>
        <div class="lst-modal__input-container">
          <button type="button" :class="getBtnClasses(isFreqSelected('oneOff'))" @click="selectFrequency('oneOff')">
            <span>one off</span>
            <MainIcon name="tooltip" size="sm" color="currentColor" />
          </button>
          <button type="button" :class="getBtnClasses(isFreqSelected('recur'))" @click="selectFrequency('recur')">
            <span>Recurring</span>
            <MainIcon name="tooltip" size="sm" color="currentColor" />
          </button>
        </div>
        <div class="lst-modal__text-container">
          <p class="lst-modal__text">
            {{ freqTextValue }}
          </p>
          <MainInput v-show="isFreqSelected('recur')" inputType="select" label="Frequency" v-model="freqValue" class="lst-modal__select" :options="freqOptions" />
        </div>
        <button type="button" class="lst-modal__btn" @click="transactionStep++">
          <span>continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-else-if="transactionStep === 3">
        <p class="lst-modal__title">Investment Period</p>
        <div class="lst-modal__input-container">
          <button type="button" :class="getBtnClasses(isInvPeriodSelected(6))" @click="selectInvPeriod(6)">
            6 months
          </button>
          <button type="button" :class="getBtnClasses(isInvPeriodSelected(12))" @click="selectInvPeriod(12)">
            12 months
          </button>
        </div>
        <div class="lst-modal__text-container">
          <p class="lst-modal__text">Returns: {{ invReturns }}</p>
        </div>
        <button type="button" class="lst-modal__btn" @click="transactionStep++">
          <span>continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-else-if="transactionStep === 4">
        <p class="lst-modal__title">Review Plan</p>
        <!-- eslint-disable-next-line -->
        <ListingPlanReview title="rental plan" :amount="amount" :date="currentDate" :tokens="tokens" :frequency="getPaymentFrequency" holPeriod="6months" :invReturns="invReturns" />
        <button type="button" class="lst-modal__btn lst-modal__btn--red">
          <span>pay now</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
    </template>
  </ListingDetail>

  <ListingDetail v-else-if="routeSlug === 'special-plan'">
    <template #title>
      Special Plan
    </template>
  </ListingDetail>
</template>

<script>
import ListingDetail from "@/components/Shared/listings/ListingDetail.vue";
import ListingPlanReview from "@/components/Shared/listings/ListingPlanReview.vue";
import MainInput from "@/components/form/mainInput.vue";
import MainIcon from "@/components/Shared/mainIcon.vue";
// import ListingInfoCard from "@/components/ListingInfoCard.vue";

export default {
  name: "singleListing",
  components: {
    ListingDetail,
    ListingPlanReview,
    MainInput,
    MainIcon
    // ListingInfoCard
  },
  data() {
    return {
      tokens: 0,
      transactionStep: 1,
      freqValue: null,
      paymentFrequency: "oneOff",
      invPeriod: 6,
      freqText: {
        oneOff: "This is the smallest amount you can start this plan for and you can always Invest More.",
        recur: "This means that you’re Investing more than Once usually for 6 months to 12 months."
      },
      freqOptions: [
        { key: "6 months", value: 6 },
        { key: "12 months", value: 12 }
      ],
      // using the route slugs as the key
      tokenValues: {
        "income-plan": 5000,
        "rental-plan": 10000,
        "special-plan": 10000
      }
    };
  },
  methods: {
    resetParams() {
      console.log("ok");
    },
    goBack() {
      this.transactionStep--;
    },
    selectFrequency(freq) {
      this.paymentFrequency = freq;
    },
    selectInvPeriod(period) {
      this.invPeriod = period;
    },
    isFreqSelected(freq) {
      return this.paymentFrequency === freq;
    },
    isInvPeriodSelected(period) {
      return this.invPeriod === period;
    },
    getBtnClasses(isActive) {
      return ["lst-modal__btn", "lst-modal__btn--max", { "lst-modal__btn--active": isActive }];
    },
    getOrdinal(day) {
      const ordinals = ["st", "nd", "rd"];
      const exceptions = [11, 12, 13];
      const num = day % 10;
      return `${day}${num > 3 || exceptions.includes(day) ? "th" : ordinals[num]}`;
    }
  },
  computed: {
    routeSlug() {
      return this.$route.params.slug;
    },
    freqTextValue() {
      return this.freqText[this.paymentFrequency];
    },
    invReturns() {
      return this.invPeriod === 6 ? "14% - 28%" : "25% - 45%";
    },
    amount() {
      return this.tokens * this.tokenValues[this.routeSlug];
    },
    getPaymentFrequency() {
      return this.paymentFrequency === "oneOff" ? "one off" : "recurring";
    },
    currentDate() {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const date = new Date();
      return `${this.getOrdinal(date.getDate())} ${months[date.getMonth()]}, ${date.getFullYear()}`;
    }
  }
};
</script>
