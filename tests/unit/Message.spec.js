import { mount } from '@vue/test-utils'
import Message from '@/components/Message.vue'

describe('Message.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(Message, {
      props: {
        msg: 'Hello Friends'
      }
    })
    // wrapper.method after expect.matcher (jest matcher)
    expect(wrapper.text()).toContain('Hello Friends')
  })
})

