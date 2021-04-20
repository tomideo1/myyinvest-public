<template>
  <div class="p-lg-5 p-md-5 p-0">
    <div class="col-lg-6 col-md-6 col-12">
      <h2 class="header "><b>Myyinvest User</b></h2>
      <p class="  ft-16 mt-3">Make a transfer from your wallet to a bank account by filling in the details below</p>
    </div>
    <section class="mt-5 col-md-6 col-lg-6 col-12">
      <form @submit="handleSubmit">
        <main-input class="mb-4 mt-5" v-model="form.amount" label="Amount" />
        <main-input class="mb-4 mt-5" v-model="form.recipient_email" label="Recipient’s Email" />

        <main-button type="filled" class="col-md-12 mt-5" text="Continue" :disable="form.amount === '' || form.recipient_email === ''" />
      </form>
    </section>
  </div>
</template>

<script>
import MainInput from "../../../../components/form/mainInput";
import { mapActions, mapGetters } from "vuex";
import MainButton from "../../../../components/form/MainButton";
export default {
  name: "bankTransfer",
  components: {
    MainButton,
    MainInput
  },
  data() {
    return {
      form: {
        amount: "",
        recipient_email: ""
      }
    };
  },
  methods: {
    ...mapActions(["fetchBankList"]),
    handleSubmit(event) {
      event.preventDefault();
    }
  },
  computed: {
    ...mapGetters(["getBankList"])
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
