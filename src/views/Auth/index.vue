<template>
  <div :class="authClasses">
    <div class="forms-container">
      <div class="signin-signup">
        <!-- SIGN IN -->
        <form @submit.prevent="" class="sign-in-form mt-lg-0 mt-5   ">
          <div class="sign-logo">
            <router-link to="/">
              <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614001064/mmyyinvest-2.0/logos/Myylogo2_uwpfw9.png" class="img-fluid" alt="" />
            </router-link>
          </div>
          <h2>Welcome back!</h2>
          <p>Start your investment journey.</p>
          <main-input v-model="loginForm.email" class=" " label="Email" type="email" />
          <main-input type="password" v-model="loginForm.password" class=" " label="Password" />
          <router-link style="color: #2EAAEF;" class="  mb-4 float-right" to="/forgot-password">Forgot Password?</router-link>
          <main-button :disable="loginText === 'Loading...'" class="w-100" @click="handleLogin" :text="loginText" type="filled" />
        </form>

        <!-- SIGN UP -->
        <form @submit.prevent="" class="sign-up-form " v-if="!isContinue">
          <div class="sign-logo">
            <router-link to="/">
              <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614001064/mmyyinvest-2.0/logos/Myylogo2_uwpfw9.png" class="img-fluid" alt="" />
            </router-link>
          </div>
          <h2>Welcome!</h2>
          <p>Start your investment journey.</p>
          <div class="row">
            <div class="col-md-6">
              <main-input v-model="signUpForm.firstName" class=" mb-3" label="First Name" />
            </div>
            <div class="col-md-6">
              <main-input v-model="signUpForm.lastName" class=" mb-3" label="Last Name" />
            </div>
          </div>
          <main-input class="mb-3" label="Email Address" v-model="signUpForm.email" type="email" />
          <div class="form__div mb-3">
            <vue-tel-input v-model="signUpForm.phone_number" style="border-color:#efb9b9!important" :class="['width-100 text-bold form__input mb-3']"></vue-tel-input>
            <label class="label">Phone Number</label>
            <!-- <p class="font-poppins text-bold text-error ml-12" v-if="isInvalid">
              {{ errorMessage }}
            </p> -->
          </div>
          <div class="row">
            <div class="col-md-6">
              <main-input class=" mb-3" v-model="signUpForm.password" label="Password" type="password" />
            </div>
            <div class="col-md-6">
              <main-input class="mb-3" v-model="signUpForm.confirm_password" label="Confirm Password" type="password" />
            </div>
          </div>
          <main-button class="w-100 " text="CONTINUE" @click="isContinue = true" type="filled" />
        </form>
        <form @submit.prevent="" class="sign-up-form" v-else>
          <div class="row">
            <p class="text-main-red cursor-pointer" @click="isContinue = false">Go back</p>

            <div class="col-md-12 ">
              <main-input class="" v-model="signUpForm.firstInvest" label="Are you a first time investor?" inputType="select" :options="investment_options" />
            </div>
            <div class="col-md-12 ">
              <main-input class=" " v-model="signUpForm.hearAbout" label="How did you hear about us?" inputType="select" :options="media_list" />
            </div>
            <div class="form-check m-3">
              <input type="checkbox" class="form-check-input" v-model="signUpForm.isAgreedTerms" />
              <label class="form-check-label font-poppins ft-12 font-weight-light"
                >I agree to the <router-link class="ft-12 font-weight-light font-poppins" to="/terms">Terms and Conditions</router-link>
              </label>
            </div>
          </div>
          <main-button class="w-100 " :disable="loginText === 'Loading...' || !signUpForm.isAgreedTerms" @click="handleRegister" :text="registerText" type="filled" />
        </form>
      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>New here ?</h3>
          <p>
            Join us to explore our investment options
          </p>
          <main-button type="transparent" @click="authClasses.push('sign-up-mode')" text="Sign Up " size="md" />
        </div>
        <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614000920/mmyyinvest-2.0/svgs/login_wkklzv.svg" class="image1" alt="" />
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3 class="mb-4">Already an investor ?</h3>

          <main-button type="transparent" @click="authClasses.pop(-1)" text="Sign In " size="md" />
        </div>
        <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614000918/mmyyinvest-2.0/svgs/register_os012l.svg" class="image1" alt="" />
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
  name: "register",
  components: { MainButton, MainInput },
  data() {
    return {
      authClasses: ["container-c "],
      isContinue: false,
      loginText: "Login",
      registerText: "Sign Up",
      loginForm: {
        email: "",
        password: ""
      },
      investment_options: [
        {
          key: "Yes",
          value: "True"
        },
        {
          key: "No",
          value: "False"
        }
      ],
      media_list: [
        {
          key: "facebook",
          value: "facebook"
        },
        {
          key: "Twitter",
          value: "Twitter"
        },
        {
          key: "Instagram",
          value: "Instagram"
        },
        {
          key: "Fliers",
          value: "Fliers"
        },

        {
          key: "Friends",
          value: "Friends"
        }
      ],
      signUpForm: {
        firstName: "",
        lastName: "",
        email: "",
        country: "Nigeria",
        password: "",
        confirm_password: "",
        firstInvest: "",
        hearAbout: "",
        phone_number: "",
        isAgreedTerms: false
      }
    };
  },
  methods: {
    ...mapActions(["login", "register"]),
    async handleLogin() {
      // console.log(res)
      try {
        if (!this.handleValidation(this.loginForm)) {
          return;
        }
        this.loginText = "Loading...";
        let res = await this.login(this.loginForm);
        if (res.status === 200 || res.status === 201) {
          this.loginText = "Login";

          this.handleNotify({
            message: res.data.message,
            status: "Success"
          });
          await this.$router.push({ name: "overview" });
        } else {
          this.loginText = "Login";
          await this.handleNotify({
            message: res.data.message,
            status: "Error"
          });
        }
      } catch (e) {
        this.loginText = "Login";
      }
    },
    async handleRegister() {
      try {
        if (!this.handleValidation(this.signUpForm)) {
          return;
        }
        this.registerText = "Loading...";
        let res = await this.register(this.signUpForm);
        if (res.status === 200 || res.status === 201) {
          this.registerText = "Sign Up";
          this.$router.push({
            name: "confirmMessage",
            params: { email: this.signUpForm.email }
          });
        } else {
          this.registerText = "Sign Up";
          this.handleNotify({
            message: res.data.message,
            status: "Error"
          });
        }
      } catch (e) {
        this.registerText = "Sign Up";
      }
    }
  },
  mounted() {
    let currentRoute = this.$route.name;
    if (currentRoute === "register") {
      this.authClasses = ["container-c ", "sign-up-mode"];
    } else if (currentRoute === "login") {
      this.authClasses = ["container-c"];
    }
  }
};
</script>
