import kirby from '../../api/kirby'

const toPageId = function (id) {
  return id
    // remove leading slash
    .replace(/^\/+/, '')
    // replace last slash with +
    .replace(/\/([^/]*)$/, '+$1')
}

// initial state
const state = {
  all: []
}

// getters
const getters = {
  getPage: (state) => (id) => {
    return state.all.find(page => page.id === id)
  },
  getPageIndex: (state) => (id) => {
    return state.all.findIndex(page => page.id === id)
  }
}

// actions
const actions = {
  async loadPage ({ state, commit, getters }, { id }) {
    const pageId = toPageId(id)
    const response = await kirby.getPath(`/pages/${pageId}`)
    const page = response.data
    const index = getters.getPageIndex(pageId)
    if (index === -1) {
      commit('addPage', { page })
    } else {
      // Copy page so as not to mutate state outside of mutation
      const existingPage = JSON.parse(JSON.stringify(state.all[index]))
      page.children = existingPage.children
      commit('replacePage', { page, index })
    }
  },
  async loadPageChildren ({ state, commit, getters }, { id }) {
    const pageId = toPageId(id)
    const response = await kirby.getPath(`/pages/${pageId}/children`)
    const children = response.data
    const index = getters.getPageIndex(pageId)
    if (index === -1) {
      commit('addPage', { page: { id: pageId, children } })
    } else {
      // Copy page so as not to mutate state outside of mutation
      const page = JSON.parse(JSON.stringify(state.all[index]))
      page.children = children
      commit('replacePage', { page, index })
    }
  }
}

// mutations
const mutations = {
  addPage (state, { page }) {
    state.all.push(page)
  },
  replacePage (state, { page, index }) {
    state.all.splice(index, 1, page)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
