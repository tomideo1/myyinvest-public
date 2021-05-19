<template>
  <div class="pofl-item">
    <div class="pofl-item__img-container">
      <slot name="image" class-name="pofl-item__img"></slot>
    </div>
    <div class="pofl-item__info">
      <p class="pofl-item__title">
        <slot name="title"></slot>
      </p>
      <div class="pofl-item__data">
        <div class="pofl-data">
          <p class="pofl-data__title">Capital Invested</p>
          <div class="pofl-data__value pofl-data__value--alt">
            <MainIcon name="naira" class="pofl-data__icon" />
            <span>125,000</span>
          </div>
        </div>
        <div class="pofl-data">
          <p class="pofl-data__title">Accumulated Returns</p>
          <div class="pofl-data__value pofl-data__value--alt">
            <MainIcon name="naira" class="pofl-data__icon" />
            <span>125,000</span>
          </div>
        </div>
      </div>
      <div class="pofl-item__data">
        <div class="pofl-data">
          <p class="pofl-data__title">Number of Projects</p>
          <p class="pofl-data__value">3</p>
        </div>
        <div class="pofl-data">
          <p class="pofl-data__title">Number of Tokens</p>
          <p class="pofl-data__value">3</p>
        </div>
      </div>
    </div>
    <div class="pofl-item__link-container">
      <router-link class="pofl-item__link" :to="{ name: 'portfolio-plan', params: { slug } }">
        view more
      </router-link>
    </div>
  </div>
</template>

<script>
import MainIcon from "@/components/Shared/mainIcon.vue";

export default {
  name: "PortfolioItem",
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  components: {
    MainIcon
  }
};
</script>
