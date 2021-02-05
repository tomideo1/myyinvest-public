<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <section class="modal-body" id="modalDescription">
          <slot />
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("close");
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
  max-width: 350px;
  max-height: 500px;
  position: absolute;
  z-index: 2 !important;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  &-top {
  }
}

.modal-body {
  position: relative;
  padding: 20px 20px;
}
</style>
