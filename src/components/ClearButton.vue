<template>
  <button class="delete-btn" @click="deleteTodos">CLEAR COMPLETED</button>
</template>

<script>
export default {
  name: "ClearButton",
  props: [],
  setup(props, context) {
    const deleteTodos = () => {
      context.emit("deleteTodos");
    }
    return {
      deleteTodos,
    }
  }
}
</script>

<style>
.delete-btn {
  width: 100%;
  height: 30px;
  margin-top: 10px;
  background-color: rgb(77,186,135);
  border: none;
  border-radius: 30px;

  color: white;
  font-weight: bold;

  cursor: pointer;
}
</style>