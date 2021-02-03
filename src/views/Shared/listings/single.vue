<template>
  <div>
    <section class="container-fluid">
      <div class="row m-lg-5 m-2" style="max-height: 600px!important;">
        <div class="col-lg-6 mt-4 mt-lg-0 mt-md-0 col-md-12 col-12">
          <img src="https://res.cloudinary.com/dwpu7jpku/image/upload/v1612297295/listings_mfl4io.png" class="img-fluid" alt="" />
        </div>
        <div class="col-lg-6  mt-4 mt-lg-0 mt-md-0 col-md-12 col-12">
          <main-card class="container-fluid">
            <p class="text-center text-main-red ft-14">Key Information</p>
            <section class="container-fluid">
              <div class="row">
                <main-card class="col-md-5 mr-lg-5 mt-4  col-lg-5 col-12">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <img src="@/assets/svgs/money.svg" width="20" height="20" />
                    <p class="mt-2">Minimum</p>
                    <p class="mt-n2">Investment</p>
                    <span class="d-flex flex-lg-row  ">
                      <img src="@/assets/svgs/naira.svg" width="15" height="15" class="ml-3 mt-2" />
                      <p class="ml-1 18 text-main-red font-weight-bolder">10,000</p>
                    </span>
                  </div>
                </main-card>
                <main-card class="col-md-5  col-lg-5 mt-4 col-12">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <img src="@/assets/svgs/roi.svg" width="20" height="20" />
                    <p class="mt-2">Returns</p>
                    <p class="mt-n2">(ROI)</p>
                    <p class="text-main-red">25%</p>
                  </div>
                </main-card>
                <main-card class="col-md-5 mr-lg-5 mt-4  col-lg-5 col-12">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <img src="@/assets/svgs/clock.svg" width="20" height="20" />
                    <p class="mt-2">Holding</p>
                    <p class="mt-n2">Period</p>
                    <p class="text-main-red">12 Months</p>
                  </div>
                </main-card>

                <main-card class="col-md-5 mt-4 col-lg-5 col-12">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <img src="@/assets/svgs/building.svg" width="20" height="20" />
                    <p class="mt-2">Investment</p>
                    <p class="mt-n2">Purpose</p>
                    <p class="text-main-red">Construction</p>
                  </div>
                </main-card>
              </div>
            </section>
          </main-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MainCard from "../../../components/Shared/mainCard";
export default {
  components: { MainCard }
};
</script>
<style></style>
