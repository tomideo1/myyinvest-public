<template>
  <div class="wrapper">
    <div class="nav-icon">
      <img src="@/assets/admin/images/myyinvest-logo.jpg" alt="Myyinvest Logo" />
    </div>
    <div class="nav-title">
      <span>View</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 20% 80%;
  height: 100%;
}

div.nav-icon {
  display: flex;
  align-items: center;
  margin-left: 20px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.nav-icon img {
  width: 40px;
  height: 30px;
  object-fit: contain;
}

div.nav-title {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  font-size: var(--font-md);
  font-weight: bold;
}
</style>
