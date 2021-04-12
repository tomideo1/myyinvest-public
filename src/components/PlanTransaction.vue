<template>
  <div class="trans__row plan-trans__item">
    <MainIcon name="trans-icon" class="trans__icon" />
    <div class="trans__data">{{ date }}</div>
    <div class="trans__data">{{ project }}</div>
    <div class="trans__data trans__data--red">N{{ amount }}</div>
    <div class="trans__data trans__data--sm trans__data--red">{{ tokens }}</div>
    <div class="trans__data trans__data--sm trans__data--green">{{ roi }}%</div>
    <div class="trans__data">{{ startDate }}</div>
    <div class="trans__data">{{ endDate }}</div>
    <div class="trans__data trans__data--md trans__data--green">
      <a href="#">VIEW</a>
    </div>
  </div>
</template>

<script>
import MainIcon from "./Shared/mainIcon.vue";

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
    }
  }
};
</script>
