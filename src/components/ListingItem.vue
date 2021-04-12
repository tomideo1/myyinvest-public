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
            <svg width="19" height="36" viewBox="0 0 19 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 26H13.816L5.032 12.68V26H2.848V9.248H5.032L13.816 22.544V9.248H16V26Z" fill="#068503" />
              <line y1="14" x2="19" y2="14" stroke="#068503" stroke-width="2" />
              <line y1="20" x2="19" y2="20" stroke="#068503" stroke-width="2" />
            </svg>
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
        <button type="button" class="listing-item__btn">Get Started</button>
        <a href="#" class="listing-item__link">Learn more</a>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListingItem"
};
</script>
