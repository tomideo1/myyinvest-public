<template>
  <div>
    <section class="search-banner"></section>
    <section>
      <main-card style="margin-top:-60px" class="w-75 d-none d-lg-block d-md-block mx-auto ">
        <div class="d-flex flex-row">
          <div class="search mx-auto">
            <img class=" search-icon" src="@/assets/icons/search.svg" width="25" />
            <input class=" p-2 w-85 search-box" />
          </div>
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
  </div>
</template>

<script>
import MainButton from "../../components/form/MainButton.vue";
import mainCard from "../../components/Shared/mainCard.vue";
export default {
  components: { mainCard, MainButton }
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
  border-radius: 25px;
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
