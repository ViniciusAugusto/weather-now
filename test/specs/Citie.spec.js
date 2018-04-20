import Citie from '@/components/Citie'
import Vuex from 'vuex'
import { shallow, createLocalVue } from 'vue-test-utils'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Citie.vue', () => {
  let cmp

  beforeEach(() => {
    cmp = shallow(Citie, {
      localVue
    })
  })

  test('colorTemp return class color for temp', () => {
    expect.assertions(3)
    expect(cmp.vm.colorTemp(-1)).toEqual('blue')
    expect(cmp.vm.colorTemp(20)).toEqual('orange')
    expect(cmp.vm.colorTemp(30)).toEqual('red')
  })

  test('has the expected html structure', () => {
    const wrapper = shallow(Citie)
    expect(wrapper.element).toMatchSnapshot()
  })
})
