<template>
  <div class="wrapper">
    <div class="nav-icon">
      <img src="@/assets/admin/images/myyinvest-logo.jpg" alt="Myyinvest Logo" />
    </div>
    <div class="nav-details">
      <div class="nav-title">
        <span>{{ name }}</span>
      </div>
      <div class="nav-profile">
        <div>
          <p class="greetings">Hi, Valentine Offiah</p>
          <p class="ranking">Author</p>
        </div>
        <img src="@/assets/admin/images/profile-pic.svg" alt="User Profile Picture" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      let val = "";
      switch (this.$route.path) {
        case "/admin":
          val = "Overview";
          break;
        case "/admin/view-insights":
          val = "View Insights";
          break;
        case "/admin/add-insights":
          val = "Add Insights";
          break;
        case "/admin/view-users":
          val = "View Users";
          break;
        case "/admin/add-users":
          val = "Add Users";
          break;
        case "/admin/transactions":
          val = "Transactions";
          break;
        default:
      }
      return val;
    }
  }
};
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
  margin-left: var(--base-size);
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.nav-icon img {
  width: 40px;
  height: 30px;
  object-fit: contain;
}

div.nav-details {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  font-size: var(--font-md);
  font-weight: 600;
}

div.nav-details div.nav-title {
  width: 60%;
  padding-right: calc(2 * var(--base-size));
  text-align: right;
}

div.nav-details div.nav-profile {
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  width: 40%;
  margin-right: var(--base-size);
  color: gray;
}

/* div.nav-details div.nav-profile div {
  margin-left: auto !important;
} */

div.nav-details div.nav-profile .greetings {
  margin: 0;
  font-size: var(--font-normal) !important;
}

div.nav-details div.nav-profile .ranking {
  margin: 0;
  font-size: var(--font-sm) !important;
  text-align: right;
}

div.nav-details div.nav-profile img {
  width: 40px;
  height: 40px;
  margin-left: var(--base-size);
}
</style>
