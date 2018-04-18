import createPersistedState from 'vuex-persistedstate'

import * as actions from './actions'
import * as getters from './getters'

const debug = process.env.NODE_ENV !== 'production'

export default {
  actions,
  getters,
  modules: {
  },
  strict: debug,
  plugins: [createPersistedState({ storage: window.sessionStorage })]
}
