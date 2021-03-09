<template>
  <div>
    <div id="wrapper">
      <!-- Sidebar -->
      <!--      <b-sidebar id="sidebar-no-header" :visible="true" :shadow="true" no-header>-->
      <ul :class="class1" id="accordionSidebar" style="background: url('https://res.cloudinary.com/myyinvest/image/upload/v1614000904/mmyyinvest-2.0/svgs/sidebarclip_u5hmun.svg') no-repeat bottom;">
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html" style="background: white!important;">
          <div class="mr-auto">
            <main-icon size="lg" name="logo-min" />
          </div>
        </a>
        <div class="mt-5 ">
          <span class="d-flex flex-column align-items-center justify-content-center">
            <avatar :user="getUser" size="lg-1" />
            <p class="text-white mt-4 text-center  ft-14 font-weight-normal">Welcome, {{ getUserName }}</p>
          </span>
          <li
            @click="$router.push(item.to)"
            :class="['nav-item  p-3 style_item mt-3 mb-3', getCurrentRoute === item.identifier ? 'active-item' : '']"
            v-for="(item, index) in sidebarItems"
            :key="index"
          >
            <span class="d-flex flex-row pl-3 ">
              <main-icon :name="item.routeIcon" class="mr-lg-3 mr-md-3 " :active="getCurrentRoute === item.identifier" />
              <a href="javascript:void(0)" class="ft-12  font-weight-lighter mt-1 text-white">
                <span>{{ item.title }}</span>
              </a>
            </span>
          </li>
        </div>
      </ul>
      <!--      </b-sidebar>-->

      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <!-- TopBar -->
          <nav class="navbar navbar-expand navbar-light bg-navbar bg-white shadow-3 topbar mb-4 static-top">
            <button id="sidebarToggleTop" @click="toggle" :class="'btn btn-link rounded-circle mr-3'">
              <i class="fa fa-bars text-black"></i>
            </button>

            <ul class="navbar-nav mx-auto d-none d-lg-block d-md-none ">
              <li class="nav-item ">
                <a class="nav-link  ft-20 ml-5 pl-5  text-uppercase">{{ getCurrentRoute }}</a>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown no-arrow ">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="alertsDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  @click="$router.push({ name: 'notifications' })"
                >
                  <main-icon name="bell" />
                </a>
              </li>
              <div class="topbar-divider d-none d-sm-block"></div>
              <li class="nav-item dropdown ">
                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="d-flex flex-column">
                    <span class="mr-3  d-lg-inline text-black ft-12">Hi, {{ getUserName }}</span>
                    <span class="mr-3  d-lg-inline text-black ft-10 ml-auto">{{ getUser.user_role }}</span>
                  </span>

                  <avatar :user="getUser" size="md" />
                  <!--                  <img class="img-profile rounded-circle mr-4" src="@/assets/images/avatar.png" style="max-width: 60px" />-->
                </a>
                <div class="dropdown-menu w-25 dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                  <a class="dropdown-item" @click="handleLogout" href="javascript:void(0);" data-toggle="modal" data-target="#logoutModal">
                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <!-- <div class="container-fluid bg-danger" id="container-wrapper"> -->
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
import getSidebarItems from "@/components/data/sideBarNavItems";
import Avatar from "../Shared/avatar";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "main-layout",
  data() {
    return {
      sidebarItems: getSidebarItems(),
      class1: ["navbar-nav sidebar sidebar-light accordion"]
    };
  },
  components: {
    Avatar,
    MainIcon
    // eslint-disable-next-line vue/no-unused-components
  },

  computed: {
    ...mapGetters(["getUser", "getUserName"]),
    getCurrentRoute() {
      return this.$route.name;
    }
  },
  methods: {
    ...mapActions(["logout"]),
    toggle() {
      if (this.class1.lastIndexOf("toggled") === 1) {
        const myIndex = this.class1.indexOf("️toggled");
        this.class1.splice(myIndex, 1);
      } else {
        this.class1.push("toggled");
      }
    },
    async handleLogout() {
      await this.logout();
      //
      // localStorage.clear();
      await this.$router.push("/login");
    }
  },
  mounted() {
    console.log(this.getUser);
  }
};
</script>

<style lang="scss" scoped>
.style_item {
  position: relative;
  z-index: 100;
  padding: 15px 0;
  cursor: pointer;
}

.style_item::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 90%;
  background-color: #fff;
  transition: height 275ms ease-in;
  border-radius: 0 50px 50px 0;
  visibility: hidden;
}

.active-item {
  width: 90%;
  background-color: #ffffff;

  transition: height 275ms ease-in;
  border-radius: 0 50px 50px 0;
  a {
    color: color(main-red) !important;
  }
}

.style_item:hover {
  color: #000;
  transition: color 275ms ease;
}

.style_item:hover::before {
  height: 100%;
  opacity: 0.5;
  cursor: pointer;
  transition: height 275ms ease-in;
  visibility: visible;
  z-index: -1;
}
</style>
