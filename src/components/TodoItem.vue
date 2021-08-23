<template>
  <div>
    <div :class="['todo-item', todoProps.isCompleted ? 'is-completed' : '' ]">
      <div style="display: flex">
        <input type="checkbox" :checked="todoProps.isCompleted" @change="markItemCompleted">
        <span
          v-if="!editing"
          class=""
          @click="enableEditing">
            {{ todoProps.title }}
        </span>
        <div v-if="editing">
          <input
            type="text"
            class="input-todo"
            :value="todoProps.title"
          />
          <button @click="saveTodo" class="edit-btn save-btn">Save</button>
          <button @click="disableEditing" class="edit-btn cancel-btn">Cancel</button>
        </div>
      </div>
      <ion-icon class="del-icon" name="close-outline" @click="deleteItem"></ion-icon>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TodoItem",
  props: ["todoProps"],
  setup(props, context) {
    const editing = ref(false);
    const newTodo = ref("");
    const markItemCompleted = () => {
      context.emit("complete-todo", props.todoProps.id);
    }

    const deleteItem = () => {
      context.emit("delete-todo", props.todoProps.id);
    }

    const enableEditing = () => {
      editing.value = true;
    }

    const disableEditing = () => {
      editing.value = false;
    }

    const saveTodo = () => {
      const todoValue = document.querySelector(".input-todo").value;
      console.log(todoValue);
      editing.value = false;
      context.emit("edit-todo", {
        id: props.todoProps.id, 
        title: todoValue
      });
    }

    return {
      editing,
      newTodo,
      markItemCompleted,
      deleteItem,
      enableEditing,
      disableEditing,
      saveTodo
    }
  }
}
</script>

<style>
.input-todo {
  text-justify: center;
}

.edit-btn {
  margin-left: 10px;
  border: none;
  cursor: pointer;
  color: white;
}
.save-btn {
  background-color: rgb(77,186,135);
}
.cancel-btn {
  background-color: red;
}

.del-btn {
  background: #ff0000;
  color: #fff;
  border: none;
  cursor: pointer;
  float: right;
}
.del-icon {
  color: red;
  font-size: 20px;
  cursor: pointer;
  float: right;
}
.todo-item {
  display: flex;
  justify-content: space-between;
  justify-items: center;
  background: #fff;
  padding: 10px;
  margin: 0;
  border-bottom: 1px dotted #ccc;
}
.is-completed {
  color: rgb(77,186,135);
}
.todo-item:hover input ~ .checkmark {
  background-color: #ccc;
}
.todo-item > input:checked ~ .checkmark{
  background-color: rgb(77,186,135);
}
</style>