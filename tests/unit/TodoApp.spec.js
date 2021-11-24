import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'

describe('TodoApp.vue', () => {
  it('should render todo text', () => {
    const wrapper = mount(TodoApp)

    //get method to get html elemts
    const todo = wrapper.get('[data-test="todo"]')

    expect(todo.text()).toBe('Learn vue testing')
  })

  it('should add new todo', async () => {
    const wrapper = mount(TodoApp)

    // Find all elements with property name
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    // set new value in input
    await wrapper.get('[data-test="new-todo"]').setValue('New Todo')

    // Trigger an event, async
    // When changing state need async and await
    await wrapper.get('[data-test="form"]').trigger('submit')

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
  })
})

