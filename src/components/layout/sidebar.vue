<template>
  <div class="container-fluid">
    <b-row>
      <main-side-bar :visible="toggled" :items="sidebarItems" />
      <main>
        <!-- Main Navbar -->
        <main-nav-bar />

        <!-- Content -->
        <slot />
      </main>
    </b-row>
  </div>
</template>

<script>
import getSidebarItems from "../data/sideBarNavItems";
export default {
  name: "SideBar",
  data() {
    return {
      toggled: true,
      sidebarItems: getSidebarItems()
    };
  },
  components: {
    mainNavBar: () => import(/* webpackChunkName: \\"mainnavbar\\" */ "../dashboard/mainNavBar"),
    mainSideBar: () => import(/* webpackChunkName: \\"mainSideBar\\" */ "../dashboard/mainSideBar")
  },
  mounted() {
    this.$Bus.$on("toggled", res => {
      this.toggled = res.toggled;
    });
  }
};
</script>

<style scoped></style>
