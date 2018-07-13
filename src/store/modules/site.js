import * as types from '../mutation-types'

const state = {
  site: {}
}

const getters = {

}

const actions = {

}

const mutations = {
  [types.RECEIVE_SITE] (state, { site }) {
    state.site = site
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
