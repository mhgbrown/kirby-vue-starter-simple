import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import plugins from './plugins'
import pages from './modules/pages'
import site from './modules/site'
import app from './modules/app'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules: {
    app,
    pages,
    site
  },
  strict: debug,
  plugins
})
