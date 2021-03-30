<template>
  <the-admin-layout>
    <div class="main-content">
      <section class="content-titles">
        <div class="drag"></div>
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
        <div class="drag">
          <svg width="17" height="22" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="394 756 17 22">
            <svg width="5" height="5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000" x="394" y="756">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="5" height="5">
                <path
                  paint-order="stroke fill markers"
                  fill-rule="evenodd"
                  d="M2.425 4.8A2.023 2.023 0 0 1 .4 2.775C.4 1.655 1.305.75 2.425.75c1.12 0 2.025.905 2.025 2.025 0 1.12-.906 2.025-2.025 2.025z"
                />
              </svg></svg
            ><svg width="5" height="5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000" x="406" y="756">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="5" height="5">
                <path
                  paint-order="stroke fill markers"
                  fill-rule="evenodd"
                  d="M2.575 4.8A2.023 2.023 0 0 1 .55 2.775C.55 1.655 1.455.75 2.575.75c1.12 0 2.025.905 2.025 2.025 0 1.12-.905 2.025-2.025 2.025z"
                />
              </svg></svg
            ><svg width="5" height="5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000" x="406" y="764">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="5" height="5">
                <path
                  paint-order="stroke fill markers"
                  fill-rule="evenodd"
                  d="M2.575 4.9A2.023 2.023 0 0 1 .55 2.875C.55 1.755 1.455.85 2.575.85c1.12 0 2.025.905 2.025 2.025 0 1.12-.905 2.025-2.025 2.025z"
                />
              </svg></svg
            ><svg width="5" height="5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000" x="394" y="764">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="5" height="5">
                <path
                  paint-order="stroke fill markers"
                  fill-rule="evenodd"
                  d="M2.425 4.9A2.023 2.023 0 0 1 .4 2.875C.4 1.755 1.305.85 2.425.85c1.12 0 2.025.905 2.025 2.025 0 1.12-.906 2.025-2.025 2.025z"
                />
              </svg></svg
            ><svg width="5" height="6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000" x="394" y="772">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="5" height="6">
                <path
                  paint-order="stroke fill markers"
                  fill-rule="evenodd"
                  d="M2.425 5A2.023 2.023 0 0 1 .4 2.975C.4 1.855 1.305.95 2.425.95c1.12 0 2.025.905 2.025 2.025C4.45 4.095 3.544 5 2.425 5z"
                />
              </svg></svg
            ><svg width="5" height="6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#c10000" x="406" y="772">
              <svg xmlns="http://www.w3.org/2000/svg" width="5" height="6">
                <path
                  paint-order="stroke fill markers"
                  fill-rule="evenodd"
                  d="M2.575 5A2.023 2.023 0 0 1 .55 2.975C.55 1.855 1.455.95 2.575.95c1.12 0 2.025.905 2.025 2.025C4.6 4.095 3.695 5 2.575 5z"
                />
              </svg>
            </svg>
          </svg>
        </div>
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
  data() {
    return {
      // status: "Success",
      currentPage: 1
    };
  },

  methods: {
    randomizedStatus() {
      let statuses = ["In progress", "In progress", "Success", "Success", "Success", "Success", "Success", "Failed", "Failed", "Failed", "Failed"];
      // return statuses[Math.floor(Math.random() * statuses.length)];

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
    }
  },

  computed: {
    status() {
      return this.randomizedStatus();
    }
  }
};
</script>

<style scoped>
.main-content {
  /* width: 100%; */
  height: 95%;
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

section:not(:last-child) {
  margin-bottom: var(--base-size);
}

section div {
  display: flex;
  justify-content: center;
  width: 10%;
  padding: 2px;
}

section div.drag {
  width: 6%;
}

section div.sn {
  width: 8%;
}

section div.email,
section div.payment-channel {
  width: 14%;
}

section div.project {
  width: 16%;
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
