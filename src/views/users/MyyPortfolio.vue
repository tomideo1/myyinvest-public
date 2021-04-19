<template>
  <div class="portfolio-item-container">
    <PortfolioItem slug="income-plan">
      <template #image="slotProps">
        <img :class="slotProps.className" src="https://res.cloudinary.com/dwpu7jpku/image/upload/v1612297295/listings_mfl4io.png" />
      </template>
      <template #title>
        Income Plan
      </template>
    </PortfolioItem>

    <PortfolioItem slug="rental-plan">
      <template #image="slotProps">
        <img :class="slotProps.className" src="https://res.cloudinary.com/dwpu7jpku/image/upload/v1612297295/listings_mfl4io.png" />
      </template>
      <template #title>
        Rental Plan
      </template>
    </PortfolioItem>

    <PortfolioItem slug="special-plan">
      <template #image="slotProps">
        <img :class="slotProps.className" src="https://res.cloudinary.com/dwpu7jpku/image/upload/v1612297295/listings_mfl4io.png" />
      </template>
      <template #title>
        Special Plan
      </template>
    </PortfolioItem>
  </div>
</template>

<script>
import PortfolioItem from "@/components/dashboard/PortfolioItem";

export default {
  name: "MyyPortfolio",
  components: {
    PortfolioItem
  }
};
</script>
