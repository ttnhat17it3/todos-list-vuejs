<template>
  <div>
    <Header />
    <Todos/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Todos from './components/Todos.vue'

export default {
  name: 'App',
  components: {
    Header,
    Todos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}
</style>
