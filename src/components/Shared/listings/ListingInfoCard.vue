<template>
  <div class="lst-info">
    <div class="lst-info__icon">
      <slot name="icon"></slot>
    </div>
    <div class="lst-info__title">
      <span>
        <slot name="title"></slot>
      </span>
      <div class="lst-tooltip lst-info__tooltip" :data-content="tooltipText" tabindex="-1">
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

<style lang="scss">
.lst-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em 2em;
  // $lst-info-max-width is defined in utils/variables.scss;
  max-width: $lst-info-max-width;
  // max-width: 16em;
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

    // there are already ::after styles in lst-tooltip in _listings.scss, that's why I don't need to add content
    &::after {
      top: 110%;
      right: 0;
      transform-origin: 100% 0%;
    }
  }
}
</style>
