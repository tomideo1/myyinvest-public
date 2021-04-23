import Api from "@/utils/api";

const state = {
  faqs: [],
  insights: []
};

const getters = {
  fetchFaqs(state) {
    return state.faqs;
  },
  fetchoInsights(state) {
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
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
