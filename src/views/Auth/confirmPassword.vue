<template>
  <div class="container position-relative">
    <div class="mx-auto mt-lg-5 pt-lg-5 col-lg-5 col-md-10 col-12">
      <div class="p-5 d-flex justify-content-center">
        <router-link to="/">
          <img src="@/assets/logos/Myylogo2.png" class="img-fluid d-lg-block d-md-none d-none  " alt="" width="200" height="200" />
          <img src="@/assets/logos/Myylogo2.png" class="img-fluid d-block d-lg-none d-md-block " alt="" width="200" height="200" />
        </router-link>
      </div>
      <div class="card shadow-3 d-flex flex-column justify-content-center w-100 p-2 " style="border-color: white;border-radius: 20px;">
        <div class="card-body ">
          <p class="text-center font-weight-bold ft-16 mt-5 pb-5">Enter a password</p>
          <main-input class=" mb-5 mt-5 " label="Password" type="password" />
          <main-input class=" mb-5 mt-5 " label="Confirm Password" type="password" />
          <main-button class="w-100 mt-2 mb-5 " text="CHANGE" type="filled" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainButton from "../../components/form/MainButton";
import MainInput from "../../components/form/mainInput";
export default {
  name: "forgotPassword",
  components: { MainButton, MainInput }
};
</script>

<style scoped></style>
