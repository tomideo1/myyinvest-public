<template>
  <!-- <transition name="modal-fade">
    <div class="lst-modal">
      <div class="lst-modal__dialog-box">
        <!- <div :class="[classes]" :style="styles" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription"> ->
        <div class="lst-modal__close-icon">
          <main-icon v-if="showCancel" name="close" size="xl" @click.native="handleClose" />
        </div>
        <!-   <span v-if="showCancel" class="close-button topright" @click="handleClose">&times;</span> ->
        <div class="lst-modal__content" id="modalDescription">
          <slot />
        </div>
        <!- </div> ->
      </div>
    </div>
  </transition> -->

  <div :class="['c-modal', { 'c-modal--hidden': !config.isVisible }]">
    <div :class="['c-modal__dialog-box', { [`c-modal__dialog-box--${config.size}`]: config.size !== null }]">
      <div class="c-modal__close-icon">
        <main-icon v-if="showCancel" name="close" size="xl" @click.native="handleClose" />
      </div>
      <div class="c-modal__content" id="modalDescription">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import MainIcon from "./mainIcon";
const sizes = ["xs", "sm", "md", "lg"];
export default {
  name: "modal",
  components: { MainIcon },
  data() {
    return {
      widths: {
        xs: 150,
        sm: 250,
        md: 350,
        md_noty: 350,
        lg: 450,
        xl: 700
      },

      heights: {
        xs: 40,
        sm: 250,
        md: 60,
        md_noty: 45,
        lg: 50,
        xl: 70
      }
    };
  },
  props: {
    size: {
      // `'xs'` / `'sm'` / `'md'` / `'lg'`
      type: String,
      default: sizes[2],
      required: false
    },
    showCancel: {
      type: Boolean,
      default: false
    },
    config: {
      type: Object,
      default: () => {
        return {
          isVisible: true,
          size: null
        };
      }
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    styles() {
      return;
      // return `width: ${this.widths[this.size]}px!important; max-height: ${this.heights[this.size]}%!important;`;
    },
    // eslint-disable-next-line vue/return-in-computed-property
    classes() {
      // let classes = "modal";
      // return classes.trim();
    }
  },
  methods: {
    handleClose() {
      this.$emit("close-modal");
      this.$Bus.$emit("close-modal");
    }
  }
};
</script>
<style lang="scss" scoped>
.modal-backdrop {
  position: fixed; /* Stay in place */
  z-index: 100000 !important;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.52);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  /*box-shadow: 2px 2px 20px 1px;*/
  overflow-x: auto;
  display: block;

  position: absolute;
  z-index: 2 !important;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  &-xs {
    max-width: 250px !important;
    max-height: 250px !important;
  }
  &-sm {
    max-width: 350px !important;
    max-height: 350px !important;
  }
  &-md {
    max-width: 450px !important;
    max-height: 450px !important;
  }

  &-lg {
    max-width: 550px !important;
    max-height: 550px !important;
  }
  &-top {
  }
}

.modal-body {
  position: relative;
  padding: 20px 20px;
}
.close-button {
  border: none;
  display: inline-block;
  padding: 8px 16px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer !important;
  color: inherit;
  /*background-color: inherit;*/
  text-align: center;
  background: color(main-red) !important;
  white-space: nowrap;
}

.topright {
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
}
</style>
