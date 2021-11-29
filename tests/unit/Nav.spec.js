import { mount } from '@vue/test-utils'
import Nav from '@/components/Nav.vue'

describe('Nav.vue', () => {
  it('render a profile link', () => {
    const wrapper = mount(Nav, {
      data(){
        return {
          isLoggedIn: true
        }
      }
    })

    const profileLink = wrapper.get("#profile")

    expect(profileLink.text()).toEqual('My Profile')
  })

  it('should not render a profile link', () => {
    const wrapper = mount(Nav, {
      data(){
        return {
          isLoggedIn: false
        }
      }
    })

    // using get definitely exist or else it will get an error
    // const profileLink = wrapper.get("#profile")

    // using find is condictional rendering, something that doesn't exist
    const profileLink = wrapper.find("#profile")

    expect(profileLink.exists()).toBe(false)
  })
})

