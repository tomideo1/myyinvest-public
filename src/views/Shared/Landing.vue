<template>
  <div>
    <main class="d-none d-lg-block d-md-block">
      <modal v-show="isModalVisible" @close="closeModal">
        <div class="container-fluid d-flex flex-column align-items-center">
          <img src="@/assets/svgs/news-letter.svg" width="50" height="50" />
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

      <section>
        <div class="container-fluid">
          <div class="row p-5">
            <div class="col-lg-6 col-md-6">
              <div class="d-flex flex-column position-absolute top-30">
                <h2 class="text-main-red m-1  font-weight-bold text-bold">Build your Net worth</h2>
                <p class="ft-18 m-1  font-weight-bold text-bold">Through Fractional Real Estate Investment.</p>
                <div class="d-flex flex-row mt-5 pt-4">
                  <main-button text="GET STARTED" size="md" class="mr-4  shadow-3" />
                  <main-button type="outline" text="WATCH NOW &#160; &#160; &#x25B6;" size="md" class="" />
                </div>
              </div>
              <img style="width:95%;position: absolute;right:10%;top:-5%; z-index: -1" src="@/assets/svgs/incoming.png" />
            </div>

            <div class="col-lg-6 col-md-6 mt-5">
              <img style="width: 90%; position: relative; z-index: -1" src="@/assets/svgs/map.png" />

              <span>
                <people class="position-absolute top-0 mt-2   d-lg-block d-md-none" flag-position="right" style="left: 40%;" size="xl-2" />
                <people class="position-absolute top-0 d-lg-none d-md-block mt-2 " flag-position="right" style="left: 40%;" size="xl" />
              </span>

              <span>
                <people class="position-absolute top-10   d-lg-block d-md-none" style="left: 0%;" size="xl-2" />
                <people class="position-absolute top-10 d-lg-none d-md-block  " style="left: 0%;" size="xl" />
              </span>

              <span>
                <people class="position-absolute top-30   d-lg-block d-md-none mt-2" flag-position="right" style="left: 40%;" size="xxl" />
                <people class="position-absolute top-30 d-lg-none d-md-block  mt-2" flag-position="right" style="left: 40%;" size="xl-1" />
              </span>

              <span>
                <people class="position-absolute top-50 d-lg-block d-md-none mt-n3 " style="left: 7%;" size="xl-2" />
                <people class="position-absolute top-50 d-lg-none d-md-block mt-n3" style="left: 0%;" size="xl" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="ml-5">
        <div class="container-fluid">
          <div class="d-flex flex-column">
            <img src="@/assets/svgs/light-circle.svg" width="400" height="400" class="  position-relative d-md-none d-lg-block  mt-n5" style="z-index: -1" />
            <img src="@/assets/svgs/light-circle.svg" width="300" height="300" class="d-md-block d-lg-none " style="margin-top: 100px" alt="" />
            <div class="border-left-red d-flex flex-column  " style="margin-top: -120px">
              <span class="text-main-red ">INVESTMENTS</span>
              <span>Our Investment Options</span>
            </div>
          </div>
        </div>
      </section>

      <section style="margin-top: 150px;" class="ml-5">
        <div class="container-fluid">
          <div class="row ">
            <div class="col-lg-6 col-md-12">
              <span class="d-flex flex-column ">
                <h3>Co - Invest</h3>
                <span class="header-underline" style="margin-left: 150px;"></span>
              </span>
              <p class="w-100 mt-3  font-weight-normal font-poppins" style="line-height:40px">
                Earn short-term returns when you invest in our vetted fractional real estate’s project. We carry out proper due diligence and carefully vet every real estate project with our governing
                body, we regulate the process to ensure risks are mitigated to the bear minimum and project is safe for investment.
              </p>

              <main-button type="filled" text="Invest Now" size="md" />
            </div>

            <div style="position: relative; margin-top: -200px;" class="d-lg-block d-md-none col-lg-5  ">
              <img id="co_invest" src="@/assets/images/co-invest.svg" width="600" height="600" class=" mt-n5" />
            </div>
            <div style="position: relative; margin-top: 80px" class="d-lg-none d-md-block col-md-12 ">
              <img src="@/assets/images/co-invest.svg" width="700" height="700" class=" mt-n5" />
            </div>
          </div>
        </div>
      </section>

      <section style="margin-top: 250px; margin-left: -30px">
        <div class="container-fluid">
          <div class="row ">
            <div class="col-lg-5 col-md-12">
              <div style="position: relative;" class="  ">
                <img src="@/assets/images/co-own.svg" width="600" height="600" class=" mt-n5" />
              </div>
            </div>

            <div id="co_own" class="col-lg-6  col-md-10  ml-md-5 mt-md-4 mt-lg-0 ml-lg-5">
              <span class="d-flex flex-column text-align-right ">
                <h3>Co - Own</h3>
                <span class="header-underline ml-auto"></span>
              </span>
              <p id="co_own_text" class="w-100 mt-3 text-align-right co-own font-weight-normal font-poppins" style="line-height:40px">
                Earn short-term returns when you invest in our vetted fractional real estate’s project. We carry out proper due diligence and carefully vet every real estate project with our governing
                body, we regulate the process to ensure risks are mitigated to the bear minimum and project is safe for investment.
              </p>

              <main-button class="float-right" type="filled" text="Invest Now" size="md" />
              <img id="co_own_circle" src="@/assets/svgs/light-circle.svg" width="400" height="400" class=" position-relative d-md-none d-lg-block  " style="z-index: -1; margin-top: -100px;" />
              <img src="@/assets/svgs/light-circle.svg" width="300" height="300" class="d-md-block d-lg-none " style="margin-top: -100px" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section style="margin-top: 150px;" class="ml-5">
        <div class="container-fluid">
          <div class="row ">
            <div class="col-lg-6  col-md-11  mr-5 d-lg-block d-md-none ">
              <span class="d-flex flex-column align-items-end  ">
                <h3>Smart Invest</h3>
                <span class="header-underline" style="margin-left: 150px;"></span>
              </span>
              <p id="smart_text" class="w-100 mt-3  text-align-right  font-weight-normal font-poppins" style="line-height:40px">
                Smart Invest is an Automated Investment Option that allows you to shape your finances the way you want and allow our technology handle the rest. You can start building your finances
                with a minimum of
                <span class="text-main-red">5000 Naira</span>
              </p>
              <img src="@/assets/svgs/light-circle.svg" width="400" height="400" class=" position-relative d-md-none d-lg-block  " style="z-index: -1; margin-top: -300px;margin-left: 200px" />

              <main-button type="filled" class="float-right mt-4" text="Learn More" size="md" />
            </div>

            <div class=" col-md-11 d-md-block d-lg-none   ">
              <span class="d-flex flex-column align-items-end  ">
                <h3>Smart Invest</h3>
                <span class="header-underline" style="margin-left: 150px;"></span>
              </span>
              <p class="w-100 mt-3  text-align-right  font-weight-normal font-poppins" style="line-height:40px">
                Smart Invest is an Automated Investment Option that allows you to shape your finances the way you want and allow our technology handle the rest. You can start building your finances
                with a minimum of
                <span class="text-main-red">5000 Naira</span>
              </p>
              <main-button type="filled" class="float-right mt-4" text="Learn More" size="md" />
            </div>

            <div style="position: relative; margin-top: -100px;" class="d-lg-block d-md-none col-lg-5  ">
              <img id="smart_invest" src="@/assets/images/smart-invest.svg" width="600" height="600" class=" mt-n5" />
            </div>
            <div style="position: relative; margin-top: 80px" class="d-lg-none d-md-block col-md-12 ">
              <img src="@/assets/images/smart-invest.svg" width="500" height="500" class=" mt-n5" />
            </div>
          </div>
        </div>
      </section>

      <section style="margin-top: 150px;" class="ml-5">
        <div class="border-left-red d-flex flex-column  " style="margin-top: -120px">
          <span class="text-main-red ">Benefits</span>
          <span>Why you should choose us</span>
        </div>
      </section>

      <section style="margin-top: 100px; position: relative" class="ml-5">
        <div class="container-fluid  ">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div class="d-flex flex-column">
                <img style="width: 100%!important;" width="100" height="100" src="@/assets/svgs/benefits_1.svg" />
                <p class="text-center mt-5 font-weight-bold">Access to Profitable Projects</p>
                <p class="font-weight-light">By venturing into fractional Real Estate with us, your wealth can grow in ways your savings can’t dream of.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="card shadow-3" style="border-color: white;border-radius: 20px;">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-start">
                    <img width="100" height="100" src="@/assets/svgs/benefit_2.svg" />
                    <p class="text-center mt-5 font-weight-bold">Diversified Portfolio</p>
                    <p class="font-weight-light">Investing through myyinvest guarantees secured returns and at a regular basis.</p>
                  </div>
                </div>
              </div>
              <img src="@/assets/svgs/lighte-red-circle.svg" width="300" height="300" class=" position-relative d-md-none d-lg-block  " style="z-index: -1; margin-top: -150px;margin-left: 150px" />

              <!--              <div class="d-flex flex-column">-->
              <!--                -->
              <!--                <img style="width: 100%!important;" width="100" height="100" src="@/assets/svgs/benefits_1.svg">-->
              <!--                <p class="text-center mt-5 font-weight-bold">Access to Profitable Projects</p>-->
              <!--                <p>By venturing into fractional Real Estate with us,-->
              <!--                  your wealth can grow in ways your savings can’t-->
              <!--                  dream of.</p>-->
              <!--              </div>-->
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="d-flex flex-column">
                <img style="width: 100%!important;" width="100" height="100" src="@/assets/svgs/benefits_3.svg" />
                <p class="text-center mt-5 font-weight-bold">Diversified Portfolio</p>
                <p class="font-weight-light">With myyinvest, you get access to exclusive fractional real estate properties across Africa which is monitored from your personalized dashboard.</p>
              </div>
            </div>
          </div>
        </div>
        <img style="width: 100%!important;position:absolute;z-index: -1; top:20%!important;" src="@/assets/svgs/line-path.svg" />
      </section>

      <section style="margin-top: 200px;" class="ml-5">
        <div class="border-left-red d-flex flex-column  " style="margin-top: -120px">
          <span class="text-main-red ">SAFETY AND SECURITY</span>
          <span>Why we are Reliable</span>
        </div>
      </section>

      <section style="margin-top: 100px; position: relative" class="ml-5">
        <div class="container-fluid  ">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div class="card shadow-3" style="border-bottom: 5px solid red;  border-radius: 20px;">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-middle">
                    <img width="100" height="100" class="mx-auto" src="@/assets/svgs/security_asset.svg" />
                    <p class="text-center mt-5 font-weight-bold">ASSET MANAGEMENT</p>
                    <p class="font-weight-light  text-center">
                      Assets are held in Trust by Quantum Zenith Trustees, a Trustee arm of Zenith Bank and an entity regulated by Securities and Exchange Commission, Nigeria (SEC). Assets and Legal
                      Documents are held by the Trustees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 mt-5">
              <div class="card shadow-3" style="border-bottom: 5px solid red;  border-radius: 20px;">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-middle">
                    <img width="100" height="100" class="mx-auto" src="@/assets/svgs/eye.svg" />
                    <p class="text-center mt-5 font-weight-bold">SECURE ENCRYPTION</p>
                    <p class="font-weight-light  text-center">
                      Assets are held in Trust by Quantum Zenith Trustees, a Trustee arm of Zenith Bank and an entity regulated by Securities and Exchange Commission, Nigeria (SEC). Assets and Legal
                      Documents are held by the Trustees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="card shadow-3" style="border-bottom: 5px solid red;  border-radius: 20px;">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-middle">
                    <img width="100" height="100" class="mx-auto" src="@/assets/svgs/shield.svg" />
                    <p class="text-center mt-5 font-weight-bold">BANK GRADE SECURITY</p>
                    <p class="font-weight-light  text-center">
                      Assets are held in Trust by Quantum Zenith Trustees, a Trustee arm of Zenith Bank and an entity regulated by Securities and Exchange Commission, Nigeria (SEC). Assets and Legal
                      Documents are held by the Trustees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style="margin-top: 200px;" class="ml-5">
        <div class="border-left-red d-flex flex-column  " style="margin-top: -120px">
          <span class="text-main-red ">OUR PARTNERS</span>
          <span>Collaborators</span>
        </div>
        <p class="font-weight-light mt-2">We vet, Manage and Secure our investment opportunities alongside with;</p>
      </section>

      <section class="ml-5">
        <div class="container-fluid">
          <div class="row ">
            <div class="col-lg-4 col-md-4">
              <img width="200" height="200" class="mx-auto d-lg-none d-md-block" src="@/assets/partners/riby.svg" />
              <img width="300" height="200" class="mx-auto d-lg-block d-md-none" src="@/assets/partners/riby.svg" />
            </div>
            <div class="col-lg-4 col-md-4">
              <img width="200" height="200" class="mx-auto d-lg-none d-md-block" src="@/assets/partners/quantum.svg" />
              <img width="300" height="200" class="mx-auto d-lg-block d-md-none" src="@/assets/partners/quantum.svg" />
            </div>
            <div class="col-lg-4 col-md-4">
              <img width="200" height="200" class="mx-auto d-lg-none d-md-block" src="@/assets/partners/leadway.svg" />
              <img width="300" height="200" class="mx-auto d-lg-block d-md-none" src="@/assets/partners/leadway.svg" />
            </div>
          </div>
        </div>
      </section>

      <section style="margin-top: 200px;" class="ml-5">
        <div class="border-left-red d-flex flex-column  " style="margin-top: -120px">
          <span class="text-main-red ">TESTIMONIES</span>
          <span>What Our Clients Say</span>
        </div>
        <p class="font-weight-light mt-2">We cherish this kind words from our investors and we are glad to be part on this journey with them.</p>

        <div class="p-5 m-5 ">
          <carousel :autoplay="true" :nav="false" :margin="10" :centre="true" :items="1">
            <div class="testimonial d-flex ">
              <div class="image" style="background-image: url('https://res.cloudinary.com/dwpu7jpku/image/upload/v1611136066/testimonial_avatar_n0vftt.png')"></div>
              <div class="comment px-4 py-3">
                <blockquote class="mb-0">
                  <p class="position-relative">
                    <sup class="quot font-weight-bold">“</sup>
                  </p>
                </blockquote>
                <p class="text-black">
                  Real Estate investment has always been very capita intensive and a time-consuming venture. I conducted alot of research to find out the best choice for Real Estate investment and
                  stumbled on Myyinvest. I was impressed at the level of information each property had.
                </p>
                <span class="text-red"> = Mojeed Babatunde =</span>
              </div>
            </div>

            <div class="testimonial d-flex ">
              <div class="image" style="background-image: url('https://res.cloudinary.com/dwpu7jpku/image/upload/v1611136066/testimonial_avatar_n0vftt.png')"></div>
              <div class="comment px-4 py-3">
                <blockquote class="mb-0">
                  <p class="position-relative">
                    <sup class="quot font-weight-bold">“</sup>
                  </p>
                </blockquote>
                <p class="text-black">
                  Real Estate investment has always been very capita intensive and a time-consuming venture. I conducted alot of research to find out the best choice for Real Estate investment and
                  stumbled on Myyinvest. I was impressed at the level of information each property had.
                </p>
                <span class="text-red"> = Mojeed Babatunde =</span>
              </div>
            </div>
          </carousel>
        </div>
      </section>

      <footer>
        <bottom-footer />
      </footer>
    </main>

    <main class="d-lg-none d-md-none d-block"></main>
  </div>
</template>

<script>
import TopNav from "../../components/Shared/TopNav";
import MainButton from "../../components/form/MainButton";
import People from "../../components/Shared/people";
import BottomFooter from "../../components/Shared/bottomFooter";
import carousel from "vue-owl-carousel2";
import modal from "../../components/Shared/modal.vue";
import MainInput from "../../components/form/mainInput";
export default {
  name: "Landing",
  components: { MainInput, BottomFooter, People, MainButton, TopNav, carousel, modal },
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
