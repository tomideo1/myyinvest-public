<template>
  <div :class="authClasses">
    <div class="forms-container">
      <div class="signin-signup">
        <!-- SIGN IN -->
        <form @submit.prevent="" class="sign-in-form   ">
          <div class="sign-logo">
            <router-link to="/">
              <img src="@/assets/logos/Myylogo2.png" class="img-fluid" alt="" />
            </router-link>
          </div>
          <h2>Welcome back!</h2>
          <p>Start your investment journey.</p>
          <main-input class=" " label="Email" type="email" />
          <main-input class=" " label="Password" />
          <router-link style="color: #2EAAEF;" class="  mb-4 float-right" to="/forgot-password">Forgot Password?</router-link>
          <main-button class="w-100" text="LOGIN" type="filled" />
        </form>

        <!-- SIGN UP -->
        <form @submit.prevent="" class="sign-up-form" v-if="!isContinue">
          <div class="sign-logo">
            <router-link to="/">
              <img src="@/assets/logos/Myylogo2.png" class="img-fluid" alt="" />
            </router-link>
          </div>
          <h2>Welcome!</h2>
          <p>Start your investment journey.</p>
          <div class="row">
            <div class="col-md-6">
              <main-input class=" mb-3" label="First Name" />
            </div>
            <div class="col-md-6">
              <main-input class=" mb-3" label="Last Name" />
            </div>
          </div>
          <main-input class="mb-3" label="Email Address" type="email" />
          <div class="form__div mb-3">
            <vue-tel-input style="border-color:#efb9b9!important" :class="['width-100 text-bold form__input mb-3']"></vue-tel-input>
            <label class="label">Phone Number</label>
            <!-- <p class="font-poppins text-bold text-error ml-12" v-if="isInvalid">
              {{ errorMessage }}
            </p> -->
          </div>
          <div class="row">
            <div class="col-md-6">
              <main-input class=" mb-3" label="Password" type="password" />
            </div>
            <div class="col-md-6">
              <main-input class="mb-3" label="Confirm Password" type="password" />
            </div>
          </div>
          <main-button class="w-100 " text="CONTINUE" @click="isContinue = true" type="filled" />
        </form>
        <form @submit.prevent="" class="sign-up-form" v-else>
          <div class="row">
            <div class="col-md-12 ">
              <main-input class="" label="Are you a first time investor?" inputType="select" />
            </div>
            <div class="col-md-12 ">
              <main-input class=" " label="How did you hear about us?" inputType="select" />
            </div>
            <div class="form-check m-3">
              <input type="checkbox" class="form-check-input" />
              <label class="form-check-label font-poppins ft-12 font-weight-light" for="exampleCheck1"
                >I agree to the <router-link class="ft-12 font-weight-light font-poppins" to="/terms">Terms and Conditions</router-link>
              </label>
            </div>
          </div>
          <main-button class="w-100 " text="SIGN UP " type="filled" />
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
        <img src="@/assets/svgs/login.svg" class="image1" alt="" />
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3 class="mb-4">Already an investor ?</h3>

          <main-button type="transparent" @click="authClasses.pop(-1)" text="Sign In " size="md" />
        </div>
        <img src="@/assets/svgs/register.svg" class="image1" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import MainButton from "../../components/form/MainButton";
import MainInput from "../../components/form/mainInput";
export default {
  name: "register",
  components: { MainButton, MainInput },
  data() {
    return {
      authClasses: ["container-c "],
      isContinue: false
    };
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
