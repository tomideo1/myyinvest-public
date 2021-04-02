<template>
  <the-admin-layout>
    <div class="main-content">
      <section class="content-titles">
        <div class="sn">S/N</div>
        <div class="email">Email Address</div>
        <div class="investment-cost">Investment Cost</div>
        <div class="tokens">Tokens</div>
        <div class="project">Project</div>
        <div class="payment-channel">Payment Channel</div>
        <div class="status">Post Status</div>
        <div class="date">Post Date</div>
      </section>

      <section class="contents" v-for="x in 10" :key="x">
        <div class="sn">{{ zeroPrefix(x) }}{{ x }}</div>
        <div class="email">voffiah@gmail.com</div>
        <div class="investment-cost">₦70000</div>
        <div class="tokens">35</div>
        <div class="project">Cambridge Apartment</div>
        <div class="payment-channel">RIBY</div>
        <div class="status">
          <div class="status-content" :style="changeBackgroundColor(status[x])">{{ status[x] }}</div>
        </div>
        <div class="date">17th Feb. 2021</div>
      </section>
    </div>

    <div class="pagination">
      <button>Previous</button>
      <button v-for="n in 5" :key="n" :class="[n === currentPage ? 'button-active' : '']">{{ n }}</button>
      <button>Next</button>
    </div>
  </the-admin-layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Myyinvest - Transactions (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      // status: "Success",
      currentPage: 1,
      totalpages: 5
    };
  },

  methods: {
    randomizedStatus() {
      let statuses = ["In progress", "In progress", "Success", "Success", "Success", "Success", "Success", "Failed", "Failed", "Failed", "Failed"];

      let arr2 = [];
      while (statuses.length !== 0) {
        let ri = Math.floor(Math.random() * statuses.length);
        arr2.push(statuses[ri]);
        statuses.splice(ri, 1);
      }

      return (statuses = arr2);
    },

    zeroPrefix(num) {
      if (num < 10) {
        return 0;
      } else return "";
    },

    changeBackgroundColor(val) {
      if (val.toLowerCase().normalize() === "in progress") {
        return "background-color: gray";
      } else if (val.toLowerCase().normalize() === "success") {
        return "background-color: var(--myyinvest-green)";
      } else return "background-color: var(--myyinvest-danger)";
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
    status() {
      return this.randomizedStatus();
    },

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
  /* height: 95%; */
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
  width: 10%;
  padding: 2px;
}

section div.sn {
  width: 8%;
}

section div.email,
section div.payment-channel {
  width: 16%;
}

section div.project {
  width: 18%;
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

.pagination {
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: var(--base-size);
}

.pagination button {
  padding: 5px 10px;
  border: 1px solid var(--myyinvest-red);
  border-radius: 5px;
  color: var(--myyinvest-red);
  background-color: var(--myinvest-white);
}

.pagination button:first-child {
  margin-left: auto;
}

.pagination button:not(:first-child) {
  margin-left: 10px;
}

.pagination button:hover,
.pagination button:focus,
.pagination .button-active {
  background-color: var(--myyinvest-red);
  color: var(--myyinvest-white);
}
</style>
