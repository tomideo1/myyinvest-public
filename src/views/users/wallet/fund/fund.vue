<template>
  <div class="p-5">
    <h2 class="header  d-none d-lg-block d-md-block  w-50"><b>How would you like to fund your Wallet</b></h2>
    <h2 class="header  d-lg-none d-md-none d-block w-100"><b>How would you like to fund your Wallet</b></h2>
    <div>
      <main-button class="mt-5 col-md-8 p-4" @click="$router.push({ name: 'wallet-fund-bank-transfer' })" size="lg" text="BANK TRANSFER" type="outline" icon="gt" icon-position="end" />
      <main-button class="mt-5 col-md-8 p-4" size="lg" text="USSD" type="outline" icon="gt" icon-position="end" />
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
