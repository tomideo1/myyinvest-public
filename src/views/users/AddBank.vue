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
          <MainInput v-model="bank.account_number" label="Account Number" />
          <MainInput v-model="bank.code" label="Bank Name" inputType="select" :options="getBankList" :disabled="!isBankListLoaded" />
          <div class="ab-card__fullname" v-if="isAccountVerified">
            {{ fullname }}
          </div>
        </div>
        <button class="ab-card__btn" type="button" v-if="!isAccountVerified" @click="verifyUserDetails" :disabled="isLoading || !isEachFieldFilled">
          {{ verifyBtnText }}
        </button>
        <button class="ab-card__btn" type="submit" v-if="isAccountVerified" :disabled="isLoading">
          Add Bank
        </button>
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
      bank: {
        account_number: "",
        code: ""
      },
      fullname: "",
      verifyBtnText: "Continue",
      isAccountVerified: false,
      isLoading: false
    };
  },
  methods: {
    ...mapActions(["fetchBankList", "verifyBankAccount"]),
    async verifyUserDetails() {
      this.verifyBtnText = "Verifying...";
      this.isLoading = true;
      const res = await this.verifyBankAccount(this.bank);
      if (res.status === 200 || res.status === 201) {
        console.log(res.data);
        // this.verifyBtnText = "Continue";
      } else {
        // this.verifyBtnText = "Continue";
      }
      this.verifyBtnText = "Continue";
      console.log(res.data);
    }
  },
  computed: {
    ...mapGetters(["getBankList"]),
    isBankListLoaded() {
      return this.getBankList && this.getBankList !== [];
    },
    isEachFieldFilled() {
      return this.bank.account_number.length >= 8 && this.bank.code;
    }
    // isAccountVerified() {
    //   return !!this.fullname;
    // }
  },
  created() {
    this.fetchBankList();
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
    box-shadow: 0.05rem 0.05rem 0.35rem 0.05rem rgba(0, 0, 0, 0.6);
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
