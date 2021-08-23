<template>
  <form @submit="addTodo">
    <input type="text" v-model="title" placeholder="What needs to be done?">
    <!-- <input type="submit" value="Add"> -->
  </form>
</template>

<script>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddTodo",
  setup(props, context) {
    const title = ref("");

    const addTodo = (event) => {
      event.preventDefault();

      const newTodo = {
        id: uuidv4(),
        title: title.value,
        completed: false
      }

      context.emit("add-todo", newTodo);
      title.value = "";
    }

    return {
      title,
      addTodo
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  margin-bottom: 10px;
}
input[type="text"] {
  /* flex: 10; */
  width: 100%;
  height: 20px;
  padding: 10px 30px;
}
/* input[type="submit"] {
  flex: 2;
} */
</style>