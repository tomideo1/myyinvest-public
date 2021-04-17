<template>
  <ListingDetail v-if="getRouteSlug === 'income-plan'" @reset-params="resetIncomeParams">
    <template #title>
      Income Plan
    </template>
    <template #modal-content>
      <template v-if="transactionStep === 1">
        <p class="lst-modal__title">Income Plan</p>
        <div class="lst-modal__input-container">
          <MainInput type="number" label="Tokens" v-model="tokens" :required="true" />
          <MainInput type="number" label="Amount (N)" :disable="true" :value="tokens * 10000" />
        </div>
        <button type="button" class="lst-modal__btn" :disabled="tokens <= 0" @click="transactionStep++">
          <span>Continue</span>
          <MainIcon name="caret" />
        </button>
      </template>
      <template v-if="transactionStep === 2">
        <p class="lst-modal__title"></p>
      </template>
    </template>
  </ListingDetail>

  <ListingDetail v-else-if="getRouteSlug === 'rental-plan'">
    <template #title>
      Rental Plan
    </template>
  </ListingDetail>

  <ListingDetail v-else-if="getRouteSlug === 'special-plan'">
    <template #title>
      Special Plan
    </template>
  </ListingDetail>

  <!-- <div class="listing-dtl">
    <p class="listing-dtl__title">
      <slot name="title">Income Plan</slot>
    </p>
    <section class="listing-dtl__info">
      <Carousel class="listing-dtl__carousel" :autoplay="false" :nav="false" :items="1">
        <div v-for="i in 4" :key="i">
          <img class="listing-dtl__img" src="https://res.cloudinary.com/dwpu7jpku/image/upload/v1612297295/listings_mfl4io.png" alt="image" />
        </div>
      </Carousel>
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
              <-- <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M34.755 12.495C31.8242 9.75075 28.0208 8.24644 23.9858 8.25C16.7241 8.25637 10.455 13.2354 8.72409 20.1422C8.59809 20.645 8.15016 21 7.63181 21H2.25966C1.55672 21 1.02272 20.3618 1.15275 19.671C3.18122 8.89913 12.6387 0.75 24 0.75C30.2295 0.75 35.8867 3.20025 40.0608 7.18922L43.4091 3.84094C44.8265 2.42353 47.25 3.42741 47.25 5.43197V18C47.25 19.2427 46.2427 20.25 45 20.25H32.432C30.4274 20.25 29.4235 17.8265 30.8409 16.409L34.755 12.495ZM3 27.75H15.568C17.5726 27.75 18.5765 30.1735 17.1591 31.591L13.245 35.5051C16.1758 38.2494 19.9795 39.7537 24.0146 39.7501C31.2726 39.7435 37.5442 34.7678 39.2759 27.858C39.4019 27.3552 39.8498 27.0002 40.3682 27.0002H45.7404C46.4434 27.0002 46.9774 27.6383 46.8473 28.3292C44.8188 39.1009 35.3613 47.25 24 47.25C17.7705 47.25 12.1133 44.7998 7.93922 40.8108L4.59094 44.1591C3.17353 45.5765 0.75 44.5726 0.75 42.568V30C0.75 28.7573 1.75734 27.75 3 27.75Z"
                  fill="#C10000"
                />
              </svg> ->
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
          <MainIcon name="close" size="xl" @click.native="isModalVisible = false" />
        </div>
        <div class="lst-modal__content">
          <p class="lst-modal__title">Income Plan</p>
          <div class="lst-modal__input-container">
            <MainInput type="number" label="Tokens" v-model="tokens" :required="true" />
            <MainInput type="number" label="Amount (N)" :disable="true" :value="tokens * 10000" />
          </div>
          <button type="button" class="lst-modal__btn" :disabled="tokens <= 0">
            <span>Continue</span>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path
                  d="M6 0.978666L6 9.01929C6 9.57554 6.67188 9.85367 7.06563 9.45992L11.0875 5.44117C11.3312 5.19742 11.3312 4.80054 11.0875 4.55679L7.06563 0.538041C6.67188 0.144291 6 0.422416 6 0.978666Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="10" height="16" fill="white" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import ListingDetail from "@/components/Shared/listings/ListingDetail.vue";
import MainInput from "@/components/form/mainInput.vue";
import MainIcon from "@/components/Shared/mainIcon.vue";
// import Carousel from "vue-owl-carousel2";
// import ListingInfoCard from "@/components/ListingInfoCard.vue";

export default {
  name: "singleListing",
  components: {
    ListingDetail,
    MainInput,
    MainIcon
    // ListingInfoCard,
    // Carousel,
  },
  data() {
    return {
      // isModalVisible: false,
      tokens: 0,
      transactionStep: 1
    };
  },
  methods: {
    resetIncomeParams() {
      console.log("reset");
    }
  },
  computed: {
    getRouteSlug() {
      return this.$route.params.slug;
    }
  }
};
</script>
