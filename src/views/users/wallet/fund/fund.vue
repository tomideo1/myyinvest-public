<template>
  <div class="p-lg-5 p-md-5 ">
    <div class="col-lg-6 col-md-6 col-12">
      <h2 class="header "><b>How would you like to fund your Wallet</b></h2>
    </div>
    <div>
      <main-button class="mt-5 col-md-8 p-4" @click="$router.push({ name: 'wallet-fund-bank-transfer' })" size="lg" text="BANK TRANSFER" type="outline" icon="gt" icon-position="end" />
      <main-button class="mt-5 col-md-8 p-4" @click="$router.push({ name: 'wallet-fund-ussd' })" size="lg" text="USSD" type="outline" icon="gt" icon-position="end" />
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
