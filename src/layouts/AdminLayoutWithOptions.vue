<template>
  <div class="main-wrap">
    <the-device-info v-if="!supportedDevice" />

    <div class="body" v-if="supportedDevice">
      <nav class="top-nav">
        <the-nav />
      </nav>
      <main>
        <nav class="side-nav">
          <the-side-nav />
        </nav>

        <div class="main-contents">
          <the-header-options @printCurrentUser="printPreview" />
          <!-- @pagePreview="printPreview" -->

          <article>
            <div class="content-wrapper">
              <slot />

              <print-user-details @closePrintPreview="printPreview" v-if="!noUserDetails" />
            </div>
          </article>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import TheDeviceInfo from "@/components/admin/TheDeviceInfo.vue";
import TheHeaderOptions from "@/components/admin/TheHeaderOptions";
import TheNav from "@/components/layout/admin/TheNav.vue";
import TheSideNav from "@/components/layout/admin/TheSideNav.vue";
import PrintUserDetails from "@/views/admin/PrintUserDetails.vue";
import "@/assets/admin/styles/layout.css";
import "@/assets/admin/styles/table.css";

export default {
  name: "TheAdminLayout",

  // components: { TheDeviceInfo, TheHeaderOptions, TheNav, TheSideNav },
  components: { TheDeviceInfo, TheHeaderOptions, TheNav, TheSideNav, PrintUserDetails },

  // props: {
  //   noUserDetails: {
  //     type: Boolean,
  //     default: true
  //   }
  // },

  data() {
    return {
      noUserDetails: true
    };
  },

  methods: {
    deviceType() {
      const ua = navigator.userAgent;

      if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
      } else if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
      } else return "desktop";
    },

    printPreview() {
      this.noUserDetails = !this.noUserDetails;
    }
  },

  created() {
    return this.deviceType();
  },

  computed: {
    supportedDevice() {
      return this.deviceType() === "desktop";
    }
  }
};
</script>

// src="@/assets/admin/styles/admin-layout.css"
<style scoped>
/* *:focus:not(:-moz-focusring) {
  outline: none;
}

*:focus:not(:focus-visible) {
  outline: none;
}

.main-wrap {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

div.body {
  margin: 0;
  border: 0;
  font-size: var(--font-normal);
}

main {
  display: grid;
  grid-template-columns: 20% 80%;
}

nav.top-nav {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  height: var(--topnav-height);
  background-color: var(--myyinvest-white);
  box-shadow: 0 1px 4px 0 rgba(158, 157, 157, 0.5);
  z-index: 999;
}

main {
  max-height: 50vh !important;
  z-index: 1;
}

main nav.side-nav {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  height: calc(100vh - (1.01 * var(--topnav-height)));
  color: var(--myyinvest-red);
  box-shadow: 1px 0 2px 0 rgba(158, 157, 157, 0.5);
  font-weight: 600;
  background-image: url("../assets/admin/images/nav-background.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: border-box;
  -webkit-background-origin: border-box;
  -moz-background-origin: content-box;
  background-position: 0 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

main nav.side-nav::-webkit-scrollbar {
  display: none;
}

main nav.side-nav::-webkit-scrollbar {
  display: none;
}

.main-contents {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  margin: 20px;
}

main article {
  height: 78vh;
  padding: 10px;
  box-shadow: 0 0 2px 0 gray;
  border-radius: 10px;
}

main article .content-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid var(--myyinvest-red);
  border-radius: 10px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

main article .content-wrapper::-webkit-scrollbar {
  display: none;
} */

main article {
  height: 78vh;
  /* border: 2px solid purple; */
}
</style>
