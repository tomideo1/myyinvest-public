import Api from "@/utils/api";

const state = {
  faqs: [],
  insights: []
};

const getters = {
  fetchFaqs(state) {
    return state.faqs;
  },
  fetchInsights(state) {
    return state.insights;
  }
};

const mutations = {
  setAllFaqs(state, data) {
    return (state.faqs = data);
  },
  setAllInsights(state, data) {
    return (state.insights = data);
  }
};

const actions = {
  async fetchAllFaqs({ commit }, payload) {
    const res = await Api.get(`faq/get?page=${payload.page}&perpage=${payload.per_page}`);
    commit("setAllFaqs", res.data.faq);
    return res.status === 200 || res.status === 201;
  },

  async fetchAllInsights({ commit }, payload) {
    const res = await Api.get(`insights/get?page=${payload.page}&perpage=${payload.per_page}`);
    commit("setAllInsights", res.data.insights);
    return res.status === 200 || res.status === 201;
  },

  // eslint-disable-next-line no-unused-vars
  async fetchSingleInsight({ commit }, payload) {
    const res = await Api.get(`insights/get/${payload.id}`);
    if (res.status === 200 || res.status === 201) {
      return res.data.insightDetails;
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
