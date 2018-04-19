import Dashboard from '@/pages/Dashboard'
import Vuex from 'vuex'
import { shallow, createLocalVue } from 'vue-test-utils'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Dashboard.vue', () => {
  let store
  let cmp
  let getters
  let actions

  beforeEach(() => {
    getters = {
      cities: () => [
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
      ],
      weather: () => []
    }
    actions = {
      getApiWeatherCities: jest.fn(),
      setWeatherCities: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      getters,
      actions
    })
    cmp = shallow(Dashboard, {
      localVue,
      store
    })
  })

  test('interval initial value 3 after created', () => {
    expect(cmp.vm.interval).toBe(3)
  })

  test('loaderImg initial value Object after created', () => {
    expect(cmp.vm.loaderImg).toEqual({})
  })

  test('load initial value true after created', () => {
    expect(cmp.vm.load).toBeTruthy()
  })
})
