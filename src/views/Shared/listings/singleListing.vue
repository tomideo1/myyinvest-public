<template>
  <ListingDetail
    :title="plans[routeSlug].title"
    :minInvest="getSingleListing.minimumInvestment"
    :returns="getSingleListing.returnsRange"
    :holPeriod="getSingleListing.periodRange"
    :imageSrc="getSingleListing.image"
    :is-modal-visible="isModalVisible"
    @show-modal="showModal"
    @close-modal="closeModal"
  >
    <!-- Income Plan -->
    <template v-if="routeSlug === 'income-plan'" #modal-content>
      <template v-if="transactionStep === 1">
        <MainIcon name="tooltip" size="sm" class="lst-modal__top-icon" />
        <p class="lst-modal__title">Income Plan</p>
        <div class="lst-modal__input-container">
          <MainInput type="number" label="Tokens" v-model.number="tokens" class="lst-modal__input" />
          <MainInput type="number" label="Amount (N)" :disable="true" :value="amount" class="lst-modal__input" />
        </div>
        <button type="button" class="lst-modal__btn" :disabled="!isTokensAvailable" @click="next()">
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
          <MainInput inputType="select" label="" class="lst-modal__select" :options="monthlyOptions" />
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
        <p class="lst-modal__title">Investment Purpose</p>
        <div class="lst-modal__text-container">
          <p class="lst-modal__text lst-modal__text--wgt-600">Why do you want to invest?</p>
          <MainInput label="" class="lst-modal__input" v-model="invPurpose" />
        </div>
        <button type="button" class="lst-modal__btn" @click="next()">
          <span>continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-else-if="transactionStep === 5">
        <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack()" />
        <p class="lst-modal__title">Review Plan</p>
        <!-- eslint-disable-next-line -->
        <ListingPlanReview title="income plan" :amount="amount" :date="currentDate" :tokens="tokens" :frequency="paymentFrequency" :holPeriod="invPeriod" :invReturns="invReturns" />
        <button type="button" class="lst-modal__btn lst-modal__btn--red" @click="perfTransaction">
          <span>pay now</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
    </template>

    <!-- Rental Plan -->
    <template v-else-if="routeSlug === 'rental-plan'" #modal-content>
      <template v-if="transactionStep === 1">
        <MainIcon name="tooltip" size="sm" class="lst-modal__top-icon" />
        <p class="lst-modal__title">Rental Plan</p>
        <div class="lst-modal__input-container">
          <MainInput type="number" label="Tokens" v-model.number="tokens" class="lst-modal__input" />
          <MainInput type="number" label="Amount (N)" :disable="true" :value="amount" class="lst-modal__input" />
        </div>
        <button type="button" class="lst-modal__btn" :disabled="!isTokensAvailable" @click="next()">
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
          <p class="lst-modal__text lst-modal__text--lg">10 - 15 years</p>
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
          <MainInput inputType="select" label="" class="lst-modal__select" :options="monthlyOptions" />
        </div>
        <button type="button" class="lst-modal__btn" @click="next(0.5)">
          <span>continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>
      <template v-else-if="transactionStep === 3">
        <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack(stepVal)" />
        <p class="lst-modal__title">Investment Purpose</p>
        <div class="lst-modal__text-container">
          <p class="lst-modal__text lst-modal__text--wgt-600">Why do you want to invest?</p>
          <MainInput label="" class="lst-modal__input" v-model="invPurpose" />
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
        <ListingPlanReview title="rental plan" :amount="amount" :date="currentDate" :tokens="tokens" :frequency="paymentFrequency" :holPeriod="invPeriod" :invReturns="invReturns">
          <template #returns-field>
            Rental Income
          </template>
        </ListingPlanReview>
        <paystack
          class="lst-modal__btn lst-modal__btn--red"
          :amount="getKoboAmount"
          :email="email"
          :paystackkey="paystackkey"
          :reference="reference"
          :callback="callback"
          :close="close"
          :embed="false"
        >
          <span>pay now</span>
          <MainIcon name="caret-right" size="xs" />
        </paystack>
      </template>
    </template>

    <!-- Special Plan -->
    <template v-else-if="routeSlug === 'special-plan'" #modal-content>
      <MainIcon name="tooltip" size="sm" class="lst-modal__top-icon" />
      <p class="lst-modal__title">Special Plan</p>
      <div class="lst-modal__input-container">
        <MainInput label="Full Name" class="lst-modal__input" />
        <MainInput label="Email Address" class="lst-modal__input" />
      </div>
      <div class="lst-modal__input-container">
        <MainInput label="Phone Number" class="lst-modal__input" />
        <MainInput inputType="select" label="Interest" class="lst-modal__select" />
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
import paystack from "vue-paystack";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "singleListing",
  components: {
    ListingDetail,
    ListingPlanReview,
    MainInput,
    MainIcon,
    paystack
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
      monthlyOptions: [
        { key: "1st of Every Month", value: "1st" },
        { key: "End of Every Month", value: "end" }
      ],
      invPurpose: "",
      plans: {
        // using the route slugs as the key
        "income-plan": {
          name: "INCOME",
          title: "Income Plan"
          // tokenValue: 5000
        },
        "rental-plan": {
          name: "RENTAL",
          title: "Rental Plan"
          // tokenValue: 10000
        },
        "special-plan": {
          title: "Special Plan"
        }
      },
      paystackkey: process.env.PAYSTACK_KEY,
      email: "",
      isModalVisible: false
    };
  },
  methods: {
    ...mapActions(["initTransaction", "findSingleListing"]),
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
      return `${day}${num > 3 || exceptions.includes(day) ? "th" : ordinals[num - 1]}`;
    },
    async callback(response) {
      console.log(response);
      this.closeModal();
      const payload = {
        purpose: this.invPurpose,
        planName: this.plans[this.routeSlug].planName,
        noTokens: this.tokens,
        invPeriod: this.invPeriod,
        paymentFrequency: this.paymentFrequency
      };
      const res = await this.initTransaction(payload);
      console.log(res.data);
    },
    close() {
      console.log("Payment Closed");
    },
    resetParams() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.resetParams();
    }
  },
  computed: {
    ...mapGetters(["getUser", "getSingleListing"]),
    routeSlug() {
      return this.$route.params.slug;
    },
    isTokensAvailable() {
      return this.tokens > 0 && this.tokens <= this.getSingleListing.availableTokens;
    },
    getfreqText() {
      return this.freqTexts[this.paymentFrequency];
    },
    invReturns() {
      return this.invPeriod === 6 ? "14% - 28%" : "25% - 45%";
    },
    amount() {
      // return this.tokens * this.plans[this.routeSlug].tokenValue;
      return this.tokens * this.getSingleListing.minimumInvestment;
    },
    getKoboAmount() {
      return this.amount * 100;
    },
    currentDate() {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const date = new Date();
      return `${this.getOrdinal(date.getDate())} ${months[date.getMonth()]}, ${date.getFullYear()}`;
    },
    stepVal() {
      return this.isFreqSelected("RECURRING") ? 0.5 : 1;
    },
    reference() {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }
  },
  created() {
    if (this.routeSlug !== "special-plan") {
      this.findSingleListing(this.plans[this.routeSlug].name);
    }
  },
  mounted() {
    this.email = this.getUser.email;
    console.log(this.getSingleListing);
  }
};
</script>
