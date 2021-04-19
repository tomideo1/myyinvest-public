<template>
  <div class="p-lg-5 p-md-5 p-0">
    <div class="col-lg-6 col-md-6 col-12">
      <h2 class="header "><b>USSD</b></h2>
      <p class="  ft-16 mt-3">Make a Ussd bank transfer into your wallet by filling in the details below</p>
    </div>
    <section class="mt-5 col-md-6 col-lg-6 col-12">
      <form @submit="showModal">
        <main-input v-model="form.amount" label="Amount" />
        <main-input v-model="form.bank" label="Select Bank" input-type="select" :options="getBankList" />

        <main-button type="filled" class="col-md-12 mt-5" text="Continue" :disable="form.amount === '' || form.bank === ''" />
      </form>
    </section>
    <div class="d-block d-lg-none d-md-none">
      <modal class="" v-show="isModalVisible" size="md" show-cancel>
        <h3 class="text-main-red mt-4 ft-20 mx-auto text-center ">Investment Slots (CAMBRIDGE APARTMENT)</h3>

        <p class="mt-5 pt-5 ft-20 text-bold-black mx-auto text-center"><b>Dial the code below to complete this transaction </b></p>
        <p class="mt-5 pt-5 ft-20 text-bold-main-red mx-auto text-center">
          <b>{{ form.code }}</b>
        </p>

        <p @click="doCopy" class="mt-5 cursor-pointer ft-20 text-bold-black mx-auto text-center"><b>Tap to copy </b></p>
      </modal>
    </div>
    <div class="d-none d-lg-block d-md-block">
      <modal v-show="isModalVisible" size="xl" show-cancel>
        <h3 class="text-main-red mt-4 ft-20 mx-auto text-center ">Investment Slots (CAMBRIDGE APARTMENT)</h3>

        <p class="mt-5 pt-5 ft-20 text-bold-black mx-auto text-center"><b>Dial the code below to complete this transaction </b></p>
        <p class="mt-5 pt-5 ft-20 text-bold-main-red mx-auto text-center">
          <b>{{ form.code }}</b>
        </p>

        <p @click="doCopy" class="mt-5 cursor-pointer ft-20 text-bold-black mx-auto text-center"><b>Tap to copy </b></p>
      </modal>
    </div>
  </div>
</template>

<script>
import MainInput from "../../../../components/form/mainInput";
import { mapActions, mapGetters } from "vuex";
import MainButton from "../../../../components/form/MainButton";
import Modal from "../../../../components/Shared/modal";
export default {
  name: "bankTransfer",
  components: {
    Modal,
    MainButton,
    MainInput
  },
  data() {
    return {
      isModalVisible: false,
      form: {
        amount: "",
        bank: "",
        code: "*921*3*100*2190324598#"
      }
    };
  },
  methods: {
    ...mapActions(["fetchBankList"]),
    doCopy: function() {
      const self = this;
      self.$copyText(self.form.code).then(
        // eslint-disable-next-line no-unused-vars
        function(e) {
          alert("USSD Code copied to clipboard");
          self.closeModal();
        },
        // eslint-disable-next-line no-unused-vars
        function(e) {
          alert("Can not copy");
        }
      );
    },
    showModal(e) {
      e.preventDefault();
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  computed: {
    ...mapGetters(["getBankList"])
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

.card-border {
  border: 0.5px solid #f00304 !important;
  box-sizing: border-box !important;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05) !important;
  border-radius: 10px !important;
}
</style>
