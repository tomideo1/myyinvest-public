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

    <div class="bc-card-container">
      <template v-if="isSelected('banks')">
        <BankItem v-for="(bank, index) in getUserBanks" :key="index" :accountName="bank.nameOnBank" :bankName="bank.bankName" :accountNumber="bank.accountNumber" />
        <AddItemCard text="Add Bank" @click.native="$router.push({ name: 'addbank' })" />
      </template>

      <template v-else>
        <AddItemCard text="Add New Card" @click.native="isModalVisible = true" />
        <Modal class="ac-modal" :config="{ isVisible: isModalVisible, size: 'md' }">
          <div class="ac-modal__info-container">
            <MainIcon name="bank-card" size="lg" class="ac-modal__card-icon" />
            <p class="ac-modal__title">Add Card</p>
            <p class="ac-modal__text">To add and verify your card, <span>N100</span> will be charged and added to your wallet.</p>
          </div>
          <div class="ac-modal__btn-container">
            <button type="button" @click="closeModal" class="ac-modal__btn ac-modal__btn--grey">Cancel</button>
            <paystack class="ac-modal__btn ac-modal__btn--red" :amount="amount" :email="email" :paystackkey="paystackkey" :reference="reference" :callback="callback" :close="close" :embed="false">
              Proceed
            </paystack>
          </div>
        </Modal>
      </template>
    </div>
  </div>
</template>

<script>
import BankItem from "@/components/users/banksAndCards/BankItem.vue";
import AddItemCard from "@/components/users/banksAndCards/AddItemCard.vue";
import MainIcon from "@/components/Shared/mainIcon.vue";
import Modal from "@/components/Shared/modal.vue";
import { mapActions, mapGetters } from "vuex";
import paystack from "vue-paystack";

export default {
  name: "BanksAndCards",
  components: {
    AddItemCard,
    BankItem,
    MainIcon,
    Modal,
    paystack
  },
  data() {
    return {
      selected: "banks",
      options: ["banks", "cards"],
      isModalVisible: false,
      paystackkey: "pk_test_3e2046f06f81fa68d9fb35799164e9845912f526",
      email: "",
      amount: 10000
    };
  },
  methods: {
    ...mapActions(["fetchUserBanks", "fetchUserCards", "verifyCardTransaction"]),
    isSelected(item) {
      return this.selected === item;
    },
    async callback(response) {
      this.closeModal();
      const payload = { referenceId: response.reference, email: this.email };
      const res = await this.verifyCardTransaction(payload);
      console.log(res.data);
    },
    close() {
      this.closeModal();
      console.log("Payment Closed");
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  computed: {
    ...mapGetters(["getUser", "getUserBanks"]),
    reference() {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }
  },
  created() {
    this.fetchUserBanks();
    this.fetchUserCards();
  },
  mounted() {
    this.email = this.getUser.email;
  }
};
</script>
