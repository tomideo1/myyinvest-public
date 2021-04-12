import Api from "@/utils/api";

const state = {
  userPersonalDetails: {},
  userInvestmentDetails: {},
  userNextOfKinDetails: {},
  userReferralDetails: {},
  bankList: [],
  userBanks: []
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

  getBankList(state) {
    return state.bankList;
  },

  getUserBanks(state) {
    return state.userBanks;
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

  setBankList(state, data) {
    return (state.bankList = data);
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
  },

  async fetchReferralDetails({ commit }) {
    const res = await Api.get("referrals/get", true);
    if (res.status === 200 || res.status === 201) {
      const { referredUsers } = res.data;
      const refData = { ...res.data.referralDetails, referredUsers };
      commit("setReferralDetails", refData);
      // commit("setReferralDetails", res.data.referralDetails);
      // commit("setReferredUsers", res.data.referredUsers);
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
    const res = null;
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
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
