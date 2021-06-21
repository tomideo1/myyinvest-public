<template>
  <div class="trans__row inv-trans__item">
    <MainIcon name="trans-icon" class="trans__icon" />
    <div :class="['trans__data', { 'trans__data--mbl-hide': isToggled }]">{{ date }}</div>
    <div :class="['trans__data', { 'trans__data--mbl-hide': isToggled }]">{{ project }}</div>
    <div :class="['trans__data', 'trans__data--red', { 'trans__data--mbl-hide': isToggled }]">N{{ amount }}</div>
    <div :class="['trans__data', 'trans__data--md', 'trans__data--red', { 'trans__data--mbl-hide': isToggled }]">
      {{ tokens }}
    </div>
    <div :class="['trans__data', 'trans__data--md', 'trans__data--green', { 'trans__data--mbl-hide': !isToggled }]">{{ roi }}%</div>
    <div :class="['trans__data', { 'trans__data--mbl-hide': !isToggled }]">{{ startDate }}</div>
    <div :class="['trans__data', { 'trans__data--mbl-hide': !isToggled }]">{{ endDate }}</div>
    <div :class="['trans__data', 'trans__data--sm', 'trans__data--green', { 'trans__data--mbl-hide': !isToggled }]">
      <a class="inv-trans__link" href="javascript:void(0)" @click="$emit('display-popup')">VIEW</a>
    </div>
  </div>
</template>

<script>
import MainIcon from "@/components/Shared/mainIcon.vue";

export default {
  name: "PlanTransaction",
  components: { MainIcon },
  props: {
    date: {
      type: String,
      default: "21st jan. 2021"
    },
    project: {
      type: String,
      default: "project"
    },
    amount: {
      type: Number,
      default: 25000
    },
    tokens: {
      type: Number,
      default: 5
    },
    roi: {
      type: Number,
      default: 10
    },
    startDate: {
      type: String,
      default: "21st jan. 2021"
    },
    endDate: {
      type: String,
      default: "21st Dec. 2021"
    },
    isToggled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
