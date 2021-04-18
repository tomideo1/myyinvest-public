<template>
  <div class="p-lg-5 p-md-5 p-0">
    <div class="col-lg-6 col-md-6 col-12">
      <h2 class="header "><b>Transfer Option Review</b></h2>
    </div>

    <section>
      <div class="col-md-6 col-12 col-lg-6  listings-col " id="all" v-for="i in 3" :key="i">
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
                    <img src="https://res.cloudinary.com/myyinvest/image/upload/v1614000931/mmyyinvest-2.0/svgs/map_ktif6c.png/naira.svg" width="15" height="15" class="ml-3 mt-2" />
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
    </section>
  </div>
</template>

<script>
export default {
  name: "investment"
};
</script>

<style scoped lang="scss">
* {
  font-family: fonts(nunito), serif;
}
</style>
