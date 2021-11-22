import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'

describe('TodoApp.vue', () => {
  it('should render todo text', () => {
    const wrapper = mount(TodoApp)

    //get method to get html elemts
    const todo = wrapper.get('[data-test="todo"]')

    expect(todo.text()).toBe('Learn vue testing')
  })
})

