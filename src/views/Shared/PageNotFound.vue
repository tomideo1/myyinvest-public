<template>
  <div>
    <top-nav />
    <p class="warning-info">
      Hello friend, <br />
      We understand you did not intended to be here. Let's help you <span @click="router.go(-1)">return back</span> or <span @click="goHome">return home</span>. <br />
      It is best advised to use our navigation options.
    </p>
  </div>
</template>

<script>
import TopNav from "../../components/Shared/TopNav.vue";
export default {
  metaInfo: {
    title: "Myyinvest - Page not found"
  },

  components: { TopNav },
  methods: {
    goBack() {
      this.$router.go(-1);
    },

    goHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.warning-info {
  padding: 20px;
  font-size: var(--font-lg);
}

span {
  font-weight: 600;
  text-transform: uppercase;
}

span:hover {
  color: var(--myyinvest-red);
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.2s;
}
</style>
