<template>
  <div id="app">
    <modal size="md_noty" v-show="notify.show" show-cancel @close-modal="closeModal">
      <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614001064/mmyyinvest-2.0/logos/Myylogo2_uwpfw9.png" alt="Logo" width="98" height="15" />
      <div class="d-flex flex-column justify-content-center align-items-center ">
        <main-icon v-if="notify.status === 'Success'" name="success" size="retain" class="mt-4" />
        <main-icon v-if="notify.status === 'Error'" name="error" size="lg" class="mt-4" />
        <p class="mt-4 text-success text-center ft-18" v-if="notify.status === 'Success'">{{ notify.tinyMessage }}</p>
        <p class="mt-4 text-main-red text-center ft-18" v-if="notify.status === 'Error'">{{ notify.tinyMessage }}</p>
        <!--        <p class="text-center mt-4">{{ notify.mainMessage }}</p>-->
      </div>
    </modal>

    <router-view />
  </div>
</template>

<script>
import Modal from "./components/Shared/modal";
import MainIcon from "./components/Shared/mainIcon";
export default {
  data() {
    return {
      notify: {
        show: false,
        mainMessage: "",
        tinyMessage: "",
        extras: "",
        status: ""
      },
      modalTimeout: null
    };
  },
  components: { MainIcon, Modal },
  watch: {
    // automatically close the modal after 4 seconds
    notify(newNotify) {
      if (newNotify && newNotify.show) {
        clearTimeout(this.modalTimeout);
        this.modalTimeout = setTimeout(this.closeModal, 4000);
      }
    }
  },

  methods: {
    showModal() {
      this.notify.show = true;
    },
    closeModal() {
      console.log("clicked");
      // this.notify.show = false;
      if (this.notify) {
        this.notify.show = false;
      }
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
