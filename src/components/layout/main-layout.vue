<template>
  <div id="page-top">
    <div id="wrapper">
      <!-- Sidebar -->
      <b-sidebar id="my-sidebar" :shadow="true" no-header>
        <ul class="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
          <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="mr-auto">
              <main-icon size="lg" name="logo-min" />
            </div>
          </a>
          <li class="nav-item active">
            <a class="nav-link" href="index.html">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span></a
            >
          </li>
        </ul>
      </b-sidebar>

      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <!-- TopBar -->
          <nav class="navbar navbar-expand navbar-light bg-navbar bg-white shadow-3 topbar mb-4 static-top">
            <button id="sidebarToggleTop" v-b-toggle.my-sidebar :class="'btn btn-link rounded-circle mr-3'">
              <i class="fa fa-bars text-black"></i>
            </button>

            <ul class="navbar-nav mx-auto d-none d-lg-block d-md-none ">
              <li class="nav-item ">
                <a class="nav-link  ft-20 ml-5 pl-5">Overview</a>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown no-arrow ">
                <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <main-icon name="bell" />
                </a>
              </li>
              <div class="topbar-divider d-none d-sm-block"></div>
              <li class="nav-item dropdown ">
                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="d-flex flex-column">
                    <span class="mr-3  d-lg-inline text-black ft-12">Hi, Valntine Offiah</span>
                    <span class="mr-3  d-lg-inline text-black ft-10 ml-auto">Admin</span>
                  </span>
                  <img class="img-profile rounded-circle mr-4" src="@/assets/images/avatar.png" style="max-width: 60px" />
                </a>
                <div class="dropdown-menu w-25 dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                  <a class="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#logoutModal">
                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div class="container-fluid" id="container-wrapper">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainIcon from "../Shared/mainIcon";
export default {
  name: "main-layout",
  data() {
    return {
      class1: [],
      class2: ["navbar-nav sidebar sidebar-light accordion"]
    };
  },
  components: {
    MainIcon
    // eslint-disable-next-line vue/no-unused-components
  },

  methods: {}
};
</script>

<style lang="scss">
@media only screen and (min-width: 280px) and (max-width: 540px) {
  .content-container {
    margin-top: 22% !important;
  }
}
@media only screen and (min-width: 600px) and (max-width: 1024px) {
  .content-container {
    padding: 50px;
    /*margin-top: 22%!important;*/
  }
}
@media only screen and (max-width: 280px) {
  .content-container {
    margin-top: 30% !important;
  }
}
@media only screen and (width: 540px) {
  .content-container {
    margin-top: 15% !important;
  }
}
</style>
