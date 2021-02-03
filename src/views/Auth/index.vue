<template>
  <div :class="authClasses">
    <div class="forms-container">
      <div class="signin-signup">
        <!-- SIGN IN -->

        <div class="m-lg-4 sign-in-form">
          <div class="sign-logo ">
            <router-link to="/">
              <img src="@/assets/logos/Myylogo2.png" style="margin-bottom:60px" class="img-fluid d-lg-block d-md-none d-none  " alt="" width="200" height="200" />
              <img src="@/assets/logos/Myylogo2.png" class="img-fluid d-block d-lg-none d-md-block " alt="" width="200" height="200" />
            </router-link>
          </div>
          <h4 class="text-main-red ft-20">Welcome back!</h4>
          <p class="text-black ft-14 mb-3">continue your investment journey.</p>
          <div class="card shadow-3 " style="border-color: white;border-radius: 20px;">
            <div class="card-body ">
              <main-input class=" " label="Email" type="email" />
              <main-input class=" " label="Password" />
              <router-link style="color: #2EAAEF;" class="  mb-4 float-right" to="/forgot-password">Forgot Password?</router-link>
              <main-button class="w-100" text="LOGIN" type="filled" />
            </div>
          </div>
        </div>

        <!-- SIGN UP -->
        <div action="#" class="sign-up-form m-lg-4">
          <div class="sign-logo mb-3">
            <router-link to="/">
              <img src="@/assets/logos/Myylogo2.png" class="img-fluid d-lg-block d-md-none d-none  " alt="" width="200" height="200" />
              <img src="@/assets/logos/Myylogo2.png" class="img-fluid d-block d-lg-none d-md-block ml-3 ml-lg-0 ml-md-0 " alt="" width="200" height="200" />
            </router-link>
          </div>
          <h4 class="text-main-red ft-20 ml-3 ml-lg-0 ml-md-0">Welcome !</h4>
          <p class="text-black ft-14 mb-1 ml-3 ml-lg-0 ml-md-0">Start your investment journey.</p>

          <div class="card shadow-3 " style="border-color: white;border-radius: 20px;">
            <div v-if="!isContinue" class="card-body ">
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

              <!-- <input type="text" class="form-control" id="country"> -->

              <div class="row ">
                <div class="col-md-6">
                  <main-input class=" mb-3" label="Password" type="password" />
                </div>
                <div class="col-md-6">
                  <main-input class="mb-3" label="Confirm Password" type="password" />
                </div>
              </div>

              <main-button class="w-100 " text="CONTINUE" @click="isContinue = true" type="filled" />
            </div>
            <div v-else class="card-body ">
              <div class="row">
                <div class="col-md-12  mb-3">
                  <main-input class="" label="Are you a first time investor?" inputType="select" />
                </div>
                <div class="col-md-12 mb-3">
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
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content mx-auto">
          <h3 class="ft-20">New here ?</h3>
          <p>
            Join us to explore our investmentoptions
          </p>
          <main-button type="transparent" @click="authClasses.push('sign-up-mode')" text="Sign Up " size="md" />
        </div>
        <img src="@/assets/svgs/login.svg" class="image1 d-none d-lg-block d-md-none" alt="" />
      </div>

      <div class="panel right-panel">
        <div class="content">
          <h3 class="ft-26 mb-3 font-poppins">Already an investor ?</h3>

          <main-button type="transparent" @click="authClasses.pop(-1)" text="Sign In " size="md" />
        </div>
        <img src="@/assets/svgs/register.svg" class="image2 d-none d-lg-block d-md-none" alt="" />
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
