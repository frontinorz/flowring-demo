import { apiGetDiscover, apiGetGeneresList } from '@/api/movie'

const state = {
  movieList: [],
  genresList: [],
  isPageInvoke: false
}

const getters = {
  movieList: state => state.movieList,
  genresList: state => state.genresList,
  isPageInvoke: state => state.isPageInvoke
}

const mutations = {
  setList (state, list) {
    state.movieList = state.movieList.concat(list)
  },
  resetList (state, list) {
    state.movieList = []
  },
  setGenreList (state, list) {
    state.genresList = list
  },
  setPageInvoke (state) {
    state.isPageInvoke = true
  }
}

const actions = {
  async browseMovie ({ commit }, query) {
    const res = await apiGetDiscover(query)
    if (res.status === 200) {
      commit('setList', res.data.results)
      if (!state.isPageInvoke) {
        commit('setPageInvoke')
      }
    }
    return res
  },
  async getGenreList ({ commit }) {
    const res = await apiGetGeneresList()
    commit('setGenreList', res.data.genres)
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
