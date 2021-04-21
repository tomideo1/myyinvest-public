<template>
  <button class="bc-card">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.com/svgjs"
      width="18"
      height="18"
      viewBox="0 0 18 17.999"
      fill="none"
      stroke-miterlimit="100"
      stroke="currentColor"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path
          paint-order="stroke fill markers"
          d="M16.714 7.07h-5.785V1.286C10.929.576 10.353 0 9.643 0H8.357c-.71 0-1.286.576-1.286 1.286V7.07H1.286C.576 7.07 0 7.646 0 8.356v1.287c0 .71.576 1.286 1.286 1.286h5.785v5.784c0 .711.576 1.286 1.286 1.286h1.286c.71 0 1.286-.575 1.286-1.286V10.93h5.785c.71 0 1.286-.576 1.286-1.286V8.356c0-.71-.576-1.286-1.286-1.286z"
        />
      </svg>
    </svg>
    <p class="bc-card__text">{{ text }}</p>
  </button>
</template>

<script>
export default {
  name: "AddItemCard",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.bc-card {
  border: 1px solid rgba(193, 0, 0, 0.6);
  box-shadow: 0.025rem 0.025rem 0.25rem 0 rgba(0, 0, 0, 0.5);
  border-radius: 0.9rem;
  background: color(bv-white);
  color: color(main-red);
  height: 15.25em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.0325rem;
  transition: box-shadow 0.3s ease;

  @media screen and (max-width: 599px) {
    font-size: 0.935rem;
  }

  &__text {
    margin-top: 0.8em;
    font-size: inherit !important;
    font-weight: 600;
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
