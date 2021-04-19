<template>
  <div class="listing-item">
    <div class="listing-item__img-container">
      <slot name="image" class-name="listing-item__img"></slot>
    </div>
    <div class="listing-item__details">
      <section class="listing-item__plan-summary">
        <p class="listing-item__title">
          <slot name="title"></slot>
        </p>
        <div>
          <span class="listing-item__sub-title">Returns</span>
          <p class="listing-item__returns">
            <slot name="returns">
              30% - 40%
            </slot>
          </p>
        </div>
        <div>
          <span class="listing-item__sub-title">Minimum Investment</span>
          <p class="listing-item__min-invest">
            <MainIcon name="green-naira" size="retain" />
            <span>
              <slot name="min-invest">10000</slot>
            </span>
          </p>
        </div>
      </section>
      <section>
        <div>
          <p class="listing-item__sub-title listing-item__sub-title--red">Benefits</p>
          <div class="listing-item__benefits">
            <slot name="benefits">
              <p>Higher Returns</p>
              <p>Ownership</p>
              <p>Voting Right</p>
            </slot>
          </div>
        </div>
        <button type="button" @click="$router.push({ name: 'single-listing', params: { slug } })" class="listing-item__btn">
          Get Started
        </button>
        <router-link :to="{ name: 'single-listing', params: { slug } }" class="listing-item__link">
          Learn more
        </router-link>
        <!-- <a href="#" class="listing-item__link">Learn more</a> -->
      </section>
    </div>
  </div>
</template>

<script>
import MainIcon from "@/components/Shared/mainIcon.vue";

export default {
  name: "ListingItem",
  components: { MainIcon },
  props: {
    slug: {
      type: String,
      required: true
    }
  }
};
</script>
