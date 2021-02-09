/** @format */

export default {
  actions: {
    themeAction(ctx) {
      ctx.commit('updateTheme');
    },
  },
  mutations: {
    updateTheme(state) {
      state.themeColor = !state.themeColor;
    },
  },
  state: {
    themeColor: true,
  },
  getters: {
    getTheme(state) {
      return state.themeColor;
    },
  },
};
