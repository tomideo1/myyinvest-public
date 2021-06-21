<template>
  <!-- <ListingDetail
    :title="plans[routeSlug].title"
    :minInvest="getSingleListing.minimumInvestment"
    :returns="getSingleListing.returnsRange"
    :ownPeriod="getSingleListing.periodRange"
    :imageSrc="getSingleListing.image"
    :is-modal-visible="isModalVisible"
    @show-modal="showModal"
    @close-modal="closeModal"
  > -->
  <ListingDetail
    :title="listingPlan.title"
    :minInvest="listingPlan.minInvest"
    :returns="listingPlan.returns"
    :invPurpose="listingPlan.purpose"
    :planDetails="listingPlan.details"
    :periodType="listingPlan.periodType"
    :imageSrc="getListingPlanImage"
    :is-modal-visible="isModalVisible"
    @show-modal="showModal"
    @close-modal="closeModal"
  >
    <template #modal-content>
      <template v-if="transactionStep === 1">
        <MainIcon name="tooltip" size="sm" class="lst-modal__top-icon" />
        <p class="lst-modal__title">Plan Name</p>
        <div class="lst-modal__text-container">
          <p class="lst-modal__text lst-modal__text--wgt-600">
            Give this plan a creative name or purpose e.g. Road to new House, To buy new phone
          </p>
          <MainInput name="planname" label="" class="lst-modal__input lst-modal__input--mw-lg" v-model="invPurpose" />
        </div>
        <button type="button" class="lst-modal__btn" @click="next()">
          <span>continue</span>
          <MainIcon name="caret-right" size="xs" />
        </button>
      </template>

      <!-- Income Plan -->
      <template v-if="routeSlug === 'income-plan'">
        <template v-if="transactionStep === 2">
          <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack()" />
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
        <template v-else-if="transactionStep === 3">
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
            <MainInput v-show="isFreqSelected('RECURRING')" inputType="select" label="" v-model="freqValue" class="lst-modal__input" :options="freqOptions" />
          </div>
          <button type="button" class="lst-modal__btn" @click="next(stepVal)">
            <span>continue</span>
            <MainIcon name="caret-right" size="xs" />
          </button>
        </template>
        <template v-else-if="transactionStep === 3.5">
          <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack(0.5)" />
          <p class="lst-modal__title">Payment Frequency</p>
          <div class="lst-modal__text-container">
            <p class="lst-modal__text lst-modal__text--wgt-600">Choose monthly payment date</p>
            <MainInput v-model="monthlyValue" inputType="select" label="" class="lst-modal__input" :options="monthlyOptions" />
          </div>
          <button type="button" class="lst-modal__btn" @click="next(0.5)">
            <span>continue</span>
            <MainIcon name="caret-right" size="xs" />
          </button>
        </template>
        <template v-else-if="transactionStep === 4">
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
        <template v-else-if="transactionStep === 5">
          <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack()" />
          <p class="lst-modal__title">Review Plan</p>
          <!-- eslint-disable-next-line -->
          <ListingPlanReview title="income plan" :amount="amount" :date="currentDate" :tokens="tokens" :frequency="paymentFrequency" :ownPeriod="invPeriod" :invReturns="invReturns" />
          <button type="button" class="lst-modal__btn lst-modal__btn--red" @click="initializeTransaction">
            <span>pay now</span>
            <MainIcon name="caret-right" size="xs" />
          </button>
        </template>
      </template>

      <!-- Rental Plan -->
      <template v-else-if="routeSlug === 'rental-plan'">
        <template v-if="transactionStep === 2">
          <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack()" />
          <p class="lst-modal__title">Rental Plan</p>
          <div class="lst-modal__input-container">
            <MainInput type="number" label="Tokens" v-model="tokens" class="lst-modal__input" />
            <MainInput type="number" label="Amount (N)" :disable="true" :value="amount" class="lst-modal__input" />
          </div>
          <button type="button" class="lst-modal__btn" :disabled="!isTokensAvailable" @click="next()">
            <span>Continue</span>
            <MainIcon name="caret-right" size="xs" />
          </button>
        </template>
        <template v-else-if="transactionStep === 3">
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
            <MainInput v-show="isFreqSelected('RECURRING')" inputType="select" label="" v-model="freqValue" class="lst-modal__input" :options="freqOptions" />
            <p class="lst-modal__title">Investment Period</p>
            <p class="lst-modal__text lst-modal__text--lg">10 - 15 years</p>
            <p class="lst-modal__text">Returns: {{ invReturns }}</p>
          </div>
          <button type="button" class="lst-modal__btn" @click="next(stepVal)">
            <span>continue</span>
            <MainIcon name="caret-right" size="xs" />
          </button>
        </template>
        <template v-else-if="transactionStep === 3.5">
          <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack(0.5)" />
          <p class="lst-modal__title">Payment Frequency</p>
          <div class="lst-modal__text-container">
            <p class="lst-modal__text lst-modal__text--wgt-600">Choose monthly payment date</p>
            <MainInput v-model="monthlyValue" inputType="select" label="" class="lst-modal__input" :options="monthlyOptions" />
          </div>
          <button type="button" class="lst-modal__btn" @click="next(0.5)">
            <span>continue</span>
            <MainIcon name="caret-right" size="xs" />
          </button>
        </template>
        <template v-else-if="transactionStep === 4">
          <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack()" />
          <p class="lst-modal__title">Review Plan</p>
          <!-- eslint-disable-next-line -->
          <ListingPlanReview title="rental plan" :amount="amount" :date="currentDate" :tokens="tokens" :frequency="paymentFrequency" :ownPeriod="invPeriod" :invReturns="invReturns">
            <template #returns-field>
              Rental Income
            </template>
          </ListingPlanReview>
          <button type="button" class="lst-modal__btn lst-modal__btn--red" @click="initializeTransaction">
            <span>pay now</span>
            <MainIcon name="caret-right" size="xs" />
          </button>
        </template>
      </template>

      <!-- Special Plan -->
      <template v-else-if="routeSlug === 'special-plan'">
        <template v-if="transactionStep === 2">
          <MainIcon name="back-caret" size="xl" class="lst-modal__top-icon" @click="goBack()" />
          <p class="lst-modal__title">Special Plan</p>
          <div class="lst-modal__input-container">
            <MainInput v-model="special.fullName" name="fullname" label="Full Name" class="lst-modal__input" />
            <MainInput v-model="special.email" name="email" label="Email Address" class="lst-modal__input" />
            <MainInput v-model="special.phoneNumber" name="phonenumber" label="Phone Number" class="lst-modal__input" />
            <MainInput v-model="special.interest" inputType="select" label="Interest" class="lst-modal__input" :options="interestType" />
            <MainInput v-model="special.address" name="address" inputType="textarea" label="Address" class="lst-modal__input" />
            <MainInput v-model="special.amount" name="amount" type="number" label="Amount" class="lst-modal__input" />
          </div>
          <button type="button" class="lst-modal__btn" @click="specialPlanAction">
            <span>Continue</span>
            <MainIcon name="caret-right" size="xs" />
          </button>
        </template>
      </template>
    </template>
  </ListingDetail>
</template>

<script>
import ListingDetail from "@/components/Shared/listings/ListingDetail.vue";
import ListingPlanReview from "@/components/Shared/listings/ListingPlanReview.vue";
import MainInput from "@/components/form/mainInput.vue";
import MainIcon from "@/components/Shared/mainIcon.vue";
import listingPlans from "@/components/data/listingPlans.js";
import { mapActions, mapGetters } from "vuex";

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
      monthlyValue: "",
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
      listingPlans: {},
      interestType: [
        { key: "Income", value: "income" },
        { key: "Rental", value: "rental" },
        { key: "Both", value: "both" }
      ],
      special: {
        fullName: "",
        email: "",
        phoneNumber: "",
        interest: "",
        address: "",
        amount: 0
      },
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
    async initializeTransaction() {
      const payload = {
        purpose: this.invPurpose,
        planName: this.listingPlan.name,
        noTokens: this.tokens,
        invPeriod: this.invPeriod,
        paymentFrequency: this.paymentFrequency
      };
      this.closeModal();
      const res = await this.initTransaction(payload);
      window.open(res.data.url);
    },
    specialPlanAction() {
      this.closeModal();
      this.handleNotify({
        message: "Thank You for filling, an investment advisor would contact you shortly",
        status: "Success"
      });
    },
    resetParams() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.listingPlans = listingPlans;
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
    ...mapGetters(["getSingleListing"]),
    routeSlug() {
      return this.$route.params.slug;
    },
    listingPlan() {
      return this.listingPlans[this.routeSlug];
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
      // return this.tokens * this.getSingleListing.minimumInvestment;
      return this.tokens * this.listingPlan.minInvest;
    },
    currentDate() {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const date = new Date();
      return `${this.getOrdinal(date.getDate())} ${months[date.getMonth()]}, ${date.getFullYear()}`;
    },
    stepVal() {
      return this.isFreqSelected("RECURRING") ? 0.5 : 1;
    },
    getListingPlanImage() {
      return this.getSingleListing.image || "https://res.cloudinary.com/dwpu7jpku/image/upload/v1612297295/listings_mfl4io.png";
    }
  },
  created() {
    this.listingPlans = listingPlans;
    if (this.routeSlug !== "special-plan") {
      this.findSingleListing(this.listingPlan.name);
    }
  }
  // mounted() {
  //   console.log(this.getSingleListing);
  // }
};
</script>
