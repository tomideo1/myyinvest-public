<template>
  <ListingDetail v-if="getRouteSlug === 'income-plan'" @reset-params="resetIncomeParams">
    <template #title>
      Income Plan
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
          <MainIcon name="caret-right" size="sm" />
        </button>
      </template>
      <template v-if="transactionStep === 2">
        <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack" />
        <p class="lst-modal__title">Payment Frequency</p>
        <div class="lst-modal__input-container">
          <button type="button" :class="getFreqBtnClasses('oneOff')" @click="selectFrequency('oneOff')">
            <span>One Off</span>
            <MainIcon name="tooltip" size="sm" ttpColor="currentColor" />
          </button>
          <button type="button" :class="getFreqBtnClasses('recur')" @click="selectFrequency('recur')">
            <span>Recurring</span>
            <MainIcon name="tooltip" size="sm" ttpColor="currentColor" />
          </button>
        </div>
        <div class="lst-modal__freq-container">
          <p class="lst-modal__freq-text">
            {{ getFreqText }}
          </p>
        </div>
        <button type="button" class="lst-modal__btn" @click="transactionStep++">
          <span>Continue</span>
          <MainIcon name="caret-right" size="sm" />
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
          <MainIcon name="caret-right" size="sm" />
        </button>
      </template>
      <template v-if="transactionStep === 2">
        <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack" />
        <p class="lst-modal__title">Payment Frequency</p>
        <div class="lst-modal__input-container">
          <button type="button" :class="getFreqBtnClasses('oneOff')" @click="selectFrequency('oneOff')">
            <span>One Off</span>
            <MainIcon name="tooltip" size="sm" ttpColor="currentColor" />
          </button>
          <button type="button" :class="getFreqBtnClasses('recur')" @click="selectFrequency('recur')">
            <span>Recurring</span>
            <MainIcon name="tooltip" size="sm" ttpColor="currentColor" />
          </button>
        </div>
        <div class="lst-modal__freq-container">
          <p class="lst-modal__freq-text">
            {{ getFreqText }}
          </p>
        </div>
        <button type="button" class="lst-modal__btn" @click="transactionStep++">
          <span>Continue</span>
          <MainIcon name="caret-right" size="sm" />
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
      // isModalVisible: false,
      tokens: 0,
      transactionStep: 1,
      paymentFreq: "oneOff",
      freqText: {
        oneOff: "This is the smallest amount you can start this plan for and you can always Invest More.",
        recur: "This means that you’re Investing more than Once usually for 6 months to 12 months."
      }
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
      this.paymentFreq = freq;
    },
    isSelected(freq) {
      return this.paymentFreq === freq;
    },
    getFreqBtnClasses(freq) {
      return ["lst-modal__btn", "lst-modal__btn--max", this.isSelected(freq) ? "lst-modal__btn--active" : ""];
    }
  },
  computed: {
    getRouteSlug() {
      return this.$route.params.slug;
    },
    getFreqText() {
      return this.freqText[this.paymentFreq];
    }
  }
};
</script>
