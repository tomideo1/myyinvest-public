<template>
  <div class="listing-dtl">
    <p class="listing-dtl__title">
      <slot name="title"></slot>
    </p>
    <section class="listing-dtl__info">
      <!-- <div class="listing-dtl__carousel"> -->
      <Carousel class="listing-dtl__carousel" :autoplay="false" :nav="false" :items="1">
        <div v-for="i in 4" :key="i">
          <img class="listing-dtl__img" src="https://res.cloudinary.com/dwpu7jpku/image/upload/v1612297295/listings_mfl4io.png" alt="image" />
        </div>
      </Carousel>
      <!-- </div> -->
      <div class="listing-dtl__plan-section">
        <div class="listing-dtl__summary">
          <ListingInfoCard value-color="green" :tooltip-text="minInvestText">
            <template #icon>
              <svg width="72" height="43" viewBox="0 0 72 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M36 8.95833C30.0352 8.95833 25.2 14.573 25.2 21.5C25.2 28.4259 30.0352 34.0417 36 34.0417C41.9625 34.0417 46.8 28.4282 46.8 21.5C46.8 14.573 41.9647 8.95833 36 8.95833ZM40.5 27.7708C40.5 28.2658 40.0972 28.6667 39.6 28.6667H32.4C31.9027 28.6667 31.5 28.2658 31.5 27.7708V25.9792C31.5 25.4842 31.9027 25.0833 32.4 25.0833H34.2V18.8752L34.1471 18.9099C34.0488 18.9752 33.9386 19.0206 33.8226 19.0434C33.7067 19.0663 33.5874 19.0662 33.4715 19.0431C33.3557 19.02 33.2455 18.9744 33.1473 18.9089C33.0492 18.8434 32.965 18.7593 32.8995 18.6613L31.9005 17.1709C31.8349 17.073 31.7893 16.9633 31.7664 16.8479C31.7434 16.7325 31.7435 16.6138 31.7667 16.4984C31.7899 16.3831 31.8357 16.2734 31.9016 16.1757C31.9674 16.078 32.0519 15.9942 32.1502 15.929L33.8749 14.7846C34.3183 14.4903 34.8393 14.3333 35.3722 14.3333H36.9C37.3972 14.3333 37.8 14.7342 37.8 15.2292V25.0833H39.6C40.0972 25.0833 40.5 25.4842 40.5 25.9792V27.7708ZM68.4 0H3.6C1.61212 0 0 1.60466 0 3.58333V39.4167C0 41.3953 1.61212 43 3.6 43H68.4C70.3879 43 72 41.3953 72 39.4167V3.58333C72 1.60466 70.3879 0 68.4 0ZM66.6 30.4583C62.6231 30.4583 59.4 33.6665 59.4 37.625H12.6C12.6 33.6665 9.37687 30.4583 5.4 30.4583V12.5417C9.37687 12.5417 12.6 9.33346 12.6 5.375H59.4C59.4 9.33346 62.6231 12.5417 66.6 12.5417V30.4583Z"
                  fill="#C10000"
                />
              </svg>
            </template>
            <template #title>
              Minimum Investment
            </template>
            <template #value>
              <MainIcon name="green-naira" size="md" />
              5000
            </template>
          </ListingInfoCard>

          <ListingInfoCard :tooltip-text="returnsText">
            <template #icon>
              <MainIcon name="roi" size="xl" />
            </template>
            <template #title>
              Returns (ROI)
            </template>
            <template #value>
              25% - 30%
            </template>
          </ListingInfoCard>

          <ListingInfoCard :tooltip-text="holPeriodText">
            <template #icon>
              <MainIcon name="clock" size="lg" />
            </template>
            <template #title>
              Holding period
            </template>
            <template #value>
              6 - 12 Months
            </template>
          </ListingInfoCard>

          <ListingInfoCard :tooltip-text="invPurposeText">
            <template #icon>
              <MainIcon name="building" size="lg" />
            </template>
            <template #title>
              investment purpose
            </template>
            <template #value>
              25% - 30%
            </template>
          </ListingInfoCard>
        </div>
        <div>
          <button type="button" class="listing-dtl__btn" @click="isModalVisible = true">Invest Now</button>
        </div>
      </div>
    </section>
    <div class="listing-dtl__box">
      <button type="button" class="listing-dtl__btn">Project Details</button>
      <button type="button" class="listing-dtl__btn listing-dtl__btn--white">Multimedia</button>
    </div>

    <div class="listing-dtl__card-container">
      <div class="lst-card">
        <h4 class="lst-card__title">Project Details</h4>
        <div>
          <p class="lst-card__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quae. Ex maiores obcaecati ab nam earum, officiis magni? Velit inventore quae magnam suscipit minus vitae porro nobis
            debitis dolorum at!
          </p>
          <p class="lst-card__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quae. Ex maiores obcaecati ab nam earum, officiis magni? Velit inventore quae magnam suscipit minus vitae porro nobis
            debitis dolorum at!
          </p>
        </div>
      </div>
      <div class="lst-card">
        <h4 class="lst-card__title">Governance Bodies</h4>
        <div class="lst-card__section">
          <h6>FUNX REALITY</h6>
          <span class="lst-card__text lst-card__text--sm">21 Community Rd. Akoka,</span>
          <span class="lst-card__text lst-card__text--sm">Lagos.</span>
          <p class="lst-card__text lst-card__text--md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quae. Ex maiores obcaecati ab nam earum, officiis magni? Velit inventore quae magnam suscipit minus vitae porro nobis
            debitis dolorum at!
          </p>
        </div>
        <div class="lst-card__section">
          <h6>FUNX REALITY</h6>
          <span class="lst-card__text lst-card__text--sm">21 Community Rd. Akoka,</span>
          <span class="lst-card__text lst-card__text--sm">Lagos.</span>
          <p class="lst-card__text lst-card__text--md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quae. Ex maiores obcaecati ab nam earum, officiis magni? Velit inventore quae magnam suscipit minus vitae porro nobis
            debitis dolorum at!
          </p>
        </div>
      </div>
    </div>
    <div class="listing-dtl__box">
      <button type="button" class="listing-dtl__btn">Download Brochure</button>
      <button type="button" class="listing-dtl__btn">Download Legal Agreement</button>
    </div>

    <div :class="['lst-modal', { 'lst-modal--hidden': !isModalVisible }]">
      <div class="lst-modal__dialog-box">
        <div class="lst-modal__close-icon">
          <MainIcon name="close" size="xl" @click.native="closeModal" />
        </div>
        <div class="lst-modal__content">
          <slot name="modal-content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "vue-owl-carousel2";
import ListingInfoCard from "@/components/ListingInfoCard.vue";
import MainIcon from "@/components/Shared/mainIcon.vue";

export default {
  name: "ListingDetail",
  components: {
    ListingInfoCard,
    Carousel,
    MainIcon
  },
  data() {
    return {
      isModalVisible: false,
      minInvestText: "This is the smallest amount you can start this plan for and you can always invest more.",
      returnsText: "This is the Profit on your Investment, it usually has a range for each Plan.",
      holPeriodText: "This is the Duration for each asset before your Capital & returns are paid.",
      invPurposeText: "The assets in this plan are solely for development."
    };
  },
  methods: {
    closeModal() {
      this.isModalVisible = false;
      this.$emit("reset-params");
    }
  }
};
</script>
