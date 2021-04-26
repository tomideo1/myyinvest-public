<template>
  <div>
    <div id="wrapper" :class="{ 'scroll-lock': mobileNavOn }">
      <!-- Sidebar -->
      <!--      <b-sidebar id="sidebar-no-header" :visible="true" :shadow="true" no-header>-->
      <ul
        :class="class1"
        tabindex="-1"
        id="accordionSidebar"
        style="background: url('https://res.cloudinary.com/myyinvest/image/upload/v1614000904/mmyyinvest-2.0/svgs/sidebarclip_u5hmun.svg') no-repeat bottom;"
      >
        <!-- <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/" style="background: white!important;">
          <div class="mr-auto">
            <main-icon size="lg" name="logo-min" />
          </div>
        </a> -->
        <div class="sidebar-brand d-flex align-items-center justify-content-center" style="background: white!important;">
          <router-link class="sidebar__logo" to="/">
            <main-icon size="lg" name="logo-min" />
          </router-link>
        </div>
        <!-- eslint-disable -->
        <!-- <div class="mt-5 "> -->
        <div class="navbar-items">
          <span class="d-flex flex-column align-items-center justify-content-center">
            <avatar :user="getProfile" size="lg" />
            <!-- navbar-username style is in _sidebar.scss -->
            <p class="ft-14 font-weight-normal navbar-username">Welcome, {{ getUserName }}</p>
          </span>
          <li @click="$router.push(item.to)" :class="['nav-item p-3 style_item', getCurrentRoute === item.identifier ? 'active-item' : '']" v-for="(item, index) in sidebarItems" :key="index">
            <span class="d-flex flex-row pl-3 ">
              <main-icon :name="item.routeIcon" class="mr-lg-3 mr-md-3 " :active="getCurrentRoute === item.identifier" />
              <a href="javascript:void(0)" class="ft-12 font-weight-lighter mt-1 text-white">
                <span>{{ item.title }}</span>
              </a>
            </span>
          </li>
        </div>
      </ul>
      <!--      </b-sidebar>-->

      <div id="content-wrapper" class="d-flex flex-column" @click="mobileNavCheck">
        <div id="content">
          <!-- TopBar -->
          <nav class="navbar navbar-expand navbar-light bg-navbar bg-white shadow-3 topbar mb-4 static-top">
            <!-- <button id="sidebarToggleTop" @click="toggle" :class="'btn btn-link rounded-circle mr-3'"> -->
            <button id="sidebarToggleTop" @click="toggleDesktopNav" :class="'btn btn-link rounded-circle mr-3'" title="toggle navigation bar">
              <i class="fa fa-bars text-black"></i>
            </button>
            <!-- hamburger menu style is in _topbar.scss -->
            <div class="nav-hamburger" @click="toggleMobileNav" tabindex="-1">
              <div class="block-1"></div>
              <div class="block-2"></div>
              <div class="block-3"></div>
            </div>
            <a class="nav-link  ft-20 ml-lg-0 text-uppercase" @click="$router.go(-1)" style="margin-left: 10%">
              <main-icon name="back" size="sm" />
            </a>

            <ul class="navbar-nav mx-auto d-none d-lg-block d-md-none ">
              <li class="nav-item d-flex flex-row ">
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

                  <!--                  <avatar :user="getProfile" size="md" />-->
                  <!--                  <img class="img-profile rounded-circle mr-4" src="@/assets/images/avatar.png" style="max-width: 60px" />-->
                </a>
                <div class="dropdown-menu w-25 dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                  <router-link class="dropdown-item" :to="{ name: 'settings' }">
                    <main-icon name="cog" class="settings-icon" size="xs" />
                    Settings
                  </router-link>
                  <a class="dropdown-item" @click="handleLogout" href="javascript:void(0);" data-toggle="modal" data-target="#logoutModal">
                    <!-- <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i> -->
                    <i class="fas fa-sign-out-alt fa-fw text-gray-400"></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div class="container-fluid" id="container-wrapper">
            <!-- <div class="container-fluid bg-danger" id="container-wrapper"> -->
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
      mobileNavOn: false,
      desktopToggled: false,
      navElem: ""
      // class1: ["navbar-nav sidebar sidebar-light accordion"]
    };
  },
  components: {
    Avatar,
    MainIcon
  },

  computed: {
    ...mapGetters(["getUser", "getUserName", "getProfile"]),
    getCurrentRoute() {
      const activeRoute = this.$route.path.split("/");
      return activeRoute[2];
      // return this.$route.name;
    },
    class1() {
      // responsive-sidebar style is in _sidebar.scss
      return [{ "responsive-sidebar": this.mobileNavOn, toggled: this.desktopToggled }, "navbar-nav sidebar sidebar-light accordion"];
    }
  },
  methods: {
    ...mapActions(["logout"]),
    // toggle() {
    //   if (this.class1.lastIndexOf("toggled") === 1) {
    //     const myIndex = this.class1.indexOf("️toggled");
    //     this.class1.splice(myIndex, 1);
    //   } else {
    //     this.class1.push("toggled");
    //   }
    // },
    toggleDesktopNav() {
      this.desktopToggled = !this.desktopToggled;
    },
    toggleMobileNav() {
      this.mobileNavOn = !this.mobileNavOn;
    },
    // this function is used to close the navigation bar once the outside of it is clicked
    // there's a click event on the main container (id="content-wrapper") outside the sidebar
    mobileNavCheck($event) {
      // if the element that was clicked is not part of the hamburger menu and mobile nav is on, close the mobile nav
      if (!this.navElem.contains($event.target) && this.mobileNavOn) {
        this.mobileNavOn = false;
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
    this.navElem = document.querySelector(".nav-hamburger");
    // console.log(this.getProfile);
  }
};
</script>

<style lang="scss" scoped>
.scroll-lock {
  position: fixed;
  width: 100vw;
}

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

.settings-icon {
  // margin-right: 0.15em;
  filter: none !important;
}

// modifying the default bootstrap dropdown menu size
.dropdown-menu {
  max-width: 20em !important;
}

// modifying default bootstrap dropdown-item hover and active styles and our custom icons
.dropdown-item {
  color: color(bv-grey-800);

  &:hover {
    color: color(main-red);
    background: color(bv-grey-200);
  }
  &.active {
    color: color(bv-white) !important;
    pointer-events: none;
  }

  i,
  .icon {
    // .icon is from main-icon and i tag is for the font-awesome icon
    margin-right: 0.4em;
  }
}
</style>
