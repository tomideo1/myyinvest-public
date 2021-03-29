<template>
  <div class="bc-container">
    <nav class="bc-nav">
      <ul class="bc-nav__list">
        <li v-for="item in options" :key="item">
          <a href="javascript:void(0)" :class="['bc-nav__link', { 'bc-nav__link--active': isSelected(item) }]" @click="selected = item">
            {{ item.toUpperCase() }}
          </a>
        </li>
      </ul>
    </nav>

    <div class="bc-cards" v-if="isSelected('banks')">
      <BankItem />
      <AddCardItem text="Add Bank" @click.native="$router.push({ name: 'addbank' })" />
    </div>
    <div class="bc-cards" v-else>
      <!-- <AddCardItem text="Add New Card" @click.native="$router.push({ name: 'addcard' })" /> -->
      <AddCardItem text="Add New Card" @click.native="showModal = true" />
      <div :class="[{ hide: !showModal }, 'ac-modal']">
        <div class="ac-modal__dialog">
          <div class="ac-dialog">
            <p class="ac-dialog__title">Add Card</p>
            <p class="ac-dialog__message">To add and verify your card, <span>N100</span> will be charged and added to your wallet.</p>
          </div>
          <div class="ac-modal__btn-container">
            <button type="button" @click="showModal = false" class="ac-modal__btn ac-modal__btn--grey">Cancel</button>
            <paystack class="ac-modal__btn ac-modal__btn--red" :amount="amount" :email="email" :paystackkey="paystackkey" :reference="reference" :callback="callback" :close="close" :embed="false">
              Proceed
            </paystack>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BankItem from "../../components/BankItem.vue";
import AddCardItem from "../../components/AddCardItem";
import { mapGetters } from "vuex";
import paystack from "vue-paystack";

export default {
  name: "BanksAndCards",
  components: {
    AddCardItem,
    BankItem,
    paystack
  },
  data() {
    return {
      selected: "banks",
      options: ["banks", "cards"],
      showModal: false,
      paystackkey: "",
      email: "",
      amount: 100000
    };
  },
  methods: {
    isSelected(item) {
      return this.selected === item;
    },
    callback(response) {
      console.log(response);
    },
    close() {
      console.log("Payment closed");
    }
  },
  computed: {
    ...mapGetters(["getUser"]),
    reference() {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }
  },
  mounted() {
    this.email = this.getUser.email;
  }
};
</script>

<style lang="scss" scoped>
.bc-container {
  // border: 1px solid black;
  width: 100%;
  max-width: 85.75em;
  margin: 0 auto;

  @include breakpoint(tablet-potrait-up) {
    padding: 0 1em;
  }

  // @media screen and (min-width: 600px) {
  //   padding: 0 1em;
  // }
}

.bc-nav {
  width: 100%;
  border-radius: 1.9rem;
  box-shadow: 0 0.03rem 0.2rem 0 rgba(0, 0, 0, 0.6);
  overflow: hidden;

  &__list {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;

    > li {
      flex: 1;
    }
  }

  &__link {
    display: block;
    padding: 0.35em 0;
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
    background: color(bv-white);
    color: color(main-red);

    // @media screen and (max-width: 599px) {
    //   font-size: 1.05rem;
    // }

    @include breakpoint(mobile-only) {
      font-size: 1.05rem;
    }

    &:hover,
    &:focus {
      background: color(bv-grey-100);
    }

    &--active {
      background: color(main-red) !important;
      color: color(bv-white);
      pointer-events: none;
    }
  }
}

.bc-cards {
  // border: 1px solid black;
  padding: 2.75em 0;
  display: grid;
  row-gap: 2.75em;
  grid-template-columns: minmax(40%, 28.25em);
  justify-content: center;

  @media screen and (min-width: 769px) {
    grid-template-columns: repeat(auto-fit, 28.75em);
    justify-content: space-between;
    padding-left: 2.375em;
    padding-right: 2.375em;
  }
}

.ac-modal {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;

  &__dialog {
    background: color(bv-white);
    min-height: 15em;
    width: 92%;
    max-width: 28.75em;
    padding: 2em 1.5em;
    border-radius: 0.9rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__btn-container {
    display: flex;
    justify-content: space-evenly;
  }

  &__btn {
    padding: 0.625em 1.5em;
    font-size: 92% !important;
    border-radius: 0.5rem;
    border: 1px solid transparent;

    &--red {
      color: color(bv-white);
      background: color(main-red);
    }

    &--grey {
      background: #f2f2f2;
      color: color(main-red);
    }
  }
}

.ac-dialog {
  text-align: center;

  &__title {
    color: color(main-red);
    font-size: 115% !important;
    font-weight: 500;
  }

  &__message {
    font-size: 1.05rem !important;

    > span {
      color: color(main-red);
    }
  }
}

.hide {
  display: none;
}
</style>
