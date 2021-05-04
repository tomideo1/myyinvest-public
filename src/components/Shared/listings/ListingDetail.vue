<template>
  <div class="listing-dtl">
    <p class="listing-dtl__title">{{ title }}</p>
    <section class="listing-dtl__info">
      <!-- <div class="listing-dtl__carousel"> -->
      <Carousel class="listing-dtl__carousel" :autoplay="false" :nav="false" :items="1">
        <div v-for="i in 4" :key="i">
          <img class="listing-dtl__img" :src="imageSrc" :alt="`${title} image`" />
        </div>
      </Carousel>
      <!-- </div> -->
      <div class="listing-dtl__plan-section">
        <div class="listing-dtl__summary">
          <ListingInfoCard value-color="green" :tooltip-text="minInvestText">
            <template #icon>
              <MainIcon name="money-alt" size="lg" />
            </template>
            <template #title>
              Minimum Investment
            </template>
            <template #value>
              <MainIcon name="green-naira" size="md" />
              {{ minInvest }}
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
              {{ returns }}
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
              {{ holPeriod }}
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
              Construction
            </template>
          </ListingInfoCard>
        </div>
        <div>
          <button type="button" class="listing-dtl__btn" @click="$emit('show-modal')">Invest Now</button>
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

    <Modal :config="{ isVisible: isModalVisible }" show-cancel @close-modal="closeModal">
      <div class="lst-modal">
        <slot name="modal-content"></slot>
      </div>
    </Modal>
  </div>
</template>

<script>
import Carousel from "vue-owl-carousel2";
import ListingInfoCard from "./ListingInfoCard.vue";
import MainIcon from "@/components/Shared/mainIcon.vue";
import Modal from "@/components/Shared/modal.vue";

export default {
  name: "ListingDetail",
  components: {
    ListingInfoCard,
    Carousel,
    MainIcon,
    Modal
  },
  props: {
    title: {
      type: String,
      required: true
    },
    minInvest: {
      type: Number,
      default: 10000
    },
    returns: {
      type: String,
      default: "25% - 30%"
    },
    holPeriod: {
      type: String,
      default: "6 - 12 Months"
    },
    imageSrc: {
      type: String,
      required: true
    },
    isModalVisible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      minInvestText: "This is the smallest amount you can start this plan for and you can always invest more.",
      returnsText: "This is the Profit on your Investment, it usually has a range for each Plan.",
      holPeriodText: "This is the Duration for each asset before your Capital & returns are paid.",
      invPurposeText: "The assets in this plan are solely for development."
    };
  },
  methods: {
    closeModal() {
      this.$emit("reset-params");
      this.$emit("close-modal");
    }
  }
};
</script>
