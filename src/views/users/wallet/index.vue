<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "index",
  metaInfo: { title: "Myyinvest - Wallet", titleTemplate: null }
};
</script>

<style scoped lang="scss">
* {
  font-family: fonts(nunito), serif;
}
</style>
