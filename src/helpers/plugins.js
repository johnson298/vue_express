import Vue from 'vue';
import * as helpers from './common';

export const  plugin = {
  install () {
    Vue.prototype.$helpers = helpers;
  }
};

Vue.use(plugin);
