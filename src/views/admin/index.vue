<template>
  <div class="body">
    <nav class="top-nav">
      <the-nav />
    </nav>
    <main>
      <nav class="side-nav">
        <the-side-nav />
      </nav>
      <article>
        <div class="content-wrapper">
          <!-- <the-main-layout> -->
          <view-insights />
          <!-- </the-main-layout> -->
        </div>
      </article>
    </main>
  </div>
</template>

<script>
import ViewInsights from "@/components/admin/ViewInsights.vue";
import TheNav from "../../components/layout/admin/TheNav.vue";
import TheSideNav from "../../components/layout/admin/TheSideNav.vue";
// import TheMainLayout from '../../components/layout/admin/TheMainLayout.vue';

export default {
  components: { ViewInsights, TheNav, TheSideNav }
};
</script>

<style scoped>
div.body {
  margin: 0;
  border: 0;
  font-size: var(--font-normal);
  background-color: var(--myyinvest-white);
}

main {
  display: grid;
  grid-template-columns: 20% 80%;
}

nav.top-nav {
  height: var(--topnav-height);
  box-shadow: 2px 0 2px 0 gray;
}

main {
  min-height: calc(100vh - var(--topnav-height));
}

main nav.side-nav {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  padding-bottom: 100px;
  color: var(--myyinvest-red);
  box-shadow: 0 2px 2px 0 gray;
  font-weight: bold;
  background-image: url("/assets/admin/images/nav-background.svg");
  background-repeat: no-repeat;
  background-position: 100% 120%;
  background-origin: border-box;
  background-size: auto;
}

main article {
  padding: 10px;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  margin: 60px 20px;
  box-shadow: 0 0 2px 0 gray;
  border-radius: 10px;
}

main article .content-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid var(--myyinvest-red);
  border-radius: 10px;
}

@media only screen and (max-width: 425px) {
  main {
    grid-template-columns: 0 100%;
  }

  nav.side-nav {
    display: none;
  }
}
</style>
