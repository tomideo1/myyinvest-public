<template>
  <div class="delete-overlay">
    <div class="delete-modal">
      <p>Delete post</p>
      <p>Are you sure you want to delete post?</p>
      <div>
        <button @click="cancelDelete">Cancel</button>
        <button @click="proceedDelete">Proceed</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noDeleteModal: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    cancelDelete() {
      this.$emit("closeModal");
    },

    proceedDelete() {
      alert("What next?");
    }
  }
};
</script>

<style scoped>
.delete-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1111;
}

.delete-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 350px;
  height: 250px;
  padding: calc(2 * var(--base-size));
  border-radius: 10px;
  background-color: var(--myyinvest-white);
  transform: translate(-50%, -50%);
}

.delete-modal p {
  font-size: var(--font-md);
  font-weight: 600;
  text-align: center;
}

.delete-modal p:first-child {
  margin-bottom: var(--base-size);
  color: var(--myyinvest-red);
}

.delete-modal p:nth-child(2) {
  margin: var(--base-size) 0;
}

.delete-modal div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--base-size);
}

.delete-modal div button {
  padding: 5px;
  border: 2px solid var(--myyinvest-red);
  color: var(--myyinvest-red);
  font-weight: 600;
  border-radius: 5px;
  background-color: var(--myyinvest-white);
}

.delete-modal div button:hover,
.delete-modal div button:focus {
  border: 2px solid transparent;
  color: var(--myyinvest-white);
  background-color: var(--myyinvest-red);
}
</style>
