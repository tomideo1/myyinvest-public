<template>
  <div class="trans__row inv-trans__item">
    <MainIcon name="trans-icon" class="trans__icon" />
    <div :class="['trans__data', { 'trans__data--mbl-hide': isToggled }]">{{ date }}</div>
    <div :class="['trans__data', 'trans__data--green', { 'trans__data--mbl-hide': isToggled }]">N{{ amount }}</div>
    <div :class="['trans__data', { 'trans__data--mbl-hide': isToggled }]">
      {{ purpose }}
    </div>
    <div :class="['trans__data', 'trans__data--green', { 'trans__data--mbl-hide': !isToggled }]">
      {{ payment_channel }}
    </div>
    <div :class="['trans__data', 'trans__data--green', { 'trans__data--mbl-hide': !isToggled }]">
      <span :class="`badge badge-${status} ml-auto ft-12 font-weight-normal`">Success</span>
    </div>
  </div>
</template>

<script>
import MainIcon from "@/components/Shared/mainIcon.vue";

export default {
  name: "userTransactions",
  components: { MainIcon },
  props: {
    date: {
      type: String,
      default: "21st jan. 2021"
    },
    amount: {
      type: Number,
      default: 25000
    },
    purpose: {
      type: String,
      default: "Project"
    },
    payment_channel: {
      type: String,
      default: "Bank Transfer"
    },
    status: {
      type: String,
      default: "success"
    },
    isToggled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped></style>
