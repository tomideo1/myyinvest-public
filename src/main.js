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
import "./assets/admin/styles/base.css";
import helpers from "./utils/helper";
// Import Bootstrap an BootstrapVue CSS files (order is important)
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// Make BootstrapVue available throughout your project
import moment from "moment";

Vue.prototype.moment = moment;
Vue.use(BootstrapVue);

import TheAdminLayout from "./layouts/TheAdminLayout.vue";
Vue.component("TheAdminLayout", TheAdminLayout);

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.prototype.$Bus = new Vue();

Vue.use(VueTelInput);

const plugin = {
  install() {
    Vue.helpers = helpers;
    Vue.prototype.$helpers = helpers;
  }
};

Vue.use(plugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
