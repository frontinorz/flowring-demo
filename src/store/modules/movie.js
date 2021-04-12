import { apiGetDiscover } from '@/api/movie'

const state = {
  movieList: [],
  isPageInvoke: false
}

const getters = {
  movieList: state => state.movieList,
  isPageInvoke: state => state.isPageInvoke
}

const mutations = {
  setList (state, list) {
    state.movieList = state.movieList.concat(list)
  },
  resetList (state, list) {
    state.movieList = []
  },
  setPageInvoke (state) {
    state.isPageInvoke = true
  }
}

const actions = {
  async browseMovie ({ commit }, query) {
    const res = await apiGetDiscover(query)
    console.log('Result', res.data.results)
    commit('setList', res.data.results)
    return res
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
