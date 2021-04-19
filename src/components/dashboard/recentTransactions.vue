<template>
  <div>
    <div class="trans__row trans__row--alt">
      <main-icon name="trans-icon" class="trans__icon" />
      <div class=" ml-2 d-flex flex-column">
        <span class="text-black ft-12"> Funded Wallet with <span :class="`ft-12 text-${status}`">N50000</span></span>
        <span class="ft-12" style="color: #0087db"> 21st Jan. 2021</span>
      </div>
      <span v-if="status === 'success'" :class="`badge badge-${status} ml-auto ft-12 font-weight-normal`">Success</span>
      <span v-else :class="`badge badge-${status} ml-auto ft-12 font-weight-normal`">Failed</span>
    </div>
  </div>
</template>

<script>
import MainIcon from "../Shared/mainIcon.vue";
export default {
  name: "recentTransactions",
  components: { MainIcon },
  props: {
    status: {
      type: String
    },
    transactionText: {
      type: String
    },
    date: {
      type: String
    }
  }
};
</script>

<style scoped></style>
