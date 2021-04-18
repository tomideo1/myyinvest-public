<template>
  <div class="lst-info">
    <div class="lst-info__icon">
      <slot name="icon"></slot>
    </div>
    <div class="lst-info__title">
      <span>
        <slot name="title"></slot>
      </span>
      <div class="lst-info__tooltip" :data-content="tooltipText" tabindex="-1">
        <MainIcon name="tooltip" size="retain" />
        <!-- <div class="lst-tooltip__text">
          <slot name="tooltip-text"></slot>
        </div> -->
      </div>
    </div>
    <span :class="['lst-info__value', `lst-info__value--${valueColor}`]">
      <slot name="value"></slot>
    </span>
  </div>
</template>

<script>
import MainIcon from "@/components/Shared/mainIcon.vue";

export default {
  name: "ListingInfoCard",
  components: { MainIcon },
  props: {
    tooltipText: {
      type: String,
      required: true
    },
    valueColor: {
      type: String,
      default: "red"
    }
  }
};
</script>

<style lang="scss" scoped>
.lst-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em 2em;
  max-width: 16em;
  max-height: 11em;
  box-shadow: 0 0 1.25rem 0 rgba(0, 0, 0, 0.2);

  &__icon {
    // border: 1px solid green;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    // align-content: center;
    // vertical-align: middle;
    max-width: 3em;
    height: 100%;
  }

  &__title {
    position: relative;
    // border: 1px solid green;
    padding: 0.35em 0;

    > span {
      font-weight: 500;
      word-spacing: 10em;
      text-transform: capitalize;
    }
  }

  &__value {
    font-weight: 600;
    font-size: 1.15em;
    @include flex-center;

    > .icon {
      width: auto;
      padding-bottom: 0.05em;
    }

    &--green {
      color: color(txt-green);
    }

    &--red {
      color: color(main-red);
    }
  }

  &__tooltip {
    position: absolute;
    top: 0;
    // right: 5%;
    right: 7%;
    // position: relative;

    &::after {
      content: attr(data-content);
      position: absolute;
      top: 110%;
      // left: 50%;
      right: 0;
      background: color(main-red);
      color: color(bv-white);
      font-size: 0.925em;
      padding: 1.25em;
      width: 12.5em;
      z-index: 5;
      box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.25);
      opacity: 0;
      // transform: translateX(-50%) scaleX(0);
      transform: scale(0);
      transform-origin: 100% 0%;
      transition: all 0.3s ease;
    }

    &:hover::after,
    &:focus::after {
      opacity: 1;
      transform: scale(1);
      // transform: translateX(-50%) scaleX(1);
    }
  }
}
</style>
