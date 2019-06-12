import kirby from '../../api/kirby'

// initial state
const state = {}

// getters
const getters = {}

// actions
const actions = {
  async loadSite ({ commit }) {
    const response = await kirby.getSite()
    commit('setSite', { site: response.data.data })
  }
}

// mutations
const mutations = {
  setSite (state, { site }) {
    Object.assign(state, site)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
