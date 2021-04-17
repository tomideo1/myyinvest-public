<template>
  <the-print-wrap>
    <div class="title-area" slot="title">Details for User Sososo</div>
    <view-user-details slot="content" />
  </the-print-wrap>
</template>

<script>
import ViewUserDetails from "@/views/admin/ViewUserDetails.vue";
import ThePrintWrap from "@/components/layout/admin/ThePrintWrap.vue";

export default {
  name: "PrintUserDetails",

  components: { ViewUserDetails, ThePrintWrap },

  mounted() {
    this.$emit("callCloseModal");
  }
};
</script>

<style scoped></style>
