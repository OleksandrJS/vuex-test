/** @format */

import Vue from 'vue';
import Vuex from 'vuex';
import post from './modules/post';
import changeTheme from './modules/changeTheme';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { post, changeTheme },
});
