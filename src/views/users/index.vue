<template>
  <div>
    <main-layout>
      <router-view />
    </main-layout>
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
