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
            <div class=" col-lg-6 col-md-6 col-12">
              <div class="form__div">
                <!-- added custom styles for xmx-datepicker and xmx-input classes in this View file -->
                <date-picker prefix-class="xmx" :formatter="momentFormat" class="width-95 " v-model="profile.dob" valueType="format"></date-picker>
                <label class="label ft-10 mt-n4">Date Of Birth (DOB)</label>
              </div>
              <!--              <main-input class="col-md-12" label="Date of Birth" v-model="profile.dob" />-->
            </div>

            <div class="col-lg-6 col-md-6 col-12">
              <main-input
                class="col-md-12"
                label="Marital Status"
                inputType="select"
                v-model="profile.maritalStatus"
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
              <main-input class="col-md-12 " label="State of origin" inputType="select" v-model="profile.state" :options="states" />
            </div>

            <div class="col-lg-6 col-md-6 col-12 d-none d-lg-block d-md-none">
              <div class="d-flex flex-lg-row flex-column flex-grow-1">
                <main-input class="col-md-9 " type="number" label="Bank Verification Number (BVN)" v-model="profile.bvn" />
                <span class="d-flex flex-column">
                  <p class="text-danger  ft-12 mt-n4 float-right">Why Bvn?</p>
                  <p v-if="profile.bvn !== ''" class="ft-12 bg-primary-default p-1 text-white" style="border-radius:3px;">Confirmed</p>
                </span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 d-block d-lg-none d-md-block">
              <div class="d-flex flex-lg-row flex-column flex-grow-1">
                <main-input class="col-md-9 " label="(BVN)" v-model="profile.bvn" />
                <p class="text-danger col-md-3 ft-12 mt-n4 float-right">Why Bvn?</p>
              </div>
            </div>

            <div class="col-lg-12 col-md-12 col-12">
              <main-input class="col-md-12 " placeholder="" label="Home Address" v-model="profile.homeAddress" />
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
              <!-- <main-input class="col-md-12" label-type="full" label="What is the Primary Reason you are Interested in Investing with Myyinvest?" v-model="investment.primaryInvReason" /> -->
              <main-input class="col-md-12" label-type="full" label="What is the Primary Reason you are Interested in Investing with Myyinvest?" v-model="profile.primaryInvReason" />
            </div>

            <div class="col-lg-12 col-md-12 col-12">
              <!-- <main-input class="col-md-12" label-type="full" label="What kind of investor are you?" v-model="investment.kindOfInvestor" /> -->
              <main-input class="col-md-12" label-type="full" label="What kind of investor are you?" v-model="profile.kindOfInvestor" />
            </div>

            <div class="col-lg-12 col-md-12 col-12">
              <!-- <main-input class="col-md-12" label-type="full" label="Who advises you on your financial decisions?" v-model="investment.finDecision" /> -->
              <main-input class="col-md-12" label-type="full" label="Who advises you on your financial decisions?" v-model="profile.finDecision" />
            </div>

            <div class="col-lg-12 col-md-12 col-12">
              <!-- <main-input class="col-md-12" label-type="full" label="Do you need a financial advisor?" v-model="investment.finAdvisor" /> -->
              <main-input class="col-md-12" label-type="full" label="Do you need a financial advisor?" v-model="profile.finAdvisor" />
            </div>

            <div class="col-lg-12 col-md-12 col-12">
              <!-- <main-input class="col-md-12" label-type="full" label="What is your monthly income range?" v-model="investment.monthlyIncome" /> -->
              <main-input class="col-md-12" label-type="full" label="What is your monthly income range?" v-model="profile.monthlyIncome" />
            </div>

            <div class="col-lg-12 col-md-12 col-12">
              <!-- <main-input class="col-md-12" label-type="full" label="How much do you want invest in the next 12 Months?" v-model="investment.expectedInv" /> -->
              <main-input class="col-md-12" label-type="full" label="How much do you want invest in the next 12 Months?" v-model="profile.expectedInv" />
            </div>

            <div class="col-lg-12 col-md-12 col-12">
              <!-- <main-input class="col-md-12" label-type="full" label="What investment holding period do you prefer? " v-model="investment.holdingPeriodPrefer" /> -->
              <main-input class="col-md-12" label-type="full" label="What investment holding period do you prefer? " v-model="profile.holdingPeriodPrefer" />
            </div>
          </div>
        </div>
        <main-button @click="goBack()" text="Back" type="filled" class="float-left" />
        <main-button @click="goNext('investment')" :text="continueButtonText" type="filled" class="float-right" />
      </main-card>
    </section>

    <section class="m-lg-5 p-lg-5" v-if="currentStep === 3">
      <main-card class="form-border p-4">
        <div class="container-fluid ">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <!-- <main-input class="col-md-12" label="First Name" v-model="kin.firstName" /> -->
              <main-input class="col-md-12" label="First Name" v-model="profile.firstNameOfKin" />
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <!-- <main-input class="col-md-12" label="Last Name" v-model="kin.lastName" /> -->
              <main-input class="col-md-12" label="Last Name" v-model="profile.lastNameOfKin" />
            </div>

            <div class="col-lg-6 col-md-6 col-12">
              <!-- <main-input class="col-md-12" label="Relationship" v-model="kin.relationship" /> -->
              <main-input class="col-md-12" label="Relationship" v-model="profile.relationship" />
            </div>

            <div class="col-lg-6 col-md-6 col-12">
              <!-- <main-input class="col-md-12" label="Phone Number" v-model="kin.phoneNumber" /> -->
              <main-input class="col-md-12" label="Phone Number" v-model="profile.phoneNumberOfKin" />
            </div>
            <div class="col-lg-12 col-md-12 col-12">
              <!-- <main-input class="col-md-12" label="Email" v-model="kin.email" /> -->
              <main-input class="col-md-12" label="Email" v-model="profile.emailOfKin" />
            </div>
          </div>
        </div>
        <main-button @click="goBack()" text="Back" type="filled" class="float-left" />
        <main-button @click="goNext('kin')" text="Finish" type="filled" class="float-right" />
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
import validations from "@/mixins/validations";
import notify from "@/mixins/notify";
import moment from "moment";
import states from "@/components/data/states.js";

export default {
  mixins: [validations, notify],
  name: "profile",
  data() {
    return {
      momentFormat: {
        //[optional] Date to String
        stringify: date => {
          return date ? moment(date).format("LL") : "";
        },
        parse: value => {
          return value ? moment(value, "LL").toDate() : null;
        }
      },
      currentStep: 1,
      continueButtonText: "Continue",
      isLoading: false,
      states: [],
      profile: {
        firstName: "",
        firstNameOfKin: "",
        lastName: "",
        lastNameOfKin: "",
        relationship: "",
        gender: "",
        phoneNumber: "",
        phoneNumberOfKin: "",
        state: "",
        dob: "",
        maritalStatus: "",
        email: "",
        emailOfKin: "",
        homeAddress: "",
        bvn: "",
        primaryInvReason: "",
        kindOfInvestor: "",
        finDecision: "",
        finAdvisor: "",
        monthlyIncome: "",
        expectedInv: "",
        holdingPeriodPrefer: ""
      },
      // investment: {
      //   primaryInvReason: "",
      //   kindOfInvestor: "",
      //   finDecision: "",
      //   finAdvisor: "",
      //   monthlyIncome: "",
      //   expectedInv: "",
      //   holdingPeriodPrefer: ""
      // },
      // kin: {
      //   firstName: "",
      //   lastName: "",
      //   relationship: "",
      //   email: "",
      //   phoneNumber: ""
      // },
      steps: [{ label: "one" }, { label: "two" }, { label: "three" }, { label: "complete" }]
    };
  },
  components: { MainButton, MainCard, MainInput, DatePicker },
  methods: {
    ...mapActions(["createNextOfKin", "createInvestmentPlan", "createPersonalDetails"]),
    async goNext(type) {
      switch (type) {
        case "personal":
          await this.handlePersonalProfileUpdate({
            dob: this.profile.dob,
            homeAddress: this.profile.homeAddress,
            state: this.profile.state,
            gender: this.profile.gender,
            phoneNumber: this.profile.phoneNumber,
            maritalStatus: this.profile.maritalStatus,
            occupation: this.profile.occupation,
            bvn: this.profile.bvn
          });
          break;
        case "investment":
          await this.handleInvestmentProfileUpdate({
            // primaryInvReason: this.investment.primaryInvReason,
            // kindOfInvestor: this.investment.kindOfInvestor,
            // finDecision: this.investment.finDecision,
            // finAdvisor: this.investment.finAdvisor,
            // monthlyIncome: this.investment.monthlyIncome,
            // expectedInv: this.investment.expectedInv,
            // holdingPeriodPrefer: this.investment.holdingPeriodPrefer
            primaryInvReason: this.profile.primaryInvReason,
            kindOfInvestor: this.profile.kindOfInvestor,
            finDecision: this.profile.finDecision,
            finAdvisor: this.profile.finAdvisor,
            monthlyIncome: this.profile.monthlyIncome,
            expectedInv: this.profile.expectedInv,
            holdingPeriodPrefer: this.profile.holdingPeriodPrefer
          });
          break;
        case "kin":
          await this.handleNextOfKinProfileUpdate({
            // firstName: this.kin.firstName,
            // lastName: this.kin.lastName,
            // relationship: this.kin.relationship,
            // email: this.kin.email,
            // phoneNumber: this.kin.phoneNumber
            firstName: this.profile.firstNameOfKin,
            lastName: this.profile.lastNameOfKin,
            relationship: this.profile.relationship,
            email: this.profile.emailOfKin,
            phoneNumber: this.profile.phoneNumberOfKin
          });
          break;
        default:
          break;
      }
    },
    goBack() {
      --this.currentStep;
    },
    async handlePersonalProfileUpdate(payload) {
      if (!this.handleValidation(payload)) {
        return;
      }
      this.continueButtonText = "loading..";
      this.isLoading = true;
      let res = await this.createPersonalDetails(payload);
      if (res.status === 200 || res.status === 201) {
        this.continueButtonText = "Continue";
        this.isLoading = false;
        ++this.currentStep;
      } else {
        this.continueButtonText = "Continue";
        this.isLoading = false;
        this.handleNotify({
          message: res.data.message,
          status: "Error"
        });
      }

      // ++this.currentStep;
      return false;
    },
    async handleInvestmentProfileUpdate(payload) {
      if (!this.handleValidation(payload)) {
        return;
      }
      this.continueButtonText = "loading..";
      this.isLoading = true;
      let res = await this.createInvestmentPlan(payload);
      if (res.status === 200 || res.status === 201) {
        this.continueButtonText = "Continue";
        this.isLoading = false;
        ++this.currentStep;
      } else {
        this.continueButtonText = "Continue";
        this.isLoading = false;
        this.handleNotify({
          message: res.data.message,
          status: "Error"
        });
      }

      // ++this.currentStep;
      return false;
    },
    async handleNextOfKinProfileUpdate(payload) {
      if (!this.handleValidation(payload)) {
        return;
      }
      this.continueButtonText = "loading..";
      this.isLoading = true;
      let res = await this.createNextOfKin(payload);
      if (res.status === 200 || res.status === 201) {
        this.continueButtonText = "Continue";
        this.isLoading = false;
        this.handleNotify({
          message: "Profile Update Complete",
          status: "Success"
        });
      } else {
        this.continueButtonText = "Continue";
        this.isLoading = false;
        this.handleNotify({
          message: res.data.message,
          status: "Error"
        });
      }
    }
  },
  computed: {
    ...mapGetters(["getProfile", "getUser"])
  },
  mounted() {
    this.states = states;
    this.profile = this.getProfile;
    this.profile.email = this.getUser.email;
    this.profile.lastName = this.getUser.lastName;
    this.profile.firstName = this.getUser.firstName;
    // console.log(this.profile);
    // this.investment = this.getProfile;
    // this.kin = this.getProfile;
  }
};
</script>

<style lang="scss">
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

// custom styles
.xmx-datepicker {
  width: 93.325% !important;

  + .label {
    left: 1.675rem;
    font-weight: 500;
    font-size: 0.75rem !important;
  }

  &:focus-within + .label {
    color: color(main-red);
    font-size: 0.8rem !important;
  }
}

.xmx-input {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  font-size: 14px;
  /*border: 1px solid #efb9b9;*/
  /*color: #999999;*/
  /*font-family: fonts(main-poppins), serif;*/
  line-height: 1.3;
  // padding: 1.3rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #efb9b9 !important;
  /*outline: none;*/

  &:focus-within {
    border-color: color(main-red) !important;
  }
}
</style>
