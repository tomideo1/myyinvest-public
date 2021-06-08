import Api from "@/utils/api";

const state = {
  user: {},
  token: null,
  prefix: null,
  isLoading: false
};
const getters = {
  getUser(state) {
    return state.user;
  },
  getToken(state) {
    return state.token;
  },
  getName(state) {
    return `${state.user.firstName} ${state.user.lastName}`;
  }
};
const mutations = {
  setToken(state, token) {
    return (state.token = token);
  },
  setUser(state, data) {
    return (state.user = data);
  }
};
const actions = {
  async login({ commit }, payload) {
    let res = await Api.post("auth", payload);
    if (res.status === 200 || res.status === 201) {
      localStorage.setItem("myyinvest-user", JSON.stringify(res.data.decodeDetails));
      localStorage.setItem("myyinvest-token", JSON.stringify(res.data.token));
      commit("setToken", res.data.token);
      commit("setUser", res.data.decodeDetails);
      return res;
    } else {
      return res;
    }
  },
  /* eslint-disable no-unused-vars */
  async forgotPassword({ commit }, payload) {
    return await Api.post(`/users/recover`, payload);
  },
  //
  // async passwordChange({ commit }, payload) {
  //     let res = await Api.post(`auth/change-password`, payload);
  //     if (res.status === 200 || res.status === 201) {
  //         return true;
  //     } else {
  //         return res;
  //     }
  // },

  /* eslint-disable no-unused-vars */
  async register({ commit }, payload) {
    delete payload.confirm_password;
    delete payload.phone_number;
    delete payload.isAgreedTerms;
    return await Api.post("/users/register", payload);
  },

  async resendVerification({ commit }, payload) {
    return await Api.post("/users/resend", payload);
  }
  // async tenantLogin({ commit, dispatch }, payload) {
  //     let res = await Api.post("auth/tenant/login", payload);
  //     if (res.status === 200 || res.status === 201) {
  //         // learner: oluwaseunalamu@gmail.com|password
  //         //console.log({ res });
  //         if (res.data.login_type === "cross") {
  //             commit("setTenantPrefix", res.data.tenant_prefix);
  //             await dispatch("fetchTenantSettings", {
  //                 prefix: res.data.tenant_prefix,
  //             });
  //
  //             localStorage.setItem("lms-user", JSON.stringify(res.data.user));
  //             localStorage.setItem(
  //                 "lms-token",
  //                 JSON.stringify(res.data.access_token)
  //             );
  //             commit("setToken", res.data.access_token);
  //             commit("setUser", res.data.user);
  //             return true;
  //         } else {
  //             let prefix =
  //                 typeof res.data.user.tenant_profile !== "undefined"
  //                     ? res.data.user.tenant_profile.tenant_prefix
  //                     : res.data.user.tenant.tenant_prefix;
  //             commit("setTenantPrefix", prefix);
  //             await dispatch("fetchTenantSettings", { prefix });
  //
  //             localStorage.setItem("lms-user", JSON.stringify(res.data.user));
  //             localStorage.setItem(
  //                 "lms-token",
  //                 JSON.stringify(res.data.access_token)
  //             );
  //             commit("setToken", res.data.access_token);
  //             commit("setUser", res.data.user);
  //             return true;
  //         }
  //     } else {
  //         return res;
  //     }
  // },
  //
  // async updateProfile({ commit }, payload) {
  //     let res = await Api.put("user/update-profile", payload, true);
  //     return res;
  // },
  //
  // async fetchUserDetailsProfile({ commit }, payload) {
  //     let res = await Api.get(`user/${payload.id}/show`, payload, true);
  //     return res;
  // },
  //
  // async fetchProfile({ commit }, payload) {
  //     let res = await Api.get("user", true);
  //     return res;
  // },
  //
  // async fetchNotificationSettings({ commit }, payload) {
  //     let res = await Api.get("user/notification-settings", true);
  //     //console.log({ res });
  //     return res.data.data.notification_settings;
  // },
  //
  // async updateNotificationSettings({ commit }, payload) {
  //     let res = await Api.put("user/notification-settings", payload, true);
  //     return res;
  // },
  //
  // async updateToken({ commit }, payload) {
  //     let res = await Api.put("user/update-device-token", payload, true);
  //     return res;
  // },
  //
  // async logout({ commit }) {
  //     commit("setToken", "");
  //     commit("setUser", {});
  //     localStorage.clear();
  // },
};

export default {
  state,
  getters,
  mutations,
  actions
};
