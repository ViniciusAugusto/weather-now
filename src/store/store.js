import createPersistedState from 'vuex-persistedstate'

import cities from './modules/cities/'

import * as actions from './actions'
import * as getters from './getters'

const debug = process.env.NODE_ENV !== 'production'

export default {
  actions,
  getters,
  modules: {
    cities
  },
  strict: debug,
  plugins: [createPersistedState({ storage: window.sessionStorage })]
}
