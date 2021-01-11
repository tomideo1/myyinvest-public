<template>
  <div>
    <main class="d-none d-lg-block d-md-block">
      <top-nav />
      <section>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="d-flex flex-column position-absolute top-40">
                <h2 class="text-main-red m-1  font-weight-bold text-bold">Build your Net worth</h2>
                <p class="ft-18 m-1  font-weight-bold text-bold">Through Fractional Real Estate Investment.</p>
                <div class="d-flex flex-row mt-4">
                  <main-button text="GET STARTED" size="md" class="mr-4  shadow-3" />
                  <main-button type="outline" text="WATCH NOW &#160; &#160; &#x25B6;" size="md" class="" />
                </div>
              </div>
              <img style="width:95%;position: absolute;right:10%;top:-5%; z-index: -1" src="@/assets/svgs/incoming.png" />
            </div>

            <div class="col-lg-6 col-md-6">
              <img style="width: 90%; position: relative; z-index: -1" src="@/assets/svgs/map.png" />

              <span>
                <people class="position-absolute top-0 mt-2   d-lg-block d-md-none" style="left: 40%;" size="xl-2" />
                <people class="position-absolute top-0 d-lg-none d-md-block mt-2 " style="left: 40%;" size="xl" />
              </span>

              <span>
                <people class="position-absolute top-10   d-lg-block d-md-none" style="left: 0%;" size="xl-2" />
                <people class="position-absolute top-10 d-lg-none d-md-block  " style="left: 0%;" size="xl" />
              </span>

              <span>
                <people class="position-absolute top-30   d-lg-block d-md-none mt-2" style="left: 40%;" size="xxl" />
                <people class="position-absolute top-30 d-lg-none d-md-block  mt-2" style="left: 40%;" size="xl-1" />
              </span>

              <span>
                <people class="position-absolute top-50 d-lg-block d-md-none " style="left: 7%;" size="xl-1" />
                <people class="position-absolute top-50 d-lg-none d-md-block  " style="left: 0%;" size="xl" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container-fluid">
          <img src="@/assets/svgs/light-circle.svg" class="position-relative z-index-0" style="top: 0%" />
        </div>
      </section>
    </main>

    <main class="d-lg-none d-md-none d-block"></main>
  </div>
</template>

<script>
import TopNav from "../../components/Shared/TopNav";
import MainButton from "../../components/form/MainButton";
import People from "../../components/Shared/people";
export default {
  name: "Landing",
  components: { People, MainButton, TopNav }
};
</script>

<style scoped></style>
