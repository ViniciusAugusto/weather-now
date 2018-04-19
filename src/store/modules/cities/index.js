const state = {
  itens: [
    {
      name: 'Nuuk',
      country: 'GL'
    },
    {
      name: 'Urubici',
      country: 'BR'
    },
    {
      name: 'Nairobi',
      country: 'KE'
    }
  ]
}

const getters = {
  cities: state => state.itens
}

const actions = {
}

export default {
  state,
  getters,
  actions,
  save: ['cities'] || { all: true }
}
