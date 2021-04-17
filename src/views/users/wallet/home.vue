<template>
  <div class="container-fluid">
    <section class="container-fluid">
      <div class="row m-4">
        <div class="col-md-4 border-right">
          <p class=" ft-14 font-weight-light">Wallet Balance</p>
          <span class="d-flex flex-row">
            <p class="ft-20 font-weight-bold mr-2">&#8358;</p>
            <p class="ft-20 mt-2 font-weight-bold ">567.00</p>
          </span>
        </div>
        <div class="col-md-8  mt-5">
          <div class="row ml-auto">
            <div class="col-md-6">
              <main-button class="col-md-12 mb-4" @click="$router.push({ name: 'wallet-fund' })" type="filled" text="ADD FUNDS" />
            </div>
            <div class="col-md-6">
              <main-button class="col-md-12 mb-4" type="outline" text="TRANSFER" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid  mt-5">
      <main-card class="card-border ">
        <div class="row    ml-5  ">
          <div class="col-md-3">
            <span class="d-flex flex-column">
              <p class="ft-14 text-grey-500 ">Bank</p>
              <p class="ft-18 font-weight-bold text-bold ">Providus Bank</p>
            </span>
          </div>
          <div class="col-md-3">
            <span class="d-flex flex-column">
              <p class="ft-14 text-grey-500 ">Account Number</p>
              <p class="ft-18 font-weight-bold text-bold ">2376890826</p>
            </span>
          </div>
          <div class="col-md-3">
            <span class="d-flex flex-column">
              <p class="ft-14 text-grey-500 ">Account Name</p>
              <p class="ft-18 font-weight-bold text-bold ">Myyinvest/DAVID GABRIEL</p>
            </span>
          </div>

          <div class="col-md-3 mt-4 d-flex justify-content-lg-around">
            <main-icon name="clipboard" size="lg" />
          </div>
        </div>
      </main-card>
    </section>
    <section class="container-fluid mt-5">
      <main-card class="card-border">
        <div class="container-fluid p-3">
          <div class="col-md-12 mb-4 border-bottom">
            <span class="d-flex flex-row">
              <p class="ft-14 line-height-default font-weight-normal text-black">Activity</p>
              <p class="ml-auto ft-14 text-main-red">VIEW ALL</p>
            </span>
          </div>

          <div class="col-md-12  mb-3 border-bottom" v-for="i in 5" :key="i">
            <span class="d-flex flex-row">
              <span class="d-flex flex-row">
                <main-icon class=" mr-4" name="activity" size="md" />
                <span class="d-flex flex-column">
                  <p class="ft-16 line-height-default font-weight-bolder text-bold-black">Transfer to Investment</p>
                  <p class="text-grey-500 ft-14 font-weight-normal mt-n2">Processed</p>
                </span>
              </span>
              <span class="ml-auto d-flex flex-column">
                <p class="ft-16 line-height-default font-weight-bolder text-bold-black ">&#8358; &nbsp; 100</p>
                <p class="text-grey-500 ft-14 font-weight-normal mt-n2">Sep 28. 2020</p>
              </span>
            </span>
          </div>
        </div>
      </main-card>
    </section>
  </div>
</template>

<script>
import MainButton from "../../../components/form/MainButton";
import MainCard from "../../../components/Shared/mainCard";
import MainIcon from "../../../components/Shared/mainIcon";
export default {
  name: "wallet",
  components: { MainIcon, MainCard, MainButton }
};
</script>

<style scoped lang="scss">
* {
  font-family: fonts(nunito), serif;
}
.card-border {
  border: 1px solid #e5e5e5 !important;
  box-sizing: border-box !important;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05) !important;
  border-radius: 10px !important;
}
</style>
