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
          <MainInput v-model="bankName" label="Bank Name" inputType="select" :options="getBanksList" :disabled="!banksLoaded" />
          <div class="ab-card__fullname" v-if="isAccountVerified">
            {{ fullname }}
          </div>
        </div>
        <button class="ab-card__btn" tyoe="submit" :disabled="!isAccountVerified">Add Bank</button>
      </form>
    </div>
  </div>
</template>

<script>
import MainInput from "@/components/form/mainInput.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AddBank",
  components: {
    MainInput
  },
  data() {
    return {
      accountNumber: "",
      bankName: "",
      fullname: ""
    };
  },
  methods: {
    ...mapActions(["fetchBanksList"])
  },
  computed: {
    ...mapGetters(["getBanksList"]),
    banksLoaded() {
      return this.getBanksList !== null || this.getBanksList !== undefined;
    },
    isAccountVerified() {
      return !!this.fullname;
    }
  },
  created() {
    this.fetchBanksList();
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
  color: color(bv-grey-800);

  > i {
    margin-right: 0.5em;
  }
}

.ab-card {
  // border: 1px solid green;
  max-width: 30em;
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
    padding: 3em 2.675em 0.5em 2.675em;
    box-shadow: 0.05rem 0.05rem 0.4rem 0.1rem rgba(0, 0, 0, 0.6);
    border-radius: 0.9rem;
    margin: 1.25em 0;

    // @media screen and (max-width: 599px) {
    //   padding: 2.25em 1.675em 0.25em 1.675em;
    // }

    @include breakpoint(mobile-only) {
      // padding: 2.25em 1.675em;
      padding: 2.5em 1.675em 0.05em 1.675em;
    }
  }

  &__input {
    margin-bottom: 1em !important;
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

  &__fullname {
    color: color(bv-white);
    background: color(main-red);
    border-radius: 1.5rem;
    padding: 0.75em 0;
  }
}
</style>
