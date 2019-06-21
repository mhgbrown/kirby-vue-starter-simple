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

    // get page and its children, assimilate
    const responses = await Promise.all([
      kirby.getPath(`/pages/${pageId}`),
      kirby.getPath(`/pages/${pageId}/children`)
    ])

    const page = responses[0].data
    page.children = responses[1].data
    // TODO add or replace
    commit('addPage', { page })
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
