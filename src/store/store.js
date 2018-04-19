import createPersistedState from 'vuex-persistedstate'

import cities from './modules/cities/'
import weather from './modules/weather/'

import * as actions from './actions'
import * as getters from './getters'

const debug = process.env.NODE_ENV !== 'production'

export default {
  actions,
  getters,
  modules: {
    cities,
    weather
  },
  strict: debug,
  plugins: [createPersistedState({ storage: window.sessionStorage })]
}
