import Vue from 'vue'
import Vuex from 'vuex'
import site from './modules/site'
import pages from './modules/pages'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    site,
    pages
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
