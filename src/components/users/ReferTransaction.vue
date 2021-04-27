<template>
  <div class="trans__row ref-trans__item">
    <MainIcon name="trans-icon" class="trans__icon" />
    <div :class="['trans__data', { 'trans__data--mbl-hide': isToggled }]">{{ date }}</div>
    <div :class="['trans__data', 'trans__data--lg', { 'trans__data--mbl-hide': isToggled }]">{{ name }}</div>
    <div :class="['trans__data', 'trans__data--lg', { 'trans__data--mbl-hide': isToggled }]">{{ project }}</div>
    <div :class="['trans__data', 'trans__data--green', { 'trans__data--mbl-hide': !isToggled }]">N{{ commission }}</div>
    <div :class="['trans__data', { 'trans__data--mbl-hide': !isToggled }]">{{ status }}</div>
  </div>
</template>

<script>
import MainIcon from "../Shared/mainIcon.vue";

export default {
  name: "ReferTrasanction",
  components: { MainIcon },
  props: {
    date: {
      type: String,
      default: "21st jan. 2021"
    },
    name: {
      type: String,
      default: "saviour amara"
    },
    project: {
      type: String,
      default: "cambridge appointments"
    },
    commission: {
      type: Number,
      default: 5000
    },
    status: {
      type: String,
      default: "Not Invested"
    },
    isToggled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
