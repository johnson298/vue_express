import Vue from 'vue'
import Vuex from 'vuex'

// main store
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

// modules
import authModule from './auth';

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    auth: authModule
  }
})
