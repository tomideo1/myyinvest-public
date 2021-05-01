<template>
  <div class="lst-review">
    <div class="lst-review__header">
      <span class="lst-review__title">{{ title }}</span>
      <div class="lst-review__amount">
        <MainIcon name="green-naira" size="md" color="currentColor" style="width: auto;" />
        <span>{{ amount }}</span>
      </div>
      <span class="lst-review__date">by {{ date }}</span>
    </div>
    <div class="lst-review__content">
      <div class="lst-review__data">
        <div class="lst-review__field">Value of Tokens</div>
        <div class="lst-review__value">
          <MainIcon name="green-naira" size="sm" color="currentColor" style="width: auto;" />
          <span>{{ amount }}</span>
        </div>
      </div>
      <div class="lst-review__data">
        <div class="lst-review__field">Number of Tokens</div>
        <div class="lst-review__value">{{ tokens }}</div>
      </div>
      <div class="lst-review__data">
        <div class="lst-review__field">Payment Frequency</div>
        <div class="lst-review__value">{{ frequency }}</div>
      </div>
      <div class="lst-review__data">
        <div class="lst-review__field">
          <span>Holding Period</span>
          <div class="lst-tooltip lst-review__tooltip" :data-content="holPeriodText">
            <MainIcon name="tooltip" size="xs" />
          </div>
        </div>
        <div class="lst-review__value">{{ holPeriod }} months</div>
      </div>
      <div class="lst-review__data">
        <div class="lst-review__field">
          <slot name="returns-field">
            <span>Return on Investment</span>
            <div class="lst-tooltip lst-review__tooltip" :data-content="returnsText">
              <MainIcon name="tooltip" size="xs" />
            </div>
          </slot>
        </div>
        <div class="lst-review__value">{{ invReturns }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import MainIcon from "@/components/Shared/mainIcon.vue";

export default {
  name: "ListingPlanReview",
  components: { MainIcon },
  props: {
    title: {
      type: String,
      required: false
    },
    amount: {
      type: Number,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    tokens: {
      type: Number,
      required: true
    },
    frequency: {
      type: String,
      required: true
    },
    holPeriod: {
      type: Number,
      required: true
    },
    invReturns: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      holPeriodText: "This means the Duration of the project.",
      returnsText: "This is the Profit on your Investment, it usually has a range for each Plan."
    };
  }
};
</script>
