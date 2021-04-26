<template>
  <div class="trans__row ref-trans__item">
    <MainIcon name="trans-icon" class="trans__icon" />
    <div class="trans__data">{{ date }}</div>
    <div class="trans__data">{{ name }}</div>
    <div class="trans__data">{{ project }}</div>
    <div class="trans__data">N{{ commission }}</div>
    <div class="trans__data">{{ status }}</div>
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
      name: String,
      default: "cambridge appointments"
    },
    commission: {
      name: Number,
      default: 5000
    },
    status: {
      name: String,
      default: "Not Invested"
    }
  }
};
</script>
