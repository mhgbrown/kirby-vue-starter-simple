import * as types from '../mutation-types'

const state = {
  pages: []
}

const getters = {
  getFileByURL: (state, getters) => (page, url) => {
    return page.files.find(file => file.url === url)
  },
  getPagesByType: (state, getters) => (type, collection = state.pages) => {
    let results = []

    if (!collection || !collection.length) {
      return results
    }

    for (let i = 0; i < collection.length; i++) {
      if (collection[i].type === type) {
        results.push(collection[i])
      }

      let targetPages = getters.getPagesByType(type, collection[i].children)
      results = results.concat(targetPages)
    }

    return results
  },
  getPageByUID: (state, getters) => (uid, collection = state.pages) => {
    let i = collection.length
    while (i--) {
      if (collection[i].uid === uid) {
        return collection[i]
      }

      let targetPage = getters.getPageByUID(uid, collection[i].children)
      if (targetPage) {
        return targetPage
      }
    }
  }
}

const actions = {

}

const mutations = {
  [types.RECEIVE_PAGES] (state, { pages }) {
    state.pages = pages
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
