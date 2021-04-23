<template>
  <div class="main-wrap">
    <the-device-info v-if="!supportedDevice" />

    <div class="body" v-if="supportedDevice">
      <nav class="top-nav">
        <the-nav>
          <template #username v-if="requireName()">({{ selected_user.fullname }})</template>
        </the-nav>
      </nav>
      <main>
        <nav class="side-nav">
          <the-side-nav />
        </nav>

        <div class="main-contents">
          <the-header-options @printCurrentUser="printPreview" />

          <article>
            <div class="content-wrapper">
              <slot />

              <admin-print-user-detail @closePrintPreview="printPreview" v-if="!noUserDetails" />
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
import AdminPrintUserDetail from "@/views/admin/AdminPrintUserDetail.vue";
import "@/assets/admin/styles/layout.css";
import "@/assets/admin/styles/table.css";
import { mapState } from "vuex";

export default {
  name: "AdminLayoutWithOptions",

  components: { TheDeviceInfo, TheHeaderOptions, TheNav, TheSideNav, AdminPrintUserDetail },

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

    requireName() {
      const user_t = /^\/admin\/users\/[1-9][0-9]*\/transactions$/gim;

      const currentRoute = this.$route.fullPath;

      if (currentRoute.match(user_t)) {
        return true;
      } else return false;
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
    },

    ...mapState({
      selected_user: state => state.admin.selected_user
    })
  }
};
</script>

// src="@/assets/admin/styles/admin-layout.css"
<style scoped>
main article {
  height: 78vh;
}
</style>
