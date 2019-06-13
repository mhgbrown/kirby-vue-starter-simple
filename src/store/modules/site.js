import kirby from '../../api/kirby'

// initial state
const state = {}

// getters
const getters = {}

// actions
const actions = {
  async loadSite ({ commit }) {
    const responses = await Promise.all([
      kirby.getSite(),
      kirby.getPath('/site/children')
    ])

    const site = responses[0].data
    site.children = responses[1].data
    commit('setSite', { site })
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
