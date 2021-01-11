<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-white shadow-3 nav-height">
      <a>
        <img width="162" height="26" src="@/assets/logos/Myylogo2.png" alt="Logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="d-md-flex d-block flex-row mx-md-auto ">
        <div class="  mr-auto" id="navbarNavAltMarkup">
          <div class="d-flex flex-row ">
            <a :class="['nav-item nav-link  mr-lg-5', currentNav === 'about' ? 'active' : '']" href="#">About</a>
            <a :class="['nav-item nav-link  mr-lg-5', currentNav === 'faq' ? 'active' : '']" href="#">FAQ</a>
            <a :class="['nav-item nav-link  mr-lg-5', currentNav === 'insight' ? 'active' : '']" href="#">Insight</a>
            <a :class="['nav-item nav-link  mr-lg-5', currentNav === 'listings' ? 'active' : '']" href="#">Listings</a>
          </div>
        </div>
      </div>
      <div class="navbar-nav  d-flex flex-row-reverse  ">
        <MainButton type="filled" class="ml-3" text="Sign Up" size="sm" />
        <MainButton type="outline" text="Login " size="sm" />
      </div>
    </nav>
  </div>
</template>

<script>
import MainButton from "../form/MainButton";
export default {
  name: "TopNav",
  props: {
    currentNav: {
      type: String
    }
  },
  components: {
    MainButton
  }
};
</script>

<style scoped lang="scss">
.nav-height {
  height: 70px !important;
}
</style>
