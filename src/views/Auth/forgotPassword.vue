<template>
  <div>
    <div class="card shadow-3 " style="border-color: white;border-radius: 20px;">
      <div v-if="!isContinue" class="card-body ">
        <main-input class=" mb-3" label="Email Address" type="email" />
        <main-button class="w-100 " text="RESET" type="filled" />
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
