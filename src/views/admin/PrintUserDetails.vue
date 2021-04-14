<template>
  <!-- <div class="overlay">
    <div class="overlay-content">
      <div class="" id="printArea">
        <div class="logo-area">
          <img width="324" height="52" src="@/assets/logos/Myylogo2.png" alt="Myyinvest Logo" />
        </div>

        <div class="title-area">Details for User Sososo</div> -->
  <the-print-wrap>
    <div class="title-area" slot="title">Details for User Sososo</div>
    <view-user-details slot="content" />
  </the-print-wrap>
  <!-- </div>
      <div class="btn-grp">
        <button v-print="'#printArea'">Print this</button>
      <button @click="closePrintPreview">Close</button>
      </div>
    </div>
  </div> -->
</template>

<script>
import ViewUserDetails from "@/views/admin/ViewUserDetails.vue";
import ThePrintWrap from "@/components/layout/admin/ThePrintWrap.vue";

export default {
  name: "PrintUserDetails",

  components: { ViewUserDetails, ThePrintWrap },

  // props: {
  //   noUserDetails: {
  //     type: Boolean,
  //     default: true
  //   }
  // },

  // data() {
  //   return {
  //     value: "Child"
  //   }
  // },

  mounted() {
    this.$emit("callCloseModal");
  }

  // methods: {
  //   closePrintPreview() {
  //     this.$emit("closePrintPreview");
  //   }
  // }
};
</script>

<style scoped></style>
