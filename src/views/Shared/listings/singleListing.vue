<template>
  <!-- Income plan -->
  <ListingDetail v-if="getRouteSlug === 'income-plan'" @reset-params="resetIncomeParams">
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
          <MainInput type="number" label="Tokens" v-model="tokens" class="lst-modal__input" />
          <MainInput type="number" label="Amount (N)" :disable="true" :value="tokens * 5000" class="lst-modal__input" />
        </div>
        <button type="button" class="lst-modal__btn" :disabled="tokens <= 0" @click="transactionStep++">
          <span>Continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-if="transactionStep === 2">
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
            {{ getFreqText }}
          </p>
          <MainInput v-show="isFreqSelected('recur')" inputType="select" label="Frequency" v-model="freqValue" class="lst-modal__select" :options="freqOptions" />
        </div>
        <button type="button" class="lst-modal__btn" @click="transactionStep++">
          <span>continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-if="transactionStep === 3">
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
          <p class="lst-modal__text">
            {{ getInvPeriodText }}
          </p>
        </div>
        <button type="button" class="lst-modal__btn" @click="transactionStep++">
          <span>continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-if="transactionStep === 4">
        <p class="lst-modal__title">Review Plan</p>
        <div class="lst-review">
          <div class="lst-review__header">
            <span class="lst-review__title">Income Plan</span>
            <div class="lst-review__amount">
              <MainIcon name="naira" size="xs" />
              <span>{{ tokens * 5000 }}</span>
            </div>
            <span class="lst-review__date">by 23rd October, 2021</span>
          </div>
          <div class="lst-review__content">
            <div class="lst-review__data">
              <div class="lst-review__sub-title">Value of Tokens</div>
              <div class="lst-review__value"></div>
            </div>
            <div class="lst-review__data">
              <div class="lst-review__sub-title">Number of Tokens</div>
              <div class="lst-review__value"></div>
            </div>
            <div class="lst-review__data">
              <div class="lst-review__sub-title">Payment Frequency</div>
              <div class="lst-review__value"></div>
            </div>
            <div class="lst-review__data">
              <div class="lst-review__sub-title">
                <span>Holding Period</span>
                <MainIcon name="tooltip" size="xs" />
              </div>
              <div class="lst-review__value"></div>
            </div>
            <div class="lst-review__data">
              <div class="lst-review__sub-title">
                <span>Return on Investment</span>
                <MainIcon name="tooltip" size="xs" />
              </div>
              <div class="lst-review__value"></div>
            </div>
          </div>
        </div>
        <button type="button" class="lst-modal__btn lst-modal__btn--red">
          <span>pay now</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
    </template>
  </ListingDetail>

  <ListingDetail v-else-if="getRouteSlug === 'rental-plan'">
    <template #title>
      Rental Plan
    </template>
    <template #modal-content>
      <template v-if="transactionStep === 1">
        <MainIcon name="tooltip" size="sm" class="lst-modal__top-icon" />
        <p class="lst-modal__title">Income Plan</p>
        <div class="lst-modal__input-container">
          <MainInput type="number" label="Tokens" v-model="tokens" :required="true" />
          <MainInput type="number" label="Amount (N)" :disable="true" :value="tokens * 10000" />
        </div>
        <button type="button" class="lst-modal__btn" :disabled="tokens <= 0" @click="transactionStep++">
          <span>Continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-if="transactionStep === 2">
        <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack" />
        <p class="lst-modal__title">Payment Frequency</p>
        <div class="lst-modal__input-container">
          <button type="button" :class="getFreqBtnClasses('oneOff')" @click="selectFrequency('oneOff')">
            <span>One Off</span>
            <MainIcon name="tooltip" size="sm" color="currentColor" />
          </button>
          <button type="button" :class="getFreqBtnClasses('recur')" @click="selectFrequency('recur')">
            <span>Recurring</span>
            <MainIcon name="tooltip" size="sm" color="currentColor" />
          </button>
        </div>
        <div class="lst-modal__freq-container">
          <p class="lst-modal__freq-text">
            {{ getFreqText }}
          </p>
        </div>
        <button type="button" class="lst-modal__btn" @click="transactionStep++">
          <span>Continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
    </template>
  </ListingDetail>

  <ListingDetail v-else-if="getRouteSlug === 'special-plan'">
    <template #title>
      Special Plan
    </template>
  </ListingDetail>
</template>

<script>
import ListingDetail from "@/components/Shared/listings/ListingDetail.vue";
import MainInput from "@/components/form/mainInput.vue";
import MainIcon from "@/components/Shared/mainIcon.vue";
// import ListingInfoCard from "@/components/ListingInfoCard.vue";

export default {
  name: "singleListing",
  components: {
    ListingDetail,
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
      ]
    };
  },
  methods: {
    resetIncomeParams() {
      console.log("reset");
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
    }
  },
  computed: {
    getRouteSlug() {
      return this.$route.params.slug;
    },
    getFreqText() {
      return this.freqText[this.paymentFrequency];
    },
    getInvPeriodText() {
      return this.invPeriod === 6 ? "Returns: 14% - 28%" : "Returns: 25% - 45%";
    }
  }
};
</script>
