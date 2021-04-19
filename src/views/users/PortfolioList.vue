<template>
  <div>
    <PortfolioItem />
    <PortfolioItem />
    <PortfolioItem />
  </div>
</template>

<script>
import PortfolioItem from "@/components/dashboard/PortfolioItem";

export default {
  name: "PortfolioList",
  components: {
    PortfolioItem
  }
};
</script>
