<template>
  <div>
    <img class="d-md-block d-lg-block d-none" style="width: 100%!important;position:absolute;z-index: -1; top:50%!important;left:2%!important;" src="@/assets/svgs/listings-path.svg" />
    <section class="search-banner"></section>
    <section>
      <main-card style="margin-top:-60px" class="w-75 d-none d-lg-block d-md-block mx-auto ">
        <div class="d-flex flex-row">
          <!--          <div class="search mx-auto">-->
          <!--            <img class=" search-icon" src="@/assets/icons/search.svg" width="25" />-->
          <input class=" p-2 w-85 search-box" />
          <!--          </div>-->
          <main-button text="search" size="md" type="filled" class="ml-auto mt-2" />
        </div>
      </main-card>
      <main-card style="margin-top:-60px" class="w-85 d-lg-none d-md-none d-block mx-auto ">
        <div class="d-flex flex-column">
          <div class="search ">
            <img class=" search-icon" src="@/assets/icons/search.svg" width="25" />
            <input class=" p-3 mx-auto search-box" />
          </div>
          <main-button text="search" size="md" type="filled" class="ml-auto mt-3" />
        </div>
      </main-card>
    </section>
    <section class="container ">
      <div class="d-flex flex-row ml-5 mt-5 flex-row justify-content-center ">
        <div class="card cursor-pointer p-2   " style="width: 50px; height: 30px; background-color: #EAD0D0;box-shadow: -2px 2px 8px #646464;">
          <p class="mx-auto ft-14 mt-n1 text-main-red">All</p>
        </div>
        <div class="card cursor-pointer p-2 ml-5 " style="width: 120px; height: 30px; background-color: #EAD0D0;box-shadow: -2px 2px 8px #646464;">
          <p class="mx-auto ft-14 mt-n1 text-main-red">Co Own</p>
        </div>
        <div class="card cursor-pointer ml-5 p-2 " style="width: 120px; height: 30px; background-color: #EAD0D0;box-shadow: -2px 2px 8px #646464;">
          <p class="mx-auto ft-14 mt-n1 text-main-red">Co Invest</p>
        </div>
      </div>
    </section>
    <section class="container-fluid">
      <div class="row  ">
        <div class="col-md-6 col-12 col-lg-4  listings-col " id="all" v-for="i in 6" :key="i">
          <div class="p-5">
            <div class="single-list" style="border-radius:20px!important;">
              <div class="list-image">
                <img src="https://res.cloudinary.com/dwpu7jpku/image/upload/v1612297295/listings_mfl4io.png" class="img-fluid" alt="" />
              </div>
              <div class="list-details">
                <p class="ft-18 w-100">Cambridge Apartments Construction</p>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-10 " style="border-right:1px solid red;">
                    <span class="d-flex flex-lg-row  ">
                      <img src="@/assets/svgs/naira.svg" width="15" height="15" class="ml-3 mt-2" />
                      <p class="ml-1 18 text-main-red font-weight-bolder">10,000</p>
                    </span>
                    <p class="ml-4 ft-16">Minimum</p>
                    <hr class="mt-n2 ml-auto " style="border-color:red!important; position: relative; left: 5%" />
                  </div>
                  <div class="col-md-6 col-lg-6 col-10">
                    <p class="font-weight-light ft-12">Description</p>
                    <p class="font-weight-light ft-12">
                      Lorem ipsum dolor sit amet consect etur adipisicing elit. Eligendi tempori bus libero at ipsum, eveniet maiores.
                    </p>
                    <hr class="mt-n2 ml-auto " style="border-color:red!important; position: relative; left: -5%" />
                    <main-button @click="$router.push({ name: 'single-listing' })" style="font-size: 10px!important;" text="Read More" size="xs" class="float-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <b-pagination class="d-flex justify-content-center" v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="all"></b-pagination>
    </section>
  </div>
</template>

<script>
import MainButton from "../../../components/form/MainButton.vue";
import mainCard from "../../../components/Shared/mainCard.vue";
export default {
  components: { mainCard, MainButton },
  data() {
    return {
      currentPage: 1,
      rows: 10,
      perPage: 1
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.search-banner {
  background: color(main-red) !important;
  height: 20% !important;
  padding: 70px 0px;
}
.w-85 {
  width: 85% !important;
}
.search-box {
  box-shadow: -1px 1px 3px #bdbdbd !important;
  background: color(bv-white);
  border: 1px solid color(bv-white);
  border-radius: 10px !important;
  &:focus {
    outline: none;
  }
}
.search {
  position: relative;
  // margin: 0 auto ;
  // padding: 20px;
  width: 100% !important;
}
.search input {
  text-indent: 30px;
}

.search-icon {
  top: 8px;
  left: 10px;
  position: absolute;
}
</style>
