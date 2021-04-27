<template>
  <div class="lst-review">
    <div class="lst-review__header">
      <span class="lst-review__title">{{ title }}</span>
      <div class="lst-review__amount">
        <MainIcon name="naira" size="xs" />
        <span>{{ amount }}</span>
      </div>
      <span class="lst-review__date">by {{ date }}</span>
    </div>
    <div class="lst-review__content">
      <div class="lst-review__data">
        <div class="lst-review__field">Value of Tokens</div>
        <div class="lst-review__value">{{ amount }}</div>
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
          <MainIcon name="tooltip" size="xs" />
        </div>
        <div class="lst-review__value">{{ holPeriod }}</div>
      </div>
      <div class="lst-review__data">
        <div class="lst-review__field">
          <slot name="returns-field">
            <span>Return on Investment</span>
            <MainIcon name="tooltip" size="xs" />
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
      type: String,
      required: true
    },
    invReturns: {
      type: String,
      required: true
    }
  }
};
</script>
