import createPersistedState from 'vuex-persistedstate'

import cities from './modules/cities/'
import weather from './modules/weather/'

const debug = process.env.NODE_ENV !== 'production'

export default {
  modules: {
    cities,
    weather
  },
  strict: debug,
  plugins: [createPersistedState({ storage: window.sessionStorage })]
}
