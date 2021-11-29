<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="{'completed': todo.completed }"
    >
      {{ todo.text }}
      <input
        type="checkbox"
        v-model="todo.completed"
        data-test="todo-checkbox"
      >
    </div>

    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo">
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoApp",
  data(){
    return {
      newTodo: "",
      todos: [
        {
          id: 1,
          text: "Learn vue testing",
          completed: false,
        },
      ],
    }
  },
  methods: {
    createTodo(){
      let nextId = this.todos.length + 1
      this.todos.push({
        id: nextId,
        text: this.newTodo,
        completed: false,
      })
      this.newTodo = ""
    },
  }
}
</script>



<style scoped>
.completed {
  color: green;
}
</style>
