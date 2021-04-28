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
          <article>
            <div class="content-wrapper">
              <slot />
            </div>
          </article>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import TheDeviceInfo from "@/components/admin/TheDeviceInfo.vue";
import TheNav from "@/components/layout/admin/TheNav.vue";
import TheSideNav from "@/components/layout/admin/TheSideNav.vue";
import "@/assets/admin/styles/layout.css";
import "@/assets/admin/styles/table.css";
import "@/assets/admin/styles/form.css";
import "@/assets/admin/styles/invalid-form.css";

export default {
  name: "AdminLayout",

  components: { TheDeviceInfo, TheNav, TheSideNav },

  methods: {
    deviceType() {
      const ua = navigator.userAgent;

      if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
      } else if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
      } else return "desktop";
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

<style scoped>
main article {
  height: 85vh;
}
</style>
