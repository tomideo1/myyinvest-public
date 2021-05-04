import Api from "@/utils/api";

const state = {
  faqs: [],
  insights: [],
  top_stories: [],
  singleInsight: {}
};

const getters = {
  fetchFaqs(state) {
    return state.faqs;
  },
  fetchInsights(state) {
    return state.insights;
  },
  getSingleInsight(state) {
    return state.singleInsight;
  },
  getTopStories(state) {
    return state.top_stories;
  }
};

const mutations = {
  setAllFaqs(state, data) {
    return (state.faqs = data);
  },
  setAllInsights(state, data) {
    return (state.insights = data);
  },
  setSingleInsight(state, data) {
    return (state.singleInsight = data);
  },
  setTopStories(state, data) {
    return (state.top_stories = data);
  }
};

const actions = {
  async fetchAllFaqs({ commit }, payload) {
    const res = await Api.get(`faq/get?page=${payload.page}&perpage=${payload.per_page}`);
    commit("setAllFaqs", res.data.faq);
    return res.status === 200 || res.status === 201;
  },

  async fetchTopStories({ commit }) {
    const res = await Api.get(`insights/get/top`);
    if (res.status === 200 || res.status === 201) {
      commit("setTopStories", res.data.insights);
    } else {
      return res;
    }
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
      commit("setSingleInsight", res.data.insightDetails);
    } else {
      return res;
    }
  },

  async postComment({ dispatch }, payload) {
    const res = await Api.post(`insights/insight/${payload.id}/comment`, payload);
    if (res.status === 200 || res.status === 201) {
      dispatch("fetchSingleInsight", { id: payload.id });
      return true;
    }
    return false;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
