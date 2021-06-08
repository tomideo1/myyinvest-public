import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./auth";
import admin from "./admin";
import users from "./users";
import shared from "./shared";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    admin,
    users,
    shared
  },
  plugins: [
    createPersistedState({
      key: "myyinvest-app"
    })
  ]
});
