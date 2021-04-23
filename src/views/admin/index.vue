<template>
  <section class="main-wrapper">
    <article>
      <p class="main-title">Overview</p>
      <div class="card-wrapper">
        <div class="card" v-for="item in cards" :key="item.title">
          <div class="card-title">
            <span class="name">{{ item.title }}</span>
            <span class="icon">Icon</span>
            <!-- <img src="" alt=""> -->
          </div>
          <div class="card-value">{{ item.value }}</div>
        </div>
      </div>
    </article>

    <article class="latest-users">
      <p class="title">Latest Users</p>
      <div class="table">
        <div class="table-title table-row">
          <div class="sn">SN</div>
          <div class="fullname">Full Name</div>
          <div class="tokens">Tokens</div>
          <div class="project">Project</div>
          <div class="project-duration">Project Duration</div>
          <div class="frequency-duration">Frequency Duration</div>
        </div>
        <div class="table-content table-row" v-for="x in 50" :key="x">
          <div class="sn">{{ formatNum(x) }}</div>
          <div class="fullname">John Doe</div>
          <div class="tokens">5</div>
          <div class="project">Project {{ x }}</div>
          <div class="project-duration">1 year</div>
          <div class="frequency-duration">Frequency</div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "AdminOverview",

  metaInfo: {
    title: "Myyinvest",
    titleTemplate: "%s - Overview (Admin)",
    htmlAttrs: {
      lang: "en",
      amp: true
    }
  },

  data() {
    return {
      cards: [
        {
          title: "No of Users",
          icon: "",
          value: 5000
        },
        {
          title: "No of Newsletters",
          icon: "",
          value: 10000
        },
        {
          title: "Total Transactions",
          icon: "",
          value: 100000
        },
        {
          title: "No of Sent Notifications",
          icon: "",
          value: 10000
        },
        {
          title: "No of Uploaded",
          icon: "",
          value: 10000
        }
      ]
    };
  }
};
</script>

<style scoped>
.overview-wrapper {
  position: relative;
}

/* .main-title {
  font-size: var(--font-xxl) !important;
  color: var(--myyinvest-red);
} */

.card-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--base-size);
}

.card {
  padding: var(--base-size);
  border-radius: 10px;
  /* box-shadow: 1px 1px 3px 0 #bebebe, -1px -1px 3px 0 #ffffff; */
  box-shadow: 0px 8.67606px 8.67606px rgba(0, 0, 0, 0.05);
}

.card:hover {
  transform: scale(1.02);
  z-index: auto;
  /* box-shadow: 2px 2px 6px 0 #bebebe, -2px -2px 6px 0 #ffffff; */
}

.card-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
}

.card-value {
  font-size: var(--font-xxx) !important;
}

.latest-users {
  margin-top: var(--base-size);
}

.latest-users p.title {
  font-size: var(--font-lg) !important;
  color: var(--myyinvest-black);
  font-weight: 600;
}

.table-title {
  position: sticky;
  position: -webkit-sticky;
  top: -10px !important;
  font-size: var(--font-md) !important;
  font-weight: 600;
  color: var(--myyinvest-red);
  border: 2px solid var(--myyinvest-red);
  background-color: var(--myyinvest-white);
}

.table-row {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
}

.table-row div {
  width: 20%;
  text-align: center;
}

.table-row:hover {
  box-shadow: 2px 2px 6px #bebebe, -2px -2px 6px #ffffff;
}

.table-row div.sn {
  width: 8%;
}

.table-row div.tokens {
  width: 12%;
}
</style>
