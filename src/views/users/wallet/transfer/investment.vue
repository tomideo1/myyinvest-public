<template>
  <div class="p-lg-5 p-md-5 p-0">
    <div class="col-lg-6 col-md-6 col-12">
      <h2 class="header "><b>Transfer Option Review</b></h2>
    </div>

    <section class="mt-5 mx-auto">
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

    <div class="d-block d-lg-none d-md-none">
      <modal class="" v-show="isModalVisible" size="md" show-cancel>
        <h3 class="text-main-red mt-4 ft-20 mx-auto text-center ">Investment Slots (CAMBRIDGE APARTMENT)</h3>
        <section>
          <form @submit="onSubmit">
            <main-input label="Token Slot(s)" />
          </form>
        </section>
      </modal>
    </div>
    <div class="d-none d-lg-block d-md-block">
      <modal v-show="isModalVisible" size="xl" show-cancel>
        <h3 class="text-main-red mt-4 ft-20 mx-auto text-center ">Investment Slots (CAMBRIDGE APARTMENT)</h3>
        <section class="mt-5">
          <form @submit="onSubmit">
            <main-input class="col-md-10 mx-auto text-center  col-lg-10 col-12" label="Token Slot(s)" />
            <span></span>
            <div class="border-bottom mt-4 mb-4"></div>
          </form>
        </section>
      </modal>
    </div>
  </div>
</template>

<script>
import ListingItem from "../../../../components/ListingItem";
import Modal from "../../../../components/Shared/modal";
import MainInput from "../../../../components/form/mainInput";
export default {
  name: "investment",
  components: { MainInput, ListingItem, Modal },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    handleClick() {
      this.showModal();
    },
    onSubmit() {}
  },

  async created() {
    this.$Bus.$on("close-modal", () => {
      this.isModalVisible = false;
    });
  }
};
</script>

<style scoped lang="scss">
* {
  font-family: fonts(nunito), serif;
}
</style>
