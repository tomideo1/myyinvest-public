import Api from "@/utils/api";

const state = {
  userPersonalDetails: {},
  userInvestmentDetails: {},
  userNextOfKinDetails: {},
  userReferralDetails: {},
  referredUsers: [],
  bankList: [],
  userBanks: [],
  userCards: [],
  userOverview: {},
  userWallet: {},
  userNotifications: []
};

const getters = {
  getPersonalDetails(state) {
    return state.userPersonalDetails;
  },

  getInvestmentDetails(state) {
    return state.userInvestmentDetails;
  },

  getNextOfKinDetails(state) {
    return state.userNextofKinDetails;
  },

  getReferralDetails(state) {
    return state.userReferralDetails;
  },

  getReferredUsers(state) {
    return state.referredUsers;
  },

  getBankList(state) {
    return state.bankList;
  },

  getUserBanks(state) {
    return state.userBanks;
  },

  getUserCards(state) {
    return state.userCards;
  },

  getUserNotifications(state) {
    return state.userNotifications;
  },

  getUserWallet(state) {
    return state.userWallet;
  },

  getUserOverview(state) {
    return state.userOverview;
  }
};

const mutations = {
  setPersonalDetails(state, data) {
    return (state.userPersonalDetails = data);
  },

  setNextOfKinDetails(state, data) {
    return (state.userNextofKinDetails = data);
  },

  setInvestmentDetails(state, data) {
    return (state.userInvestmentDetails = data);
  },

  setReferralDetails(state, data) {
    return (state.userReferralDetails = data);
  },

  setReferredUsers(state, data) {
    state.referredUsers = data;
  },

  setUserBanks(state, data) {
    return (state.userBanks = data);
  },

  updateUserBanks(state, data) {
    state.userBanks.push(data);
  },

  setUserCards(state, data) {
    state.userCards = data;
  },

  setBankList(state, data) {
    return (state.bankList = data);
  },

  setUserNotifications(state, data) {
    return (state.userNotifications = data);
  },

  setUserWallet(state, data) {
    return (state.userWallet = data);
  },

  setUserOverview(state, data) {
    return (state.userOverview = data);
  }
};

const actions = {
  async createPersonalDetails({ commit }, payload) {
    let res = await Api.post(`profile/personalDetails`, payload, true);
    if (res.status === 200 || res.status === 201) {
      commit("setPersonalDetails", res.data.personalDetails);
      return res;
    } else {
      return res;
    }
  },

  async createInvestmentPlan({ commit }, payload) {
    let res = await Api.post(`profile/investPlan`, payload, true);
    if (res.status === 200 || res.status === 201) {
      commit("setInvestmentDetails", res.data.investmentPlan);
      return res;
    } else {
      return res;
    }
  },

  async createNextOfKin({ commit }, payload) {
    let res = await Api.post(`profile/nextOfKin`, payload, true);
    if (res.status === 200 || res.status === 201) {
      commit("setNextOfKinDetails", res.data.investmentPlan);
      return res;
    } else {
      return res;
    }
  },

  async getUserProfileDetails({ commit, getters }) {
    let res = await Api.get(`profile/getSingle`, true);
    if (res.status === 200 || res.status === 201) {
      // commit("setProfile", res.data.profileDetails);
      const user = getters.getUser;
      const profileDetails = res.data.profileDetails || {};
      profileDetails.email = user.email;
      profileDetails.firstName = user.firstName;
      profileDetails.lastName = user.lastName;
      // console.log(`profile Details = ${JSON.stringify(profileDetails)}`);
      commit("setProfile", profileDetails);
      return res;
    } else {
      return res;
    }
  },

  async fetchBankList({ commit }) {
    const res = await Api.get("banks/all", true);
    if (res.status === 200 || res.status === 201) {
      const { banks } = res.data;
      const bankList = banks.map(bank => {
        return { key: bank.name, value: bank.code, slug: bank.slug, longCode: bank.longcode };
      });
      commit("setBankList", bankList);
    }
    return res;
  },

  async fetchUserBanks({ commit }) {
    const res = await Api.get("banks/userBank", true);
    if (res.status === 200 || res.status === 201) {
      commit("setUserBanks", res.data.details);
      return res;
    } else {
      return res;
    }
  },

  // eslint-disable-next-line no-unused-vars
  async verifyBankAccount({ commit }, { account_number, code }) {
    const res = await Api.get(`banks/verify?account_number=${account_number}&code=${code}`, true);
    if (res.status === 200 || res.status === 201) {
      return res;
    } else {
      return res;
    }
  },

  async addBankAccount({ commit }, payload) {
    const res = await Api.post("banks", payload, true);
    if (res.status === 200 || res.status === 201) {
      commit("updateUserBanks", res.data.details);
    }
    return res;
  },

  // eslint-disable-next-line no-unused-vars
  async fetchUserCards({ commit }) {
    const res = await Api.get("banks/cards/getCards", true);
    if (res.status === 200 || res.status === 201) {
      commit("setUserCards", res.data.cards);
    }
    return res;
  },

  // eslint-disable-next-line no-unused-vars
  async verifyCardTransaction({ commit }, payload) {
    const res = await Api.post("banks/cards/verifyTransaction", payload, true);
    if (res.status === 200 || res.status === 201) {
      console.log(res.data);
    }
    return res;
  },

  async fetchReferralDetails({ commit }) {
    const res = await Api.get("referrals/get", true);
    if (res.status === 200 || res.status === 201) {
      const { referredUsers, referralDetails } = res.data;
      // const refData = { ...res.data.referralDetails, referredUsers };
      // commit("setReferralDetails", refData);
      commit("setReferralDetails", referralDetails);
      commit("setReferredUsers", referredUsers);
    }
    return res;
  },

  // eslint-disable-next-line no-unused-vars
  async uploadUserAvatar({ commit, dispatch }, payload) {
    let res = await Api.post(`settings/image`, payload, true);
    if (res.status === 200 || res.status === 201) {
      dispatch("getUserProfileDetails");
      return res;
    } else {
      return res;
    }
  },

  // eslint-disable-next-line no-unused-vars
  async changeUserPassword({ commit }, payload) {
    let res = await Api.post(`settings/change-password`, payload, true);
    if (res.status === 200 || res.status === 201) {
      return res;
    } else {
      return res;
    }
  },

  // eslint-disable-next-line no-unused-vars
  async getAllUserNotifications({ commit }, payload) {
    const res = await Api.get(`notifications/get?page=${payload.page ? payload.page : 10}`, true);
    if (res.status === 200 || res.status === 201) {
      const notificationsData = res.data.notifications;
      const userNotification = { notificationsData, ...res.data.pagination };
      commit("setUserNotifications", userNotification);
      return res;
    } else {
      return res;
    }
  },

  async fetchUserOverview({ commit }) {
    const res = await Api.get(`overview/user_get`, true);
    if (res.status === 200 || res.status === 201) {
      const overViewData = res.data;
      commit("setUserOverview", overViewData);
      return res;
    } else {
      return res;
    }
  },

  async deleteUserNotification({ dispatch }, payload) {
    const res = await Api.post(`notifications/${payload.id}/delete`, {}, true);
    dispatch("getAllUserNotifications", { page: 10 });
    return res.status === 200 || res.status === 201;
  },

  async getWalletBalance({ commit }) {
    const res = await Api.get(`wallet/balance`, true);
    commit("setUserWallet", res.data);
  },

  // eslint-disable-next-line no-unused-vars
  async initTransaction({ commit }, payload) {
    const res = await Api.post("transactions/initTransaction", payload, true);
    return res;
  },

  async pauseTransaction({ commit }, payload) {
    const res = await Api.post("transactions/pause", payload, true);
    return res;
  },

  async playTransaction({ commit }, payload) {
    const res = await Api.post("transactions/play", payload, true);
    return res;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
