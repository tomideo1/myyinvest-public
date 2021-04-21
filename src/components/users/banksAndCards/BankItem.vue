<template>
  <div class="b-item">
    <div class="b-item__info">
      <p>{{ accountName }}</p>
      <p>{{ bankName }}</p>
    </div>
    <div class="b-item__number">
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
.b-item {
  border: 1px solid rgba(193, 0, 0, 0.6);
  box-shadow: 0.025rem 0.025rem 0.25rem 0 rgba(0, 0, 0, 0.5);
  border-radius: 0.9rem;
  // background: color(main-red);
  background: linear-gradient(to top right, #950404 15%, color(main-red), #950404 72.5%, color(main-red));
  color: color(bv-white);
  height: 15.25em;
  padding: 0.75em;
  // display: flex;
  // justify-content: space-evenly;
  font-size: 1.0325rem;
  position: relative;
  transition: box-shadow 0.3s ease;

  // @media screen and (max-width: 599px) {
  //   font-size: 0.9275rem;
  // }
  @include breakpoint(mobile-only) {
    font-size: 0.935rem;
  }

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

  &:hover,
  &:focus {
    box-shadow: 0.05rem 0.05rem 0.3rem 0 rgba(0, 0, 0, 0.6);
  }

  &:focus {
    outline: none;
  }
}
</style>
