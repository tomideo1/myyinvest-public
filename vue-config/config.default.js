const path = require("path");

module.exports = {
  /* See https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa for more details */
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/utils/all.scss";`
      }
    },
    extract: false
  },
  devServer: {
    port: 8081
  }
};
