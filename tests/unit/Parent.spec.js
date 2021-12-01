// shallowMount will only take the parent component in isolation
import { shallowMount } from '@vue/test-utils'
import Parent from '@/components/Parent.vue'

describe('Parent.vue', () => {
  it('Parent.vue', () => {
    const wrapper = shallowMount(Parent)

    expect(wrapper.text()).toContain('Parent is here')

    // 'Child is here' will no longer work
    // expect(wrapper.text()).toContain('Child is here')
  })
})



// mount will take the parent component and all its child components as well.
// import { mount } from '@vue/test-utils'
// import Parent from '@/components/Parent.vue'

// describe('Parent.vue', () => {
//   it('Parent.vue', () => {
//     const wrapper = mount(Parent)

//     expect(wrapper.text()).toContain('Parent is here')
//     expect(wrapper.text()).toContain('Child is here')
//   })
// })

