<template>
  <div class="p-lg-5 p-md-5 p-0">
    <div class="col-lg-6 col-md-6 col-12">
      <h2 class="header "><b>Transfer Option Review</b></h2>
    </div>

    <section class="mt-5 container-fluid mx-auto">
      <div class="row ">
        <div class="col-md-4" v-for="i in 3" :key="i">
          <listing-item slug="Cambridge Apartment" button-behaviour="custom" @button-clicked="handleClick">
            <template #image="slotProps">
              <img :class="slotProps.className" src="https://res.cloudinary.com/myyinvest/image/upload/v1618091853/listings/income-plan_ssaptk.png" alt="income plan" />
            </template>
            <template #title>
              Income Plan
            </template>
            <template #returns>
              25% - 30%
            </template>
            <template #min-invest>
              5000
            </template>
            <template #benefits>
              <p>Fixed Returns</p>
              <p>Short duration</p>
              <p>Financing Exclusive projects</p>
            </template>
          </listing-item>
        </div>
      </div>
    </section>
    <modal v-show="isModalVisible && !isContinue" size="xl" show-cancel>
      <h3 class="text-main-red mt-4 ft-20 mx-auto text-center ">Investment Slots (CAMBRIDGE APARTMENT)</h3>
      <section class="mt-5">
        <h5 class="header mx-5 mb-5">Token Slot(s)</h5>
        <form @submit="onSubmit">
          <span class="d-flex flex-column">
            <main-input v-model="slot" class="col-md-10 mx-auto text-center  col-lg-10 col-12" label="Token Slot(s)">
              <template #inputdesc> * Unit token cost N{{ tokenCost }} </template>
            </main-input>
          </span>
          <div class="border-bottom mt-4 mb-4"></div>
          <h5 class="header mx-5">Value (N)</h5>
          <p class="ft-18 font-weight-light mt-4 mx-5">{{ slot * tokenCost }}</p>
          <div class="border-bottom mt-4 mb-4"></div>
          <span class="d-flex justify-content-center">
            <main-button type="filled" text="Continue" @click.native="isContinue = true" class="col-md-10 mt-3 mb-3   " />
          </span>
        </form>
      </section>
    </modal>
    <modal v-show="isModalVisible && isContinue" size="xl" show-cancel>
      <h3 class="text-main-red mt-4 ft-20 mx-auto text-center ">Investment Slots (CAMBRIDGE APARTMENT)</h3>
      <section class="mt-5">
        <div class="border-bottom mt-2 mb-2"></div>
        <div class="row">
          <div class="col-md-12">
            <span class="d-flex flex-row">
              <p class="ft-16 text-grey-500 font-weight-normal">Number of Token Slot</p>
              <p class="ft-16 text-grey-500 font-weight-normal ml-auto">3</p>
            </span>
            <div class="border-bottom mt-2 mb-2"></div>
          </div>
          <div class="col-md-12">
            <span class="d-flex flex-row">
              <p class="ft-16 text-grey-500 font-weight-normal">Token Price</p>
              <p class="ft-16 text-grey-500 font-weight-normal ml-auto">&#8358; 1200.00</p>
            </span>
            <div class="border-bottom mt-2 mb-2"></div>
          </div>
          <div class="col-md-12">
            <span class="d-flex flex-row">
              <p class="ft-16 text-grey-500 font-weight-normal">Processing Fee</p>
              <p class="ft-16 text-grey-500 font-weight-normal ml-auto">&#8358; 120.00</p>
            </span>
            <div class="border-bottom mt-2 mb-2"></div>
          </div>
          <div class="col-md-12">
            <span class="d-flex flex-row">
              <p class="ft-16  font-weight-bold"><b>Total</b></p>
              <p class="ft-16  font-weight-bold ml-auto"><b>&#8358; 60,120.00</b></p>
            </span>
            <div class="border-bottom mt-2 mb-2"></div>
          </div>
        </div>
      </section>
      <main-card class="card-border mt-5 mb-5">
        <div class="d-flex justify-content-center text-center mx-auto align-items-center">
          <p class="ft-18 mx-auto font-weight-bolder text-bold-main-red"><b>CHOOSE A PAYMENT METHOD</b></p>
        </div>
      </main-card>

      <p class="text-grey-500 ft-14 font-weight-normal text-align-left mt-5">
        I hereby agree that to FBN Quest Trustees hold my investment in Trust throughout the period of this investment and to protect my interest and act in accordance with the Trust Deed
      </p>

      <span class="d-flex flex-row  float-right ">
        <main-button class="m-1" type="filled" text="I Agree, CONTINUE" />
        <main-button class="m-1" type="outline" text="I Dont Agree" />
      </span>
    </modal>
  </div>
</template>

<script>
import ListingItem from "../../../../components/ListingItem";
import Modal from "../../../../components/Shared/modal";
import MainInput from "../../../../components/form/mainInput";
import MainButton from "../../../../components/form/MainButton";
import MainCard from "../../../../components/Shared/mainCard";
export default {
  name: "investment",
  components: { MainCard, MainButton, MainInput, ListingItem, Modal },
  data() {
    return {
      slot: 0,
      isModalVisible: false,
      tokenCost: 20000,
      isContinue: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.isContinue = false;
    },
    handleClick() {
      this.showModal();
    },
    onSubmit(e) {
      e.preventDefault();
    }
  },

  async created() {
    this.$Bus.$on("close-modal", () => {
      this.isModalVisible = false;
      this.isContinue = false;
    });
  }
};
</script>

<style scoped lang="scss">
* {
  font-family: fonts(nunito), serif;
}
.card-border {
  border: 1px solid #e5e5e5 !important;
  box-sizing: border-box !important;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05) !important;
  border-radius: 10px !important;
}
</style>
