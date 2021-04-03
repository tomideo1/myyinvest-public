import Api from "@/utils/api";

const state = {
  user: {},
  profile: {},
  token: null,
  prefix: null,
  isLoading: false
};
const getters = {
  getUser(state) {
    return state.user;
  },
  getProfile(state) {
    return state.profile;
  },
  getUserName(state) {
    return `${state.user.firstName}  ${state.user.lastName}`;
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
  },
  setProfile(state, data) {
    return (state.profile = data);
  }
};
const actions = {
  async login({ commit, dispatch }, payload) {
    let res = await Api.post("auth", payload);
    if (res.status === 200 || res.status === 201) {
      localStorage.setItem("myyinvest-user", JSON.stringify(res.data.decodeDetails));
      localStorage.setItem("myyinvest-token", JSON.stringify(res.data.token));
      commit("setToken", res.data.token);
      commit("setUser", res.data.decodeDetails);
      dispatch("getUserProfileDetails");
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
  async passwordChange({ commit }, payload) {
    return await Api.post(`users/reset/${payload.userToken}`, {
      password: payload.password
    });
  },

  /* eslint-disable no-unused-vars */
  async register({ commit }, payload) {
    return await Api.post("/users/register", {
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      country: payload.country,
      password: payload.password,
      firstInvest: payload.firstInvest,
      hearAbout: payload.hearAbout
    });
  },

  async resendVerification({ commit }, payload) {
    return await Api.post("/users/resend", payload);
  },

  async saveToken({ commit }, payload) {
    return await Api.post(
      "/admin/pusher/auth",
      {
        socket_id: payload.interest,
        channel_name: "private-myyinvest"
      },
      true
    );
  },

  async logout({ commit }) {
    commit("setToken", "");
    commit("setUser", {});
    commit("setProfile", {});
    localStorage.clear();
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
