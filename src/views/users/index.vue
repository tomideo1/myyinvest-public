<template>
  <div>
    <main-layout />
    <router-view />
  </div>
</template>

<script>
import MainLayout from "../../components/layout/main-layout";
export default {
  name: "index",
  components: { MainLayout }
};
</script>

<style scoped></style>
