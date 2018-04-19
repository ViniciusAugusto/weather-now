import * as types from '../../mutation-types'
import Api from '@/Api'

const mutations = {
  [types.WEATHER_ARRAY] (state, data) {
    state.itens = data
  }
}

const state = {
  itens: []
}

const getters = {
  weather: state => state.itens
}

const actions = {
  getApiWeatherCities ({ commit }, citie) {
    return new Promise((resolve, reject) => {
      Api
        .get(citie)
        .then((res) => {
          res.name = citie
          res.update_at = new Date().toLocaleTimeString('en-US')
          resolve(res)
        })
        .catch((err) => reject(err))
    })
  },
  setWeatherCities ({ commit }, weather) {
    commit(types.WEATHER_ARRAY, weather)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
