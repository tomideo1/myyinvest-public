import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./auth";
import admin from "./admin";
import learner from "./users";
import shared from "./shared";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    admin,
    learner,
    shared
  },
  plugins: [
    createPersistedState({
      key: "myyinvest-app"
    })
  ]
});
