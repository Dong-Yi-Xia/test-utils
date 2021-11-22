import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

// line 4 Describe is the Tests block, group of tests

// line 5-11 is the single Test block, the it block
// line 5 is the description of what is being tested
// the callback is our test, our logic

// line 7, is our component that we want to test. Will be named wrapper, a object with lots of property
// to render it we need to mount or shallowMount the componenet

// linw 10 is the assertion
// Expect the wrapper component to have text === 'new message'
// the Wrapper is given the new props msg
