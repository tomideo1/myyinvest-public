<template>
  <div>
    <div class="main-content">
      <section class="table content-titles">
        <div class="sn">S/N</div>
        <div class="fullname">Account Name</div>
        <div class="bank">Account Details</div>
      </section>

      <section class="table contents" v-for="x in 10" :key="x">
        <div class="sn">{{ formatNum(x) }}</div>
        <div class="fullname">Fullname</div>
        <div class="bank">
          <div>Bank1 (3454679909 - Savings), Bank2 (5993467990 - Current)</div>
          <span class="more-options-btn" v-if="x % 3 === 0">
            <svg width="17" height="22" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="394 756 17 22">
              <svg width="5" height="5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000" x="406" y="756">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="5" height="5">
                  <path
                    paint-order="stroke fill markers"
                    fill-rule="evenodd"
                    d="M2.575 4.8A2.023 2.023 0 0 1 .55 2.775C.55 1.655 1.455.75 2.575.75c1.12 0 2.025.905 2.025 2.025 0 1.12-.905 2.025-2.025 2.025z"
                  />
                </svg>
              </svg>
              <svg width="5" height="5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000" x="406" y="764">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="5" height="5">
                  <path
                    paint-order="stroke fill markers"
                    fill-rule="evenodd"
                    d="M2.575 4.9A2.023 2.023 0 0 1 .55 2.875C.55 1.755 1.455.85 2.575.85c1.12 0 2.025.905 2.025 2.025 0 1.12-.905 2.025-2.025 2.025z"
                  />
                </svg>
              </svg>
              <svg width="5" height="6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000" x="406" y="772">
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="6">
                  <path
                    paint-order="stroke fill markers"
                    fill-rule="evenodd"
                    d="M2.575 5A2.023 2.023 0 0 1 .55 2.975C.55 1.855 1.455.95 2.575.95c1.12 0 2.025.905 2.025 2.025C4.6 4.095 3.695 5 2.575 5z"
                  />
                </svg>
              </svg>
            </svg>
            <div class="more-options-wrap">
              <ul>
                <li>Bank3 (9934516780 - DOM)</li>
                <li>Bank4 (4912678830 - Others)</li>
                <li>Bank5 (9934516780 - DOM)</li>
                <li>Bank6 (4912678830 - Others)</li>
              </ul>
            </div>
          </span>
        </div>
      </section>
    </div>

    <base-pagination :currentPage="currentPage" />
  </div>
</template>

<script>
import BasePagination from "@/components/admin/BasePagination.vue";
import "@/assets/admin/styles/more-options.css";

export default {
  name: "AdminBankAccounts",

  metaInfo: {
    title: "Myyinvest - Bank Accounts (Admin)",
    titleTemplate: null
  },

  components: { BasePagination },

  data() {
    return {
      currentPage: 1,
      totalpages: 5
    };
  },

  methods: {
    previousPage() {
      if (!this.isFirstPage) {
        this.currentPage--;
      }
    },

    nextPage() {
      if (!this.isLastPage) {
        this.currentPage++;
      }
    }
  },

  computed: {
    isFirstPage() {
      return this.currentPage === 1;
    },

    isLastPage() {
      return this.currentPage === this.totalpages;
    }
  }
};
</script>

<style scoped>
section:not(:first-child) div.investment-cost {
  color: var(--myyinvest-green);
}

section:not(:last-child) {
  margin-bottom: var(--base-size);
}

section div.sn {
  width: 8%;
}

section div.fullname {
  width: 28%;
}

section div.bank {
  width: 64%;
}

section div.bank div {
  width: 100%;
}

section div.bank span {
  margin-left: auto;
}

.more-options-wrap {
  width: 100px !important;
}

.more-options-btn .more-options-wrap {
  width: 250px !important;
}
</style>
