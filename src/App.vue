<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "scss/main";
html,
body {
  width: 100%;
  height: 100vh;
  margin: 0;

  padding: 0;
}
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/

p {
  font-size: 19px !important;
}

#nav {
  /*padding: 30px;*/

  /*a {*/
  /*  font-weight: bold;*/
  /*  color: #2c3e50;*/

  &.router-link-exact-active {
    color: color(main-red) !important;
  }
}
</style>
