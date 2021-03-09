<template>
  <div id="msform">
    <ul id="progressbar">
      <li :class="currentStep >= 1 ? 'active' : ''" id="personal"><strong>Personal Details</strong></li>
      <li :class="currentStep >= 2 ? 'active' : ''" id="payment"><strong>Investment Plan</strong></li>
      <li :class="currentStep >= 3 ? 'active' : ''" id="confirm"><strong>Next of Kin</strong></li>
    </ul>
    <!-- fieldsets -->

    <section class="m-lg-5 p-lg-5" v-if="currentStep === 0 || currentStep === 1">
      <main-card class="form-border p-4">
        <div class="container-fluid ">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <main-input class="col-md-12" label="First Name" v-model="profile.firstName" />
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <main-input class="col-md-12" label="Last Name" v-model="profile.lastName" />
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <main-input disable class="col-md-12" label="Email" v-model="profile.email" />
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <main-input
                class="col-md-12 "
                label="Gender"
                inputType="select"
                v-model="profile.gender"
                :options="[
                  { key: 'Male', value: 'male' },
                  { key: 'Female', value: 'female' }
                ]"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <div class=" form__div ">
                <date-picker style=" " prefix-class="xmx" v-model="profile.dob" class="w-75" type="date"></date-picker>
                <!--              <main-input class="col-md-12" label="Date of Birth" v-model="profile.dob" />-->
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-12">
              <main-input
                class="col-md-12"
                label="Marital Status"
                inputType="select"
                v-model="profile.marriageStatus"
                :options="[
                  { key: 'Single', value: 'single' },
                  { key: 'Married', value: 'married' }
                ]"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <main-input class="col-md-12" label="Occupation" v-model="profile.occupation" />
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <main-input class="col-md-12" label="Phone Number" v-model="profile.phoneNumber" />
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <main-input
                class="col-md-12 "
                label="State of origin"
                inputType="select"
                v-model="profile.state"
                :options="[
                  { key: 'Anambra', value: 'Anambra' },
                  { key: 'Lagos', value: 'lagos' }
                ]"
              />
            </div>

            <div class="col-lg-6 col-md-6 col-12">
              <div class="d-flex flex-lg-row flex-column flex-grow-1">
                <main-input class="col-md-9 " label="Bank Verification Number (BVN)" v-model="profile.bvn" />
                <p class="text-danger col-md-3 ft-12 mt-n4 float-right">Why Bvn?</p>
              </div>
            </div>

            <div class="col-lg-12 col-md-12 col-12">
              <main-input class="col-md-12 " placeholder="" label="Address" v-model="profile.homeAddress" />
            </div>
          </div>
        </div>
        <main-button @click="goNext('personal')" :disable="isLoading" :text="continueButtonText" type="filled" class="float-right" />
      </main-card>
    </section>

    <section class="m-lg-5 p-lg-5" v-if="currentStep === 2">
      <main-card class="form-border p-4">
        <div class="container-fluid ">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
              <main-input class="col-md-12" label-type="full" label="What is the Primary Reason you are Interested in Investing with Myyinvest?" input-type="select" v-model="investment.reason" />
            </div>

            <div class="col-lg-12 col-md-12 col-12">
              <main-input class="col-md-12" label-type="full" label="What kind of investor are you?" input-type="select" v-model="investment.investorType" />
            </div>

            <div class="col-lg-12 col-md-12 col-12">
              <main-input class="col-md-12" label-type="full" label="Who advises you on your financial decisions?" input-type="select" v-model="investment.financialDecision" />
            </div>

            <div class="col-lg-12 col-md-12 col-12">
              <main-input class="col-md-12" label-type="full" label="Do you need a financial advisor?" input-type="select" v-model="investment.financialAdvise" />
            </div>

            <div class="col-lg-12 col-md-12 col-12">
              <main-input class="col-md-12" label-type="full" label="What is your monthly income range?" input-type="select" v-model="investment.incomeRange" />
            </div>

            <div class="col-lg-12 col-md-12 col-12">
              <main-input class="col-md-12" label-type="full" label="How much do you want invest in the next 12 Months?" input-type="select" v-model="investment.investmentPeriod" />
            </div>

            <div class="col-lg-12 col-md-12 col-12">
              <main-input class="col-md-12" label-type="full" label="What investment holding period do you prefer? " input-type="select" v-model="investment.investmentHoldingPeriod" />
            </div>
          </div>
        </div>
        <main-button @click="goBack()" text="Back" type="filled" class="float-left" />
        <main-button @click="goNext()" text="Continue" type="filled" class="float-right" />
      </main-card>
    </section>

    <section class="m-lg-5 p-lg-5" v-if="currentStep === 3">
      <main-card class="form-border p-4">
        <div class="container-fluid ">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <main-input class="col-md-12" label="First Name" v-model="kin.firstName" />
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <main-input class="col-md-12" label="Last Name" v-model="kin.lastName" />
            </div>

            <div class="col-lg-6 col-md-6 col-12">
              <main-input class="col-md-12" label="Relationship" v-model="kin.relationship" />
            </div>

            <div class="col-lg-6 col-md-6 col-12">
              <main-input class="col-md-12" label="Phone Number" v-model="kin.phoneNumber" />
            </div>
            <div class="col-lg-12 col-md-12 col-12">
              <main-input class="col-md-12" label="Email" v-model="kin.email" />
            </div>
          </div>
        </div>
        <main-button @click="goBack()" text="Back" type="filled" class="float-left" />
        <main-button @click="goNext()" text="Finish" type="filled" class="float-right" />
      </main-card>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MainCard from "../../components/Shared/mainCard";
import MainInput from "../../components/form/mainInput";
import MainButton from "../../components/form/MainButton";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
// import StepNavigationStep from "../../components/form/multiStep/stepNavigationStep";
export default {
  name: "profile",
  data() {
    return {
      currentStep: 1,
      continueButtonText: "Continue",
      isLoading: false,
      profile: {
        firstName: "",
        lastName: "",
        gender: "",
        phoneNumber: "",
        state: "",
        dob: "",
        marriageStatus: "",
        email: "",
        homeAddress: "",
        bvn: ""
      },

      investment: {
        reason: "",
        investorType: "",
        financialAdvise: "",
        financialDecision: "",
        incomeRange: "",
        investmentPeriod: "",
        investmentHoldingPeriod: ""
      },
      kin: {
        firstName: "",
        lastName: "",
        relationship: "",
        email: "",
        phoneNumber: ""
      },
      steps: [{ label: "one" }, { label: "two" }, { label: "three" }, { label: "complete" }]
    };
  },
  components: { MainButton, MainCard, MainInput, DatePicker },
  methods: {
    ...mapActions(["createNextOfKin", "createInvestmentPlan", "createPersonalDetails"]),
    goNext(type) {
      switch (type) {
        case "personal":
          ++this.currentStep;
      }
    },
    goBack() {
      --this.currentStep;
    },
    async handlePersonalProfileUpdate() {}
  },
  computed: {
    ...mapGetters(["getPersonalDetails", "getInvestmentDetails", "getNextOfKinDetails", "getUser"])
  },
  mounted() {
    this.profile = this.getUser;
  }
};
</script>

<style scoped lang="scss">
.form-border {
  border: 1px solid color(main-red) !important;
}
#msform {
  text-align: center;
  position: relative;
  margin-top: 20px;
}

#progressbar .active {
  color: #000000;
}

#progressbar li {
  list-style-type: none;
  font-size: 12px;
  width: 30%;
  float: left;
  position: relative;
  z-index: 4 !important;
}
#progressbar {
  margin-bottom: 30px;
  overflow: hidden;
  color: lightgrey;
}

#progressbar #personal:before {
  font-family: FontAwesome;
  content: "\f007";
  position: relative;
  z-index: 2;
}
#progressbar #payment:before {
  font-family: FontAwesome;
  content: "\f4d8";
  position: relative;
  z-index: 2;
}

#progressbar #confirm:before {
  font-family: FontAwesome;
  content: "\f509";
  position: relative;
  z-index: 2;
}

#progressbar li:before {
  width: 50px;
  height: 50px;
  line-height: 45px;
  display: block;
  font-size: 18px;
  color: #ffffff;
  background: #7a7a7a;
  border-radius: 50%;
  margin: 0 auto 10px auto;
  padding: 2px;
}

#progressbar li:after {
  content: "";
  width: 100%;
  height: 15px;
  background: #7a7a7a;
  position: absolute;
  left: 0;
  top: 18px;
  z-index: 1;
}

#progressbar li.active:before,
#progressbar li.active:after {
  background: color(main-red) !important;
}
</style>
