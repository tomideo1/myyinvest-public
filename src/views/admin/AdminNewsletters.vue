<template>
  <div>
    <div class="main-content">
      <section class="table content-titles">
        <div class="sn">S/N</div>
        <div class="date">Date</div>
        <div class="email">Email Address</div>
        <div class="location">Location</div>
        <div class="options"></div>
      </section>

      <section class="table contents" v-for="x in 10" :key="x">
        <div class="sn">{{ formatNum(x) }}</div>
        <div class="date">17th Feb. 2021</div>
        <div class="email">voffiah@gmail.com</div>
        <div class="location">14, Shinra Tensei Street, Amaterasu Town, Gakido, land of Water.</div>
        <div class="options">
          <span>
            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000" @click="deleteItem">
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

export default {
  name: "AdminNewsletters",

  metaInfo: {
    title: "Myyinvest - Newsletters (Admin)",
    titleTemplate: null
  },

  components: { BasePagination, BaseDeleteModal },

  data() {
    return {
      status: "Published",
      currentPage: 1,
      noDeleteModal: true
    };
  },

  methods: {
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
  display: flex;
  justify-content: center;
  width: 23%;
  padding: 2px;
}

section div.sn {
  width: 10%;
}

section div.options {
  width: 6%;
}

section div.location {
  width: 38%;
}

section:first-child {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background-color: var(--myyinvest-white);
}

section.contents {
  margin-bottom: var(--base-size);
}

section:first-child div {
  color: gray;
  font-weight: 600;
}

section div img {
  width: 100%;
  height: 60px;
}

div.options {
  justify-content: space-around !important;
}
</style>
