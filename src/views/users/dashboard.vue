<template>
  <div class="container-fluid p-1">
    <main class="col-md-12">
      <div class="row">
        <status-card status-title="Net Worth" icon-color="#F4DCDC" status-number="1250000" icon-name="database" class="col-md-3 mb-3" />
        <status-card status-title="Capital Invested" icon-color="#ABC9E0" status-number="1000000" icon-name="money-blue" class="col-md-3 mb-3" />
        <status-card status-title="Total Return" icon-color="#9FD99F" status-number="250000" icon-name="reload" class="col-md-3 mb-3" />
        <status-card status-title="Total Token" icon-color="#BA7BD8" :has-naira="false" status-number="005" icon-name="total" class="col-md-3 mb-3" />
      </div>
    </main>

    <main class="col-md-12">
      <div class="row">
        <div class="col-md-4 mb-4">
          <main-card style="min-height: 400px!important;">
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
            <recent-transactions status="success" />
            <recent-transactions status="primary" />
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
export default {
  name: "dashboard",
  data() {
    return {
      chartData: [
        ["Task", "value"],
        ["Smart-Invest", 450],
        ["Co-invest", 300],
        ["Co-own", 660]
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
  components: { MainIcon, RecentTransactions, MainCard, StatusCard }
};
</script>

<style scoped></style>
