import Vue from 'vue'
import Vuex from 'vuex'

import movie from './modules/movie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alert: false,
    alertMsg: 'Something wrong'
  },
  mutations: {
    setAlert (state, bool) {
      state.alert = bool
    },
    setAlertMsg (state, msg) {
      state.alertMsg = msg
    }
  },
  actions: {
  },
  getters: {
    alert: state => state.alert,
    alertMsg: state => state.alertMsg
  },
  modules: {
    movie
  }
})
