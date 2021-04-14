import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import { store } from "./store/store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "./scss/app.scss";
import helpers from "./utils/helper";
// Import Bootstrap an BootstrapVue CSS files (order is important)
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

import VueMeta from "vue-meta";
import Vuelidate from "vuelidate";
import Print from "vue-print-nb";

Vue.prototype.$Bus = new Vue();

const plugin = {
  install() {
    Vue.helpers = helpers;
    Vue.prototype.$helpers = helpers;
  }
};

Vue.use(VueMeta, IconsPlugin, VueTelInput, plugin, Vuelidate);

Vue.use(Vuelidate);
Vue.use(Print);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
