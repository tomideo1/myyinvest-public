<template>
  <div>
    <div class="main-content">
      <section class="table content-titles">
        <div class="sn">S/N</div>
        <div class="fname">First Name</div>
        <div class="lname">Last Name</div>
        <div class="email">Email Address</div>
        <div class="phone">Phone Number</div>
        <div class="dob">Date of Birth</div>
        <div class="dor">Date of registration</div>
        <div class="options"></div>
      </section>

      <section class="table contents" v-for="x in 10" :key="x">
        <div class="sn">{{ formatNum(x) }}</div>
        <div class="fname">Valentine</div>
        <div class="lname">Offiah</div>
        <div class="email">voffiah@gmail.com</div>
        <div class="phone">09051843790</div>
        <div class="dob">17th Feb. 2021</div>
        <div class="dor">17th Feb. 2021</div>
        <div class="options">
          <span class="view more-options-btn">
            <svg width="17" height="11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#0baa12">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11">
                <path
                  paint-order="stroke fill markers"
                  fill-rule="evenodd"
                  d="M16.9 5.082C15.347 2.05 12.27 0 8.75 0 5.229 0 2.152 2.052.6 5.082a.925.925 0 0 0 0 .836C2.153 8.948 5.229 11 8.75 11c3.52 0 6.598-2.052 8.15-5.082a.925.925 0 0 0 0-.836zM8.75 9.625c-2.826 0-5.417-1.576-6.816-4.125 1.399-2.55 3.99-4.125 6.816-4.125 2.826 0 5.417 1.576 6.816 4.125-1.4 2.549-3.99 4.125-6.816 4.125zm0-7.333a3.158 3.158 0 0 0-.895.143c.134.236.206.502.208.773 0 .886-.72 1.605-1.605 1.605a1.591 1.591 0 0 1-.773-.208A3.2 3.2 0 1 0 8.75 2.292z"
                />
              </svg>
            </svg>
            <div class="more-options-wrap">
              <ul>
                <li @click="viewUserDetails(x)">User Details</li>
                <li @click="viewUserTransaction(x)">User Transactions</li>
              </ul>
            </div>
          </span>
          <span @click="deleteItem">
            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14">
                <path
                  paint-order="stroke fill markers"
                  fill-rule="evenodd"
                  d="M11.57 2.286H9.365L8.453.766A1.286 1.286 0 0 0 7.35.144h-2.7c-.452 0-.87.237-1.103.624l-.911 1.519H.429a.429.429 0 0 0-.43.428v.429c0 .237.193.428.43.428h.428v9c0 .71.576 1.286 1.286 1.286h7.714c.71 0 1.286-.575 1.286-1.286v-9h.428c.237 0 .429-.191.429-.428v-.43a.429.429 0 0 0-.43-.427zM9.858 12.57H2.143v-9h7.714v9zM4.603 1.507c.029-.05.08-.08.138-.078h2.518a.16.16 0 0 1 .138.078l.468.779h-3.73l.468-.78zm2.576 9.779h.642a.322.322 0 0 0 .322-.322V5.179a.322.322 0 0 0-.322-.322h-.642a.322.322 0 0 0-.322.322v5.785c0 .178.144.322.322.322zm-3 0h.642a.322.322 0 0 0 .322-.322V5.179a.322.322 0 0 0-.322-.322h-.642a.322.322 0 0 0-.322.322v5.785c0 .178.144.322.322.322z"
                />
              </svg>
            </svg>
          </span>
        </div>
      </section>
    </div>

    <base-pagination :currentPage="currentPage" />

    <base-delete-modal :noDeleteModal="noDeleteModal" @closeModal="closeModal" v-if="!noDeleteModal" />
  </div>
</template>

<script>
import BasePagination from "@/components/admin/BasePagination.vue";
import BaseDeleteModal from "@/components/admin/BaseDeleteModal.vue";
import "@/assets/admin/styles/more-options.css";

export default {
  name: "AllUsers",

  metaInfo: {
    title: "Myyinvest - All Users (Admin)",
    titleTemplate: null
  },

  components: { BasePagination, BaseDeleteModal },

  data() {
    return {
      currentPage: 1,
      noDeleteModal: true
    };
  },

  methods: {
    viewUserDetails(id) {
      this.$router.push("/admin/users/" + id);
    },

    viewUserTransaction(id) {
      this.$router.push("/admin/users/" + id + "/transactions");
    },

    deleteItem() {
      this.noDeleteModal = !this.noDeleteModal;
    },

    closeModal() {
      this.noDeleteModal = !this.noDeleteModal;
    }
  }
};
</script>

<style scoped>
section div {
  width: 14%;
}

section div.sn {
  width: 6%;
}

section div.options {
  width: 10%;
}
</style>
