<template>
  <div id="app">
    <modal size="md_noty" v-show="notify.show" show-cancel @close-modal="closeModal">
      <img src="@/assets/logos/Myylogo2.png" alt="Logo" width="98" height="15" />
      <div class="d-flex flex-column justify-content-center align-items-center ">
        <img src="@/assets/svgs/success.svg" class="mt-5" alt="Logo" width="50" height="50" />
        <p class="mt-4 text-center text-main-red ft-18">{{ notify.tinyMessage }}</p>
        <!--        <p class="mt-4 text-center">{{ notify.mainMessage }}</p>-->
      </div>
    </modal>

    <router-view />
  </div>
</template>

<script>
import Modal from "./components/Shared/modal";
export default {
  data() {
    return {
      notify: {
        show: false,
        mainMessage: "",
        tinyMessage: "",
        extras: "",
        status: ""
      }
    };
  },
  watch: {
    '$route'() {
      this.$store.commit('TOGGLE_MOBILE_RESPONSIVE', {open: true})
    },
  },
  components: { Modal },
  methods: {
    showModal() {
      this.notify.show = true;
    },
    closeModal() {
      console.log("clicked");
      this.notify.show = false;
    }
  },
  created() {
    this.$Bus.$on("close-modal", () => {
      this.notify = false;
    });
    this.$Bus.$on("notify", data => {
      this.notify = data;
    });
    // setInterval(() => {
    //   if (this.notify.show) {
    //     this.notify.show = false;
    //   }
    // }, 10000);
  }
};
</script>
<style lang="scss">
@import "scss/main";
html,
body {
  width: 100%;
  height: 100vh;
  margin: 0;

  padding: 0;
}
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/

p {
  font-size: 19px !important;
}

#nav {
  /*padding: 30px;*/

  /*a {*/
  /*  font-weight: bold;*/
  /*  color: #2c3e50;*/

  &.router-link-exact-active {
    color: color(main-red) !important;
  }
}
</style>
