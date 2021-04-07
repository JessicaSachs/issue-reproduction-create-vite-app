import HelloWorld from './HelloWorld.vue'
import { mount } from '@cypress/vue'

describe('it works', () => {
  it('is awesome', () => {
    expect(true).to.be.true
    mount(HelloWorld)
  })
})