<template>
  <div class="container position-relative">
    <div class="mx-auto mt-lg-5 pt-lg-5 col-lg-5 col-md-10 col-12">
      <div class="p-5 d-flex justify-content-center">
        <router-link to="/">
          <img
            src="https://res.cloudinary.com/myyinvest/image/upload/v1614001064/mmyyinvest-2.0/logos/Myylogo2_uwpfw9.png"
            class="img-fluid d-lg-block d-md-none d-none  "
            alt=""
            width="200"
            height="200"
          />
          <img
            src="https://res.cloudinary.com/myyinvest/image/upload/v1614001064/mmyyinvest-2.0/logos/Myylogo2_uwpfw9.png"
            class="img-fluid d-block d-lg-none d-md-block "
            alt=""
            width="200"
            height="200"
          />
        </router-link>
      </div>
      <div class="card shadow-3 d-flex flex-column justify-content-center w-100 p-2 " style="border-color: white;border-radius: 20px;">
        <div class="card-body ">
          <p class="text-center font-weight-bold ft-16 mt-5 pb-5">Enter a password</p>
          <main-input v-model="form.password" class=" mb-5 mt-5 " label="Password" type="password" />
          <main-input v-model="form.confirm_password" class=" mb-5 mt-5 " label="Confirm Password" type="password" />
          <main-button @click="change" :disable="form.userToken === null || changeText === 'Loading...'" class="w-100 mt-2 mb-5 " :text="changeText" type="filled" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainButton from "../../components/form/MainButton";
import MainInput from "../../components/form/mainInput";
import { mapActions } from "vuex";
import validations from "@/mixins/validations";
import notify from "@/mixins/notify";
export default {
  mixins: [validations, notify],
  name: "forgotPassword",
  components: { MainButton, MainInput },
  data() {
    return {
      changeText: "Reset Password",
      form: {
        password: "",
        confirm_password: "",
        userToken: null
      }
    };
  },
  methods: {
    ...mapActions(["passwordChange"]),
    async change() {
      try {
        // eslint-disable-next-line no-empty
        if (!this.handleValidation(this.form)) {
          return;
        }
        this.changeText = "Loading...";
        let res = await this.passwordChange(this.form);
        if (res.status === 200 || res.status === 201) {
          this.changeText = "Reset Password";

          this.handleNotify({
            message: res.data.message,
            status: "Success"
          });
          await this.$router.push({ name: "login" });
        } else {
          this.changeText = "Reset Password";
          await this.handleNotify({
            message: res.data.message,
            status: "Error"
          });
        }
      } catch (e) {
        await this.handleNotify({
          message: e,
          status: "Error"
        });
        this.changeText = "Reset Password";
      }
    }
  },
  async mounted() {
    if (typeof this.$route.query.token === "undefined" || this.$route.query.token === null || this.$route.query.token === "") {
      await this.handleNotify({
        message: "You do not have a proper reset password token. kindly check your email for the proper link",
        status: "Error"
      });
    } else {
      this.form.userToken = this.$route.query.token;
    }
  }
};
</script>

<style scoped></style>
