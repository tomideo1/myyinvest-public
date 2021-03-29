<template>
  <div class="main-wrap">
    <p class="warning-info" v-if="!supportedDevice">
      Hello friend, <br />
      This page is only available on bigger screens.
    </p>
    <div class="body" v-if="supportedDevice">
      <nav class="top-nav">
        <the-nav />
      </nav>
      <main>
        <nav class="side-nav">
          <the-side-nav />
        </nav>

        <div class="main-contents">
          <div class="sort-by" v-if="viewInsights">
            <select name="" id="">
              <option value="">Sort by date</option>
            </select>
          </div>

          <article :style="smallHeight()">
            <div class="content-wrapper">
              <!-- <component :is="layout"> -->
              <slot />
              <!-- </component> -->
            </div>
          </article>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import TheNav from "@/components/layout/admin/TheNav.vue";
import TheSideNav from "@/components/layout/admin/TheSideNav.vue";

// const defaultLayout = "";

export default {
  name: "TheAdminLayout",
  components: { TheNav, TheSideNav },

  methods: {
    deviceType() {
      const ua = navigator.userAgent;

      if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
      } else if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
      } else return "desktop";
    },

    smallHeight() {
      if (this.$route.path.includes("/admin/view-insights")) {
        return "height: 78vh;";
      } else return "";
    }
  },

  created() {
    return this.deviceType();
  },

  computed: {
    viewInsights() {
      return this.$route.path.includes("/admin/view-insights");
    },

    supportedDevice() {
      return this.deviceType() === "tablet" || this.deviceType() === "desktop";
    }

    // layout() {
    //   const layout = this.$route.meta.layout || defaultLayout;
    //   return () => import(`@/layouts/${layout}.vue`);
    // },
  }
};
</script>

<style scoped>
.main-wrap {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.warning-info {
  padding: 20px;
  font-size: var(--font-lg);
  color: var(--myyinvest-red);
}

div.body {
  margin: 0;
  border: 0;
  font-size: var(--font-normal);
  background-color: var(--myyinvest-white);
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
  box-shadow: 2px 0 2px 0 gray;
  z-index: 999;
}

main {
  /* min-height: calc(100vh - var(--topnav-height)); */
  /* max-height: 100vh; */
  max-height: 50vh !important;
  z-index: 1;
}

main nav.side-nav {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  height: calc(100vh - (1.01 * var(--topnav-height)));
  /* padding-bottom: 100px; */
  color: var(--myyinvest-red);
  box-shadow: 0 2px 2px 0 gray;
  font-weight: 600;
  background-image: url("/assets/admin/images/nav-background.svg");
  background-repeat: no-repeat;
  background-position: 100% 120%;
  background-origin: border-box;
  background-size: auto;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
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
  height: 85vh;
  padding: 10px;
  box-shadow: 0 0 2px 0 gray;
  border-radius: 10px;
}

main article .content-wrapper {
  /* position: relative; */
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

.sort-by {
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: var(--base-size);
}

.sort-by select {
  /* width: 100%; */
  height: fit-content;
  height: -moz-fit-content;
  height: max-content;
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: var(--base-size);
  background-color: var(--myyinvest-white);
  -moz-appearance: none;
  -webkit-appearance: none;
  text-indent: 0.01px;
  text-overflow: "";
}
</style>
