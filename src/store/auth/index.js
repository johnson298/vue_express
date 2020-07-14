import state from "./stateModule";
import getters from './gettersModule';
import mutations from './mutationsModule';
import actions from './actionsModule';

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}