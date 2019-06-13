import kirby from '../../api/kirby'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  getPage: (state) => (id) => {
    return state.all.find(page => page.id === id)
  }
}

// actions
const actions = {
  async loadPage ({ commit }, { id }) {
    const pageId = id
      // remove leading slash
      .replace(/^\/+/, '')
      // replace last slash with +
      .replace(/\/([^/]*)$/, '+$1')
    const response = await kirby.getPath(`/pages/${pageId}`)
    commit('addPage', { page: response.data })
  }
}

// mutations
const mutations = {
  addPage (state, { page }) {
    state.all.push(page)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
