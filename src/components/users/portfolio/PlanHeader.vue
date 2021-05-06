<template>
  <div class="inv-plan__header">
    <p class="inv-plan__title">
      {{ title }}
    </p>
    <div class="inv-plan__status">
      <label class="inv-switch">
        <input type="checkbox" class="inv-switch__checkbox" v-model="isChecked" />
        <span class="inv-switch__slider"></span>
      </label>
      <p>Plan is {{ isChecked ? "Active" : "Paused" }}</p>
    </div>
    <PlanSummary v-if="showSummary" :earnings="earnings" :capital="capital" />
  </div>
</template>

<script>
import PlanSummary from "./PlanSummary.vue";

export default {
  name: "PlanHeader",
  components: {
    PlanSummary
  },
  // add boolean show summary
  props: {
    title: {
      type: String,
      required: true
    },
    showSummary: {
      type: Boolean,
      default: true
    },
    earnings: {
      type: Number,
      required: false
    },
    capital: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      isChecked: false
    };
  }
};
</script>
