<template>
  <div class="overlay">
    <div class="overlay-content">
      <div class="" id="printArea">
        <div class="logo-area">
          <img width="324" height="52" src="https://res.cloudinary.com/myyinvest/image/upload/v1614001064/mmyyinvest-2.0/logos/Myylogo2_uwpfw9.png" alt="Myyinvest Logo" />
        </div>

        <slot name="title" @callClosePreview="closePrintPreview" />
        <slot name="content" />
      </div>
      <div class="btn-grp">
        <button @click="closePrintPreview">Close</button>
        <button v-print="'#printArea'">Print this</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   created() {
  //     this.$emit("callClosePreview");
  //   },

  methods: {
    // closePrintPreview(event, value) {
    closePrintPreview() {
      //   this.$emit("closePrintPreview");
      // alert("I am alive", value);
      return this.$emit("closePrintPreview");
    }
  }
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 calc(4 * var(--base-size));
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99999;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.overlay-content {
  height: 100%;
  padding: calc(4 * var(--base-size));
  overflow-y: auto;
  background-color: white;
}

.overlay ::-webkit-scrollbar {
  display: none;
}

.logo-area,
.title-area,
.btn-grp {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-area {
  margin-top: var(--base-size);
  font-size: 24px;
  font-weight: 600;
  color: var(--myyinvest-red);
}

.btn-grp {
  justify-content: space-between;
}

button,
button {
  padding: 5px 10px;
  color: var(--myyinvest-white);
  font-weight: 600;
  border: 2px solid transparent;
  border-radius: 5px;
  background-color: var(--myyinvest-red);
}

button:hover,
button:focus {
  color: var(--myyinvest-red);
  border: 2px solid var(--myyinvest-red);
  background-color: var(--myyinvest-white);
}

button:focus {
  outline: none;
  box-shadow: 0 0 3px 3px var(--myyinvest-red-fade);
}
</style>
