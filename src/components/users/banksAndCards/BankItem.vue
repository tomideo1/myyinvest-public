<template>
  <div class="bank-item bc-card">
    <div class="bank-item__info">
      <p>{{ accountName }}</p>
      <p>{{ bankName }}</p>
    </div>
    <div class="bank-item__number">
      <p>{{ accountNumber }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BankItem",
  props: {
    accountName: {
      type: String
    },
    bankName: {
      type: String
    },
    accountNumber: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.bank-item {
  background: linear-gradient(to top right, #950404 15%, color(main-red), #950404 72.5%, color(main-red));
  color: color(bv-white);
  padding: 0.75em;
  position: relative;

  p {
    font-size: inherit !important;
    text-shadow: 0.05rem 0.05rem 0.25rem rgba(0, 0, 0, 0.6);
  }

  &__info {
    // align-self: center;
    position: absolute;
    top: 50%;
    left: 8.75%;
    transform: translateY(-50%);

    > p:first-child {
      font-size: 110% !important;
    }
  }

  &__number {
    // border: 1px solid green;
    // align-self: flex-end;
    position: absolute;
    bottom: 7.5%;
    right: 8.75%;
  }
}
</style>
