<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div :class="[classes]" :style="styles" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <span v-if="showCancel" class="close-button topright" @click="handleClose">&times;</span>
        <section class="modal-body" id="modalDescription">
          <slot />
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
const sizes = ["xs", "sm", "md", "lg"];
export default {
  name: "modal",
  data() {
    return {
      widths: {
        xs: 150,
        sm: 250,
        md: 350,
        md_noty: 350,
        lg: 450,
        xl: 400
      },

      heights: {
        xs: 70,
        sm: 250,
        md: 60,
        md_noty: 45,
        lg: 60,
        xl: 500
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
    }
  },
  computed: {
    styles() {
      return `width: ${this.widths[this.size]}px!important; max-height: ${this.heights[this.size]}%!important;`;
    },
    classes() {
      let classes = "modal";
      return classes.trim();
    }
  },
  methods: {
    handleClose() {
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
