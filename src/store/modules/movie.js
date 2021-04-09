import { apiGetDiscover } from '@/api/movie'

const state = {
  movieList: []
}

const getters = {
  movieList: state => state.movieList
}

const mutations = {
  setList (state, list) {
    state.movieList = state.movieList.concat(list)
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
