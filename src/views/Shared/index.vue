<template>
  <div>
    <modal v-show="isModalVisible">
      <div class="container-fluid d-flex flex-column align-items-center">
        <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614000923/mmyyinvest-2.0/svgs/news-letter_fklp7x.svg" width="50" height="50" />
        <p class="ft-20 font-weight-bold mt-3">NewsLetter</p>
        <span class="text-center d-flex flex-column ">
          <small class="ft-10 font-weight-light ">Be first in line to get info on Real estate investment Opportunities</small>
          <small class="ft-10 font-weight-light ">by subscribing to our newsletter</small>
        </span>
        <div class="d-flex flex-column m-1 w-100">
          <main-input class="m-2 p-2" label="Full Name" />
          <main-input class="m-2 p-2" label="Email" type="email" />
          <main-input class="m-2 p-2" label="Location" />
        </div>
        <div class="fixed-bottom">
          <div class="d-flex flex-row   justify-content-end p-4 bottom-0">
            <main-button size="sm" class="mr-4" text="Cancel" type="outline" @click="closeModal" />
            <main-button size="sm" text="Subscribe" type="filled" />
          </div>
        </div>
      </div>
    </modal>
    <top-nav />
    <router-view />
    <footer>
      <bottom-footer />
    </footer>
  </div>
</template>

<script>
import TopNav from "../../components/Shared/TopNav";
import MainButton from "../../components/form/MainButton";
import BottomFooter from "../../components/Shared/bottomFooter";
import modal from "../../components/Shared/modal.vue";
import MainInput from "../../components/form/mainInput";
export default {
  name: "Landing",
  components: { MainInput, BottomFooter, MainButton, TopNav, modal },

  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style scoped lang="scss">
@media only screen and (min-width: 1024px) and (max-width: 1240px) {
  /** {*/
  /*  background-color: red!important;*/
  /*}*/
  #co_invest {
    width: 400px !important;
  }

  #co_own_text {
    width: 70% !important;
    margin-left: 30% !important;
  }
  #co_own_circle {
    margin-top: -200px !important;
  }

  #smart_invest {
    width: 400px !important;
  }
}
</style>
