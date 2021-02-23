<template>
  <div>
    <modal v-show="isModalVisible" size="md">
      <div class="modal-header">
        <p class="text-white text-center mx-auto mt-2">Invest Now</p>
      </div>
      <div class="d-flex flex-column align-items-center">
        <div class="col-md-12 mb-5 mt-4">
          <main-input class="" label="How many tokens do you want to invest?" inputType="select" />
        </div>
        <div class="col-md-12 ">
          <main-input class="" label="Investment Costs" />
        </div>
        <div class="col-md-12 ">
          <main-input class="" label="Expected  Returns" />
        </div>
        <div class="d-flex flex-row">
          <main-button class="mt-n3" size="md" text="Make Payment" type="filled" />

          <main-button class="mt-n3 ml-5 " @click="closeModal" size="md" text="Cancel" type="outline" />
        </div>
      </div>
    </modal>
    <section>
      <div class="row m-lg-5 m-2">
        <div class="col-12 col-md-6 mt-5 ">
          <carousel :autoplay="false" :nav="false" :items="1">
            <div v-for="i in 5" :key="i">
              <img src="https://res.cloudinary.com/dwpu7jpku/image/upload/v1612297295/listings_mfl4io.png" height="500" width="650" class="d-lg-block d-md-block d-none" alt="" />
              <img src="https://res.cloudinary.com/dwpu7jpku/image/upload/v1612297295/listings_mfl4io.png" width="350" height="300" class="d-block d-lg-none d-md-none" alt="" />
            </div>
          </carousel>
        </div>
        <div class="col-12  col-md-6">
          <p class="text-center text-main-red ft-14 mt-3 mb-3 ">Key Information</p>
          <main-card>
            <div class="row">
              <div class="col-md-6  mt-4  col-lg-6 col-12">
                <main-card class="col-md-12">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <main-icon name="money" />
                    <p class="mt-2">Minimum</p>
                    <p class="mt-n2">Investment</p>
                    <span class="d-flex flex-lg-row  ">
                      <main-icon name="naira" />
                      <p class="ml-1 18 text-main-red font-weight-bolder">10,000</p>
                    </span>
                  </div>
                </main-card>
              </div>
              <div class="col-md-6  col-lg-6 mt-4 col-12">
                <main-card class="col-md-12">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <main-icon name="roi" />
                    <p class="mt-2">Returns</p>
                    <p class="mt-n2">(ROI)</p>
                    <p class="text-main-red">25%</p>
                  </div>
                </main-card>
              </div>

              <div class="col-md-6  mt-4  col-lg-6 col-12">
                <main-card class="col-md-12">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <main-icon name="clock" />
                    <p class="mt-2">Holding</p>
                    <p class="mt-n2">Period</p>
                    <p class="text-main-red">12 Months</p>
                  </div>
                </main-card>
              </div>

              <div class="col-md-6 mt-4 col-lg-6 col-12">
                <main-card class="col-md-12">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <main-icon name="building" />
                    <p class="mt-2">Investment</p>
                    <p class="mt-n2">Purpose</p>
                    <p class="text-main-red">Construction</p>
                  </div>
                </main-card>
              </div>
            </div>
            <main-button text="Invest Now" @click="showModal" class="btn btn-block btn-lg mt-3" />
          </main-card>
        </div>
      </div>
    </section>
    <section>
      <main-card>
        <div class="row ">
          <div class="col-md-6 col-6 col-lg-6 d-flex justify-content-center ">
            <main-button class="col-md-8 shadow-3" text="Project Details" size="md" type="filled" />
          </div>
          <div class="col-md-6 col-6 col-lg-6">
            <main-button class="col-md-8 shadow-3" text="Project Details" size="md" type="plain" />
          </div>
        </div>
      </main-card>
    </section>
    <section>
      <div class="row p-3">
        <div class="col-md-12">
          <p class="text-main-red">Description</p>
          <p class="p-4 font-weight-light card p-3 bg-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quae. Ex maiores obcaecati ab nam earum, officiis magni? Velit inventore quae magnam suscipit minus vitae porro nobis
            debitis dolorum at!
          </p>
        </div>

        <div class="col-md-12">
          <p class="text-main-red">Governance bodies</p>
          <div class="d-flex flex-column">
            <p class="p-4 d-flex font-weight-light  card p-3 bg-white">
              <span class="">
                <b class="font-weight-bold"> Finx Reality =></b>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                  amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit ame
                </span>
              </span>
            </p>

            <p class="p-4 d-flex flex-column font-weight-light card p-3 bg-white">
              <span class="">
                <b class="font-weight-bold"> Leadway => </b>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                  amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit ame
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid">
      <p class="text-main-red">Documents</p>
      <main-card class="col-md-5 col-12 col-lg-5" style="border-radius: 0!important; ">
        <div class="row ">
          <div class="col-md-6 col-6 col-lg-6 d-flex justify-content-center ">
            <main-button class="col-md-12 shadow-3" text="Project Details" size="md" type="filled" />
          </div>
          <div class="col-md-6 col-6 col-lg-6">
            <main-button class="col-md-12 shadow-3" text="Project Details" size="md" type="filled" />
          </div>
        </div>
      </main-card>
    </section>
  </div>
</template>

<script>
import MainCard from "../../../components/Shared/mainCard";
import MainButton from "../../../components/form/MainButton";
import MainInput from "../../../components/form/mainInput";
import modal from "../../../components/Shared/modal.vue";
import carousel from "vue-owl-carousel2";
import MainIcon from "../../../components/Shared/mainIcon";
export default {
  components: { MainIcon, MainCard, MainButton, modal, MainInput, carousel },
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
.card {
  background-color: #f9f9f9 !important;
}
.card-body {
  background-color: #f9f9f9 !important;
}
.modal-header {
  background: color(main-red);
  height: 50% !important;
}
</style>
