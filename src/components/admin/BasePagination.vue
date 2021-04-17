<template>
  <div class="admin-pagination">
    <button>Previous</button>
    <button v-for="n in 5" :key="n" :class="[n === currentPage ? 'button-active' : '']">{{ n }}</button>
    <button>Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style scoped>
.admin-pagination {
  display: flex;
  justify-content: right;
  align-items: center;
  /* margin: auto; */
  /* height: fit-content; */
  margin-bottom: var(--base-size);
  /* border: 2px solid purple; */
}

.admin-pagination button {
  margin: 0 !important;
  padding: 5px 10px;
  border: 1px solid var(--myyinvest-red);
  border-radius: 5px;
  color: var(--myyinvest-red);
  background-color: var(--myyinvest-white);
}

.admin-pagination button:first-child {
  margin-left: auto !important;
}

.admin-pagination button:not(:first-child) {
  margin-left: 10px !important;
}

.admin-pagination button:hover,
.admin-pagination .button-active {
  background-color: var(--myyinvest-red);
  color: var(--myyinvest-white);
}

.admin-pagination button:focus {
  outline: none;
  box-shadow: 0 0 3px 3px var(--myyinvest-red-fade);
}
</style>
