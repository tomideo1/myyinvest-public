<template>
  <div>
    <div class="inv-plan__content">
      <div class="trans inv-trans">
        <div class="d-flex flex-row">
          <p class="ft-14 mt-4 font-light">Transactions</p>
          <main-input class="col-md-3 ml-auto" label="Filter" input-type="select" :options="filters" />
        </div>
        <div class="trans__row inv-trans__heading">
          <div :class="['trans__head', { 'trans__head--mbl-hide': isTableToggled }]">date</div>
          <div :class="['trans__head', { 'trans__head--mbl-hide': isTableToggled }]">Amount</div>
          <div :class="['trans__head', { 'trans__head--mbl-hide': isTableToggled }]">From</div>
          <div :class="['trans__head', { 'trans__head--mbl-hide': isTableToggled }]">Payment Channel</div>
          <div :class="['trans__head', { 'trans__head--mbl-hide': !isTableToggled }]">Status</div>
        </div>
        <user-transactions v-for="i in 10" :key="i" @display-popup="isModalVisible = true" :is-toggled="isTableToggled" />
        <div class="trans__pagination">
          <button type="button" class="trans__btn trans__btn--lg">Previous</button>
          <button type="button" class="trans__btn" :class="{ 'trans__btn--active': num === 1 }" v-for="num in 4" :key="num">
            {{ num }}
          </button>
          <button type="button" class="trans__btn trans__btn--lg">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userTransactions from "@/components/users/userTransactions.vue";
import MainInput from "@/components/form/mainInput.vue";

export default {
  data() {
    return {
      isModalVisible: false,
      isTableToggled: false,
      filters: ["select By Date"]
    };
  },
  components: {
    userTransactions,
    MainInput
  }
};
</script>
