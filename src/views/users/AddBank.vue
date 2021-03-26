<template>
  <div>
    <button class="ab-back-btn" @click="$router.push({ name: 'banks' })">
      <i class="fas fa-arrow-left"></i>
      Go Back
    </button>
    <div class="ab-card">
      <p class="ab-card__header">Add your bank details</p>
      <form method="POST" @submit.prevent="" class="ab-card__form">
        <div class="ab-card__input-box">
          <MainInput v-model="accountNumber" label="Account Number" />
          <MainInput v-model="bankName" label="Bank Name" inputType="select" :options="banks" />
        </div>
        <button class="ab-card__btn" tyoe="submit" :disabled="true">Add Bank</button>
      </form>
    </div>
  </div>
</template>

<script>
import MainInput from "@/components/form/mainInput.vue";

export default {
  name: "AddBank",
  components: {
    MainInput
  },
  data() {
    return {
      accountNumber: "",
      bankName: "",
      banks: [
        { key: "Access Bank", value: "accessbank" },
        { key: "GoMoney", value: "gomoney" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.ab-back-btn {
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  font-size: 98%;

  > i {
    color: grey;
    margin-right: 0.5em;
  }
}

.ab-card {
  // border: 1px solid green;
  max-width: 32em;
  margin: 0 auto;
  text-align: center;
  padding-top: 2.5em;

  &__header {
    font-weight: 600;
    font-size: 1.075rem !important;
  }

  &__form {
    padding: 0;
  }

  &__input-box {
    padding: 3.25em 2.5em 1.25em 2.5em;
    box-shadow: 0.05rem 0.05rem 0.2rem 0.05rem rgba(0, 0, 0, 0.6);
    border-radius: 0.75rem;
    margin: 1.25em 0;

    // @media screen and (max-width: 599px) {
    //   padding: 2.25em 1.675em 0.25em 1.675em;
    // }

    @include breakpoint(mobile-only) {
      padding: 2.25em 1.675em 0.25em 1.675em;
    }
  }

  &__btn {
    width: 100%;
    background: color(main-red);
    color: #fff;
    border: 1px solid transparent;
    border-radius: $border-radius;
    padding: 0.725em 0;
    box-shadow: 0.05rem 0.05rem 0.2rem 0.05rem rgba(0, 0, 0, 0.6);

    &:hover {
      background-color: #b90101;
    }
  }
}
</style>
