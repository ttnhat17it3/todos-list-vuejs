<template>
  <div>
    <AddTodo @add-todo="addTodo"/>

    <ProgressBar :percentage="(todosCompleted.length/todos.length) * 100"/>

    <TabBar 
      :itemLeft="todos.length - todosCompleted.length"
      :status="status"
      @change-status="changeStatus"
    />

    <template v-if="status === 'all'">
      <TodoItem 
        v-for="todo in todos"
        :key="todo.id" 
        :todoProps="todo"
        @complete-todo="markTodo"
        @delete-todo="deleteTodo"
        @edit-todo="editTodo"
      />
    </template>
    <template v-else-if="status === 'active'">
      <TodoItem 
        v-for="todo in todosUncompleted"
        :key="todo.id" 
        :todoProps="todo"
        @complete-todo="markTodo"
        @delete-todo="deleteTodo"
      />
    </template>
    <template v-else-if="status === 'complete'">
      <TodoItem 
        v-for="todo in todosCompleted"
        :key="todo.id" 
        :todoProps="todo"
        @complete-todo="markTodo"
        @delete-todo="deleteTodo"
      />
    </template>
    <!-- <button class="delete-btn" @click="deleteTodos">CLEAR COMPLETED</button> -->
    <ClearButton @deleteTodos="deleteTodos"/>
  </div>
</template>

<script>
import { ref } from "vue";
import { todosList } from "../data/todos.js";

import TodoItem from "./TodoItem.vue";
import AddTodo from "./AddTodo.vue";
import ProgressBar from "./ProgressBar.vue";
import TabBar from "./TabBar.vue";
import ClearButton from "./ClearButton.vue";

export default {
  name: "Todos",
  components: {
    TodoItem,
    AddTodo,
    ProgressBar,
    TabBar,
    ClearButton,
  },
  setup() {
    const todos = ref(todosList);
    console.log(todos.value);

    const todosCompletedTemp = todos.value.filter(todo => todo.isCompleted);
    const todosCompleted = ref(todosCompletedTemp);

    const todosUncompletedTemp = todos.value.filter(todo => !todo.isCompleted);
    const todosUncompleted = ref(todosUncompletedTemp);

    const status = ref("all");

    const markTodo = id => {
      todos.value = todos.value.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
      updateTodos();
    }

    const deleteTodo = id => {
      todos.value = todos.value.filter(todo => todo.id !== id);
      updateTodos();
    }

    const deleteTodos = () => {
      switch (status.value) {
        case "all":
          todos.value = [];
          updateTodos();
          break;
        case "active":
          todos.value = todos.value.filter(todo => todo.isCompleted);
          updateTodos();
          break;
        case "complete":
          todos.value = todos.value.filter(todo => !todo.isCompleted);
          updateTodos();
          break;
        default:
          break;
      }
    }

    const updateTodos = () => {
      todosCompleted.value = todos.value.filter(todo => todo.isCompleted);
      todosUncompleted.value = todos.value.filter(todo => !todo.isCompleted);
    }

    const addTodo = newTodo => {
      todos.value.push(newTodo);
      updateTodos();
    }

    const editTodo = (data) => {
      const { id, title } = data;
      todos.value = todos.value.map(todo => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
      updateTodos();
    }

    const changeStatus = (newStatus) => {
      status.value = newStatus;
    }

    return {
      todos,
      todosCompleted,
      todosUncompleted,
      status,
      markTodo,
      deleteTodo,
      deleteTodos,
      addTodo,
      editTodo,
      updateTodos,
      changeStatus
    }
  }
}
</script>

<style>
</style>