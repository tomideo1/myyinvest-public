<template>
  <div class="trans__item">
    <MainIcon name="trans-icon" />
    <div>{{ date }}</div>
    <div>{{ name }}</div>
    <div>{{ project }}</div>
    <div>N{{ commission }}</div>
    <div>{{ status }}</div>
  </div>
</template>

<script>
import MainIcon from "./Shared/mainIcon.vue";

export default {
  name: "ReferTrasanction",
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
  },
  components: { MainIcon }
};
</script>
