<template>
  <!-- Page for Income Plan -->
  <ListingDetail v-if="routeSlug === 'income-plan'" title="Income Plan" @reset-params="resetParams">
    <template #min-invest>
      5000
    </template>
    <template #modal-content>
      <template v-if="transactionStep === 1">
        <MainIcon name="tooltip" size="sm" class="lst-modal__top-icon" />
        <p class="lst-modal__title">Income Plan</p>
        <div class="lst-modal__input-container">
          <MainInput type="number" label="Tokens" v-model.number="tokens" class="lst-modal__input" />
          <MainInput type="number" label="Amount (N)" :disable="true" :value="amount" class="lst-modal__input" />
        </div>
        <button type="button" class="lst-modal__btn" :disabled="tokens <= 0" @click="next()">
          <span>Continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-else-if="transactionStep === 2">
        <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack()" />
        <p class="lst-modal__title">Payment Frequency</p>
        <div class="lst-modal__input-container">
          <button type="button" :class="getBtnClasses(isFreqSelected('ONE-OFF'))" @click="selectFrequency('ONE-OFF')">
            <span>one off</span>
            <MainIcon name="tooltip" size="sm" color="currentColor" />
          </button>
          <button type="button" :class="getBtnClasses(isFreqSelected('RECURRING'))" @click="selectFrequency('RECURRING')">
            <span>Recurring</span>
            <MainIcon name="tooltip" size="sm" color="currentColor" />
          </button>
        </div>
        <div class="lst-modal__text-container">
          <p class="lst-modal__text">
            {{ getfreqText }}
          </p>
          <!-- eslint-disable-next-line -->
          <MainInput v-show="isFreqSelected('RECURRING')" inputType="select" label="" v-model.number="freqValue" class="lst-modal__select" :options="freqOptions" />
        </div>
        <button type="button" class="lst-modal__btn" @click="next(stepVal)">
          <span>continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-else-if="transactionStep === 2.5">
        <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack(0.5)" />
        <p class="lst-modal__title">Payment Frequency</p>
        <div class="lst-modal__text-container">
          <p class="lst-modal__text lst-modal__text--wgt-600">Choose monthly payment date</p>
          <MainInput inputType="select" label="" class="lst-modal__select" :options="freqOptions" />
        </div>
        <button type="button" class="lst-modal__btn" @click="next(0.5)">
          <span>continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-else-if="transactionStep === 3">
        <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack(stepVal)" />
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
          <p class="lst-modal__text lst-modal__text--wgt-600">Returns: {{ invReturns }}</p>
        </div>
        <button type="button" class="lst-modal__btn" @click="next()">
          <span>continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-else-if="transactionStep === 4">
        <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack()" />
        <p class="lst-modal__title">Review Plan</p>
        <!-- eslint-disable-next-line -->
        <ListingPlanReview title="income plan" :amount="amount" :date="currentDate" :tokens="tokens" :frequency="paymentFrequency" :holPeriod="invPeriod" :invReturns="invReturns" />
        <button type="button" class="lst-modal__btn lst-modal__btn--red" @click="initTransaction">
          <span>pay now</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
    </template>
  </ListingDetail>

  <!-- Page for Rental Plan -->
  <ListingDetail v-else-if="routeSlug === 'rental-plan'" title="Rental Plan">
    <template #modal-content>
      <template v-if="transactionStep === 1">
        <MainIcon name="tooltip" size="sm" class="lst-modal__top-icon" />
        <p class="lst-modal__title">Rental Plan</p>
        <div class="lst-modal__input-container">
          <MainInput type="number" label="Tokens" v-model.number="tokens" class="lst-modal__input" />
          <MainInput type="number" label="Amount (N)" :disable="true" :value="amount" class="lst-modal__input" />
        </div>
        <button type="button" class="lst-modal__btn" :disabled="tokens <= 0" @click="next()">
          <span>Continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-else-if="transactionStep === 2">
        <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack()" />
        <p class="lst-modal__title">Payment Frequency</p>
        <div class="lst-modal__input-container">
          <button type="button" :class="getBtnClasses(isFreqSelected('ONE-OFF'))" @click="selectFrequency('ONE-OFF')">
            <span>one off</span>
            <MainIcon name="tooltip" size="sm" color="currentColor" />
          </button>
          <button type="button" :class="getBtnClasses(isFreqSelected('RECURRING'))" @click="selectFrequency('RECURRING')">
            <span>Recurring</span>
            <MainIcon name="tooltip" size="sm" color="currentColor" />
          </button>
        </div>
        <div class="lst-modal__text-container">
          <p class="lst-modal__text">
            {{ getfreqText }}
          </p>
          <!-- eslint-disable-next-line -->
          <MainInput v-show="isFreqSelected('RECURRING')" inputType="select" label="" v-model.number="freqValue" class="lst-modal__select" :options="freqOptions" />
          <p class="lst-modal__title">Investment Period</p>
          <p class="lst-modal__text">Returns: {{ invReturns }}</p>
        </div>
        <button type="button" class="lst-modal__btn" @click="next(stepVal)">
          <span>continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-else-if="transactionStep === 2.5">
        <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack(0.5)" />
        <p class="lst-modal__title">Payment Frequency</p>
        <div class="lst-modal__text-container">
          <p class="lst-modal__text lst-modal__text--wgt-600">Choose monthly payment date</p>
          <MainInput inputType="select" label="" class="lst-modal__select" :options="freqOptions" />
        </div>
        <button type="button" class="lst-modal__btn" @click="next(0.5)">
          <span>continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-else-if="transactionStep === 3">
        <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack()" />
        <p class="lst-modal__title">Review Plan</p>
        <!-- eslint-disable-next-line -->
        <ListingPlanReview title="rental plan" :amount="amount" :date="currentDate" :tokens="tokens" :frequency="paymentFrequency" :holPeriod="invPeriod" :invReturns="invReturns">
          <template #returns-field>
            Rental Income
          </template>
        </ListingPlanReview>
        <button type="button" class="lst-modal__btn lst-modal__btn--red">
          <span>pay now</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
    </template>
  </ListingDetail>

  <!-- Special Plan -->
  <ListingDetail v-else-if="routeSlug === 'special-plan'" title="Special Plan">
    <template #modal-content>
      <MainIcon name="tooltip" size="sm" class="lst-modal__top-icon" />
      <p class="lst-modal__title">Special Plan</p>
      <div class="lst-modal__input-container">
        <MainInput label="Full Name" class="lst-modal__input" />
        <MainInput label="Email Address" class="lst-modal__input" />
      </div>
      <button type="button" class="lst-modal__btn" @click="next()">
        <span>Continue</span>
        <MainIcon name="caret-right" size="xs" />
      </button>
    </template>
  </ListingDetail>
</template>

<script>
import ListingDetail from "@/components/Shared/listings/ListingDetail.vue";
import ListingPlanReview from "@/components/Shared/listings/ListingPlanReview.vue";
import MainInput from "@/components/form/mainInput.vue";
import MainIcon from "@/components/Shared/mainIcon.vue";
import Api from "@/utils/api.js";

export default {
  name: "singleListing",
  components: {
    ListingDetail,
    ListingPlanReview,
    MainInput,
    MainIcon
  },
  data() {
    return {
      tokens: 0,
      transactionStep: 1,
      freqValue: null,
      paymentFrequency: "ONE-OFF",
      invPeriod: 6,
      freqTexts: {
        "ONE-OFF": "This is the smallest amount you can start this plan for and you can always Invest More.",
        RECURRING: "This means that you’re Investing more than Once usually for 6 months to 12 months."
      },
      freqOptions: [
        { key: "6 months", value: 6 },
        { key: "12 months", value: 12 }
      ],
      plans: {
        "income-plan": {
          name: "INCOME",
          tokenValue: 5000
        },
        "rental-plan": {
          name: "RENTAL",
          tokenValue: 10000
        }
      }
      // using the route slugs as the key
      // tokenValues: {
      //   "income-plan": 5000,
      //   "rental-plan": 10000,
      //   "special-plan": 10000
      // }
    };
  },
  methods: {
    resetParams() {
      console.log("ok");
    },
    goBack(val = 1) {
      this.transactionStep -= val;
    },
    next(val = 1) {
      this.transactionStep += val;
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
    },
    async initTransaction() {
      console.log("ok");
    }
  },
  computed: {
    routeSlug() {
      return this.$route.params.slug;
    },
    getfreqText() {
      return this.freqTexts[this.paymentFrequency];
    },
    invReturns() {
      return this.invPeriod === 6 ? "14% - 28%" : "25% - 45%";
    },
    amount() {
      return this.tokens * this.plans[this.routeSlug].tokenValue;
    },
    currentDate() {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const date = new Date();
      return `${this.getOrdinal(date.getDate())} ${months[date.getMonth()]}, ${date.getFullYear()}`;
    },
    stepVal() {
      return this.isFreqSelected("RECURRING") ? 0.5 : 1;
    }
  },

  async created() {
    const res = await Api.get("portfolio/stats", true);
    console.log(res.data);
  }
};
</script>
