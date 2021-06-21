<template>
  <div class="container-fluid p-1">
    <main class="col-md-12">
      <div class="row">
        <status-card status-title="Net Worth" icon-color="#F4DCDC" :status-number="getUserOverview.networth" icon-name="database" class="col-md-6 col-lg-3 col-12 mb-3" />
        <status-card status-title="Capital Invested" icon-color="#ABC9E0" :status-number="getUserOverview.capitalInvested" icon-name="money-blue" class="col-md-6 col-lg-3 col-12 mb-3" />
        <status-card status-title="Total Return" icon-color="#9FD99F" :status-number="getUserOverview.totalReturns" icon-name="reload" class="col-md-6 col-lg-3 col-12 mb-3" />
        <status-card status-title="Total Tokens" icon-color="#BA7BD8" :has-naira="false" :status-number="getUserOverview.totalTokens" icon-name="total" class="col-md-6 col-lg-3 col-12 mb-3" />
      </div>
    </main>

    <main class="col-md-12">
      <div class="row">
        <div class="col-md-4 mb-4">
          <main-card style="min-height: 400px!important;">
            <h6 class="text-align-center">Portfolio breakdown</h6>
            <GChart class="mt-5" type="PieChart" :data="chartData" :options="chartOptions" />
          </main-card>
        </div>
        <div class="col-md-4 mb-4">
          <main-card style="min-height: 400px!important;">
            <p>Latest Investment Option</p>
            <div class="d-flex mb-3 " style="background: #F7F0F0">
              <span><img src="https://res.cloudinary.com/myyinvest/image/upload/v1618259704/mmyyinvest-2.0/images/cambridge_ihphiu.png"/></span>
              <div>
                <p class="ft-12 ml-2 text-center">Cambridge Apartments Construction</p>
                <div class=" d-flex flex-row">
                  <span class="d-flex flex-lg-row  ml-1  ">
                    <main-icon name="naira" size="xs" class="mt-1" />
                    <span class="d-flex flex-column">
                      <p class=" ft-16 text-main-red ">10,000</p>
                      <p class=" ft-16   ">Minimum</p>
                    </span>
                  </span>
                  <span style="border-right:1px solid red;" class="ml-3 mr-3"></span>
                  <span class="d-flex flex-lg-row    ">
                    <span class="d-flex flex-column">
                      <p class="ml-auto ft-16 text-main-red ">25%</p>
                      <p class=" ft-16   ">Return</p>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="d-flex mb-3 ">
              <span><img src="https://res.cloudinary.com/myyinvest/image/upload/v1618259704/mmyyinvest-2.0/images/cambridge_ihphiu.png"/></span>
              <div>
                <p class="ft-12 ml-2 text-center">Cambridge Apartments Construction</p>
                <div class=" d-flex flex-row">
                  <span class="d-flex flex-lg-row  ml-1  ">
                    <main-icon name="naira" size="xs" class="mt-1" />
                    <span class="d-flex flex-column">
                      <p class=" ft-16 text-main-red ">10,000</p>
                      <p class=" ft-16   ">Minimum</p>
                    </span>
                  </span>
                  <span style="border-right:1px solid red;" class="ml-3 mr-3"></span>
                  <span class="d-flex flex-lg-row    ">
                    <span class="d-flex flex-column">
                      <p class="ml-auto ft-16 text-main-red ">25%</p>
                      <p class=" ft-16   ">Return</p>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <p class="text-center ft-12 text-grey-500">View More</p>
          </main-card>
        </div>
        <div class="col-md-4 mb-4">
          <main-card style="min-height: 400px!important;">
            <p>Recent Transactions</p>
            <recent-transactions v-for="(transaction, index) in getUserOverview.topFiveTransactions" :key="index" status="success" />
            <p class="text-center ft-12 text-grey-500">View More</p>
          </main-card>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import StatusCard from "../../components/dashboard/statusCard";
import MainCard from "../../components/Shared/mainCard";
import RecentTransactions from "../../components/dashboard/recentTransactions";
import MainIcon from "../../components/Shared/mainIcon";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "dashboard",
  data() {
    return {
      chartData: [
        ["Task", "value"],
        ["Income Plan", 450],
        ["Rental Plan", 300],
        ["Wallet", 660]
      ],
      chartOptions: {
        chartArea: {
          // leave room for y-axis labels
          width: "100%",
          height: "100%"
        },
        title: "",
        pieHole: 0.7,
        legend: "none",
        pieSliceText: "none",
        colors: ["#EFD3D3", "#E55E5E", "#C10000"]
      }
    };
  },
  components: { MainIcon, RecentTransactions, MainCard, StatusCard },
  methods: {
    ...mapActions(["fetchUserOverview"])
  },
  computed: {
    ...mapGetters(["getUserOverview"])
  },
  async mounted() {
    await this.fetchUserOverview();
  }
};
</script>

<style scoped></style>
