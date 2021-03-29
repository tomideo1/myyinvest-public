<template>
  <paystack :amount="amount" :email="email" :paystackkey="paystackkey" :reference="reference" :callback="callback" :close="close" :embed="false">
    <i class="fas fa-money-bill-alt"></i>
    Make Payment
  </paystack>
</template>

<script>
import { mapGetters } from "vuex";
import paystack from "vue-paystack";

export default {
  name: "AddCard",
  components: {
    paystack
  },
  data() {
    return {
      paystackkey: "",
      email: "",
      amount: 100000
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
    reference() {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }
  },
  methods: {
    callback(response) {
      console.log(response);
    },
    close() {
      console.log("Payment closed");
    }
  },
  mounted() {
    this.email = this.getUser.email;
  }
};
</script>
