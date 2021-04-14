<template>
  <div>
    <div class="main-content">
      <section class="table content-titles">
        <div class="sn">S/N</div>
        <div class="fullname">Fullname</div>
        <div class="phone">Phone Number</div>
        <div class="email">Email Address</div>
        <div class="wallet">Wallet Account</div>
      </section>

      <section class="table contents" v-for="x in 10" :key="x">
        <div class="sn">{{ zeroPrefix(x) }}{{ x }}</div>
        <div class="fullname">Fullname</div>
        <div class="phone">Phone Number</div>
        <div class="email">Email Address</div>
        <div class="wallet">Wallet Account</div>
      </section>
    </div>

    <base-pagination :currentPage="currentPage" />
  </div>
</template>

<script>
import BasePagination from "@/components/admin/BasePagination.vue";

export default {
  name: "AdminTransactions",

  metaInfo: {
    title: "Myyinvest - Transactions (Admin)",
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
    zeroPrefix(num) {
      if (num < 10) {
        return 0;
      } else return "";
    },

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
.main-content {
  padding: 1px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.main-content::-webkit-scrollbar {
  display: none;
}

section {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 5px;
  box-shadow: 0 0 2px 0 gray;
  border-radius: 5px;
}

section:not(:first-child) div.investment-cost {
  color: var(--myyinvest-green);
}

section:not(:last-child) {
  margin-bottom: var(--base-size);
}

section div {
  display: flex;
  justify-content: center;
  width: 17%;
  padding: 2px;
}

section div.sn {
  width: 9%;
}

section div.wallet {
  width: 40%;
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

section:not(:first-child) div.status {
  color: var(--myyinvest-white);
}

section div.status .status-content {
  width: 100%;
  padding: 2px 1px;
  border-radius: 5px;
}
</style>
