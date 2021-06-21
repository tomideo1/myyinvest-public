<template>
  <div class="p-lg-5 p-md-5 ">
    <div class="col-lg-6 col-md-6 col-12">
      <h2 class="header "><b>Where is your transfer location?</b></h2>
    </div>
    <div>
      <main-button class="mt-5 col-md-8 p-4" @click="$router.push({ name: 'wallet-transfer-investment' })" size="lg" text="INVESTMENT PLAN" type="outline" icon="gt" icon-position="end" />
      <main-button class="mt-5 col-md-8 p-4" @click="$router.push({ name: 'wallet-transfer-account' })" size="lg" text="BANK ACCOUNT" type="outline" icon="gt" icon-position="end" />
      <main-button class="mt-5 col-md-8 p-4" @click="$router.push({ name: 'wallet-transfer-user' })" size="lg" text="MYYINVEST  USER" type="outline" icon="gt" icon-position="end" />
    </div>
  </div>
</template>

<script>
import MainButton from "../../../../components/form/MainButton";
export default {
  name: "fund",
  components: { MainButton }
};
</script>

<style scoped lang="scss">
* {
  font-family: fonts(nunito), serif;
}
</style>
