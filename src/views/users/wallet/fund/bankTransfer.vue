<template>
  <div class="p-lg-5 p-md-5 ">
    <div class="col-lg-6 col-md-6 col-12">
      <h2 class="header "><b>Bank Transfer</b></h2>
      <p class="  ft-16 mt-3">Fund your Wallet by sending money to this Account number registered in your Wallet</p>
    </div>
    <main-card class="card-border col-md-6 col-lg-6 col-12">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-10 col-lg-10 col-12">
            <span class="d-flex flex-column">
              <span class="d-flex flex-row">
                <span class="ft-18 text-main-red mb-4 ">{{ account_number }}/</span>
                <span class="ft-18 text-bold-black"><b>Cowrywise</b></span>
              </span>
              <span class="ft-18 text-bold-black "><b>Daniel Gabriel</b></span>
              <span class="ft-18 text-bold-black "><b>Providus Bank</b></span>
            </span>
          </div>
          <div class="col-md-2 mt-lg-0 mt-md-0 mt-4">
            <main-icon name="clipboard" @click="doCopy" size="retain" class="ml-auto" />
          </div>
        </div>
      </div>
    </main-card>
  </div>
</template>

<script>
import MainCard from "../../../../components/Shared/mainCard";
import MainIcon from "../../../../components/Shared/mainIcon";
export default {
  name: "bankTransfer",
  components: { MainIcon, MainCard },
  data() {
    return {
      account_number: "2190324598"
    };
  },
  methods: {
    doCopy: function() {
      this.$copyText(this.account_number).then(
        // eslint-disable-next-line no-unused-vars
        function(e) {
          alert("Account Number copied to clipboard");
        },
        // eslint-disable-next-line no-unused-vars
        function(e) {
          alert("Can not copy");
        }
      );
    }
  }
};
</script>

<style scoped lang="scss">
* {
  font-family: fonts(nunito), serif;
}

.card-border {
  border: 0.5px solid #f00304 !important;
  box-sizing: border-box !important;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05) !important;
  border-radius: 10px !important;
}
</style>
