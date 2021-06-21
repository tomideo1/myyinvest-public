// import Api from "@/utils/api";

const state = {
    windowWidth: null,
    isSideBarNavMenuActive : true,
    sideBarNavMenuActive: {
        open: true,
        stay: true,
    },
    mobileResponsive: {
        open: true,
    }
};

const getters = {
    windowBreakPoint: state => {

        // This should be same as tailwind. So, it stays in sync with tailwind utility classes
        if (state.windowWidth >= 1200) return "xl"
        else if (state.windowWidth >= 992) return "lg"
        else if (state.windowWidth >= 768) return "md"
        else if (state.windowWidth >= 576) return "sm"
        else return "xs"
    }
};

const mutations = {
    UPDATE_WINDOW_WIDTH(state, width)  { state.windowWidth       = width },
    UPDATE_WINDOW_SCROLL_Y(state, val) { state.scrollY = val },
    UPDATE_VERTICAL_NAV_MENU_WIDTH(state, width) {
        state.verticalNavMenuWidth = width
    },
    TOGGLE_IS_SIDEBAR_NAV_MENU_ACTIVE(state, value) {
        state.isSideBarNavMenuActive = value
    },
    TOGGLE_SIDEBAR_NAV_MENU_ACTIVE(state, value) {
        state.sideBarNavMenuActive.open = value.open
        state.sideBarNavMenuActive.stay = value.stay
    },
    TOGGLE_MOBILE_RESPONSIVE(state, value) {
        state.mobileResponsive.open = value.open
    },
};

const actions = {
    updateVerticalNavMenuWidth({ commit }, width) {
        commit('UPDATE_VERTICAL_NAV_MENU_WIDTH', width)
    },
};

export default {
  state,
  getters,
  mutations,
  actions
};
