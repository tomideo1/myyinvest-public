<template>
  <div class="b-item">
    <div class="b-item__info">
      <p>Valentine Chinedu Offah</p>
      <p>Access Bank</p>
    </div>
    <div class="b-item__number">
      <p>0690588682</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BankItem"
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
  display: flex;
  // flex-direction: column;
  justify-content: space-evenly;
  font-size: 1.0325rem;
  transition: box-shadow 0.3s ease;

  @media screen and (max-width: 599px) {
    font-size: 0.9275rem;
  }

  p {
    font-size: inherit !important;
    text-shadow: 0.05rem 0.05rem 0.25rem rgba(0, 0, 0, 0.6);
  }

  &__info {
    align-self: center;

    > p:first-child {
      font-size: 110% !important;
    }
  }

  &__number {
    align-self: flex-end;
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
