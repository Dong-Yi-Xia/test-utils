import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'

describe('TodoApp.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TodoApp)
  })

  // All runs once
  // beforeAll
  // afterAll
  // afterEach

  it('should render todo text', () => {
    //get method to get html elements
    const todo = wrapper.get('[data-test="todo"]')

    expect(todo.text()).toBe('Learn vue testing')
  })

  it('should add new todo', async () => {
    // Find all elements with property name
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    const inputValue = wrapper.get('[data-test="new-todo"]')

    // set new value in input
    await inputValue.setValue('New Todo')

    // Trigger an event, async
    // When changing state need async and await
    await wrapper.get('[data-test="form"]').trigger('submit')

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)

    // Clear the value after submit
    expect(inputValue.element.value).toBe('')
  })

  it('should be able to complete todo', async () => {
    await wrapper.get('[data-test="todo-checkbox"]').setValue(true)

    // Return an array of classes
    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
  })
})

