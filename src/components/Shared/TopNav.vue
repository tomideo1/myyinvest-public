<template>
  <div>
    <!-- <b-navbar toggleables class="navbar navbar-expand-lg bg-white shadow-3 nav-height">
      <a>
        <img style="cursor: pointer" width="162" @click="$router.replace('/')" height="26" src="@/assets/logos/Myylogo2.png" alt="Logo" />
      </a>



        <b-collapse id="navbar-toggle-collapse" is-nav>
        <div class="d-md-flex d-block flex-row mx-md-auto ">
        <div class="  mr-auto" id="navbarNavAltMarkup">
          <div class="d-flex flex-row ">
            <router-link :class="['nav-item nav-link  mr-lg-5', currentNav === 'about' ? 'active' : '']" to="/about">
              About
            </router-link>
            <a :class="['nav-item nav-link  mr-lg-5', currentNav === 'faq' ? 'active' : '']" href="#">FAQ</a>
            <a :class="['nav-item nav-link  mr-lg-5', currentNav === 'insight' ? 'active' : '']" href="#">Insight</a>
            <a :class="['nav-item nav-link  mr-lg-5', currentNav === 'listings' ? 'active' : '']" href="#">Listings</a>
          </div>
        </div>
      </div>
      <div class="navbar-nav  d-flex flex-row-reverse  ">
        <MainButton type="filled" @click="$router.replace('/register')" class="ml-3" text="Sign Up" size="sm" />
        <MainButton type="outline" @click="$router.replace('/login')" text="Login " size="sm" />
      </div>
    </b-collapse>

    
    </b-navbar> -->

    <b-navbar toggleable type="light" variant="light" class="navbar navbar-expand-lg bg-white shadow-3 ">
      <b-navbar-brand href="#">
        <a>
          <img style="cursor: pointer" width="162" @click="$router.replace('/')" height="26" src="@/assets/logos/Myylogo2.png" alt="Logo" />
        </a>
      </b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse" style="border:none!important">
        <template #default="{ expanded }">
          <img src="@/assets/icons/toggle.svg" v-if="expanded" />
          <img src="@/assets/icons/toggle.svg" v-else />
          <!-- <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon> -->
          <!-- <b-icon v-else icon="chevron-bar-down"></b-icon> -->
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="d-md-flex d-block flex-row mx-md-auto ">
          <div class="  mr-auto" id="navbarNavAltMarkup">
            <div class="d-lg-flex flex-row  d-lg-block d-md-block d-none">
              <router-link :class="['nav-item nav-link  mr-lg-5', $router.currentRoute.name === 'about' ? 'active' : '']" to="/about">
                About
              </router-link>
              <a :class="['nav-item nav-link  mr-lg-5', $router.currentRoute.name === 'faq' ? 'active' : '']" href="#">FAQ</a>
              <a :class="['nav-item nav-link  mr-lg-5', $router.currentRoute.name === 'insight' ? 'active' : '']" href="#">Insight</a>
              <a :class="['nav-item nav-link  mr-lg-5', $router.currentRoute.name === 'listings' ? 'active' : '']" href="#">Listings</a>
            </div>
            <div class="d-block d-lg-none d-md-none ">
              <router-link :class="['nav-item nav-link  mr-lg-5', $router.currentRoute.name === 'about' ? 'active' : '']" to="/about">
                About
              </router-link>
              <a :class="['nav-item nav-link  mr-lg-5', $router.currentRoute.name === 'faq' ? 'active' : '']" href="#">FAQ</a>
              <a :class="['nav-item nav-link  mr-lg-5', $router.currentRoute.name === 'insight' ? 'active' : '']" href="#">Insight</a>
              <a :class="['nav-item nav-link  mr-lg-5', $router.currentRoute.name === 'listings' ? 'active' : '']" href="#">Listings</a>
            </div>
          </div>
        </b-navbar-nav>
        <b-navbar-nav>
          <div class=" d-lg-flex flex-row-reverse d-none d-lg-block d-md-block  ">
            <MainButton type="filled" @click="$router.replace('/register')" class="ml-3" text="Sign Up" size="sm" />
            <MainButton type="outline" @click="$router.replace('/login')" text="Login " size="sm" />
          </div>
          <div class=" d-block d-lg-none d-md-none ">
            <MainButton type="filled" @click="$router.replace('/register')" class="mr-3" text="Sign Up" size="sm" />
            <MainButton type="outline" @click="$router.replace('/login')" text="Login " size="sm" />
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import MainButton from "../form/MainButton";
export default {
  name: "TopNav",

  components: {
    MainButton
  }
};
</script>

<style scoped lang="scss">
.nav-height {
  height: 70px !important;
}
a.nav-link:hover {
  color: color(main-red) !important;
}
</style>
