<template>
  <div>
    <div class="main-content">
      <section class="table content-titles">
        <div class="sn">S/N</div>
        <div class="title-p">Post Title</div>
        <div class="image">Post Image</div>
        <div class="author">Post Author</div>
        <div class="tags">Post Tags</div>
        <div class="category">Post Category</div>
        <div class="status">Post Status</div>
        <div class="date">Post Date</div>
        <div class="options"></div>
      </section>

      <section class="table contents" v-for="x in 10" :key="x">
        <div class="sn">{{ formatNum(x) }}</div>
        <div class="title-p">How to invest seamlessly in Real Estate</div>
        <div class="image">
          <img src="@/assets/admin/images/dummy-img.jpg" alt="Content Image" />
        </div>
        <div class="author">Valentine Offiah</div>
        <div class="tags">Real Estates Investments, Finance</div>
        <div class="category">Blog</div>
        <div class="status" :style="changeColor(status)">{{ status }}</div>
        <div class="date">17th Feb. 2021</div>
        <div class="options">
          <span>
            <svg width="15" height="13" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#0a47a0">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                <path
                  paint-order="stroke fill markers"
                  fill-rule="evenodd"
                  d="M9.837 8.962l.773-.773a.195.195 0 0 1 .332.137v3.514c0 .64-.52 1.16-1.16 1.16H1.275c-.64 0-1.16-.52-1.16-1.16V3.334c0-.641.52-1.16 1.16-1.16h6.61c.171 0 .258.208.137.33l-.773.774a.194.194 0 0 1-.138.056H1.275v8.506h8.507V9.097c0-.05.019-.1.055-.135zm3.784-4.877L7.276 10.43l-2.185.242A.998.998 0 0 1 3.989 9.57l.242-2.185 6.346-6.346a1.41 1.41 0 0 1 1.998 0l1.044 1.044c.553.554.553 1.45.002 2zm-2.387.747L9.83 3.428 5.34 7.92l-.176 1.578 1.578-.176 4.492-4.49zM12.8 2.906l-1.044-1.044a.253.253 0 0 0-.358 0l-.746.747 1.404 1.404.746-.747a.257.257 0 0 0-.002-.36z"
                />
              </svg>
            </svg>
          </span>
          <span>
            <svg width="17" height="11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#0baa12">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11">
                <path
                  paint-order="stroke fill markers"
                  fill-rule="evenodd"
                  d="M16.9 5.082C15.347 2.05 12.27 0 8.75 0 5.229 0 2.152 2.052.6 5.082a.925.925 0 0 0 0 .836C2.153 8.948 5.229 11 8.75 11c3.52 0 6.598-2.052 8.15-5.082a.925.925 0 0 0 0-.836zM8.75 9.625c-2.826 0-5.417-1.576-6.816-4.125 1.399-2.55 3.99-4.125 6.816-4.125 2.826 0 5.417 1.576 6.816 4.125-1.4 2.549-3.99 4.125-6.816 4.125zm0-7.333a3.158 3.158 0 0 0-.895.143c.134.236.206.502.208.773 0 .886-.72 1.605-1.605 1.605a1.591 1.591 0 0 1-.773-.208A3.2 3.2 0 1 0 8.75 2.292z"
                />
              </svg>
            </svg>
          </span>
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
  name: "AdminInsightView",

  metaInfo: {
    title: "Myyinvest - View Insights (Admin)",
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
    changeColor(val) {
      if (val.toLowerCase().normalize() === "published") {
        return "color: var(--myyinvest-green)";
      } else return "color: var(--myyinvest-danger)";
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
  width: 11%;
}

section div.sn {
  width: 6%;
}

section div.title-p,
section div.options {
  width: 14%;
}
</style>
