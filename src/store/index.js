import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        tags: []
    },
    getters: {},
    mutations: {
        SET_INFO: (state, data) => {
            state.user = data
            return state;
        },
        ADD_TAG: () => {

        },
        REMOVE_TAG: () => {

        }
    },
    actions: {
        setInfo({ commit }, { value }) {
            commit("SET_INFO", value)
        }
    },
    modules: {}
})