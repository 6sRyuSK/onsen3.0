import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    programs: [],
    playing: ''
  },
  mutations: {
    setPrograms (state, payload) {
      state.programs = payload
    },
    setPlaying (state, payload) {
      state.playing = payload
    }
  },
  actions: {
    setPrograms: ({ commit }, payload) => new Promise((resolve) => {
      commit('setPrograms', payload)
      resolve()
    }),
    setPlaying: ({ commit }, payload) => commit('setPlaying', payload)
  },
  modules: {
  }
})
