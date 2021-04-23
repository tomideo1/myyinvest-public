<template>
  <the-print-wrap>
    <div class="title-area" slot="title">Details for User Sososo</div>
    <admin-users-view slot="content" />
  </the-print-wrap>
</template>

<script>
import AdminUsersView from "@/views/admin/AdminUsersView.vue";
import ThePrintWrap from "@/components/layout/admin/ThePrintWrap.vue";

export default {
  name: "AdminPrintUserDetail",

  components: { AdminUsersView, ThePrintWrap },

  mounted() {
    this.$emit("callCloseModal");
  }
};
</script>

<style scoped></style>
