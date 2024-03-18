<template>
  <AppTitle title="Todo List" />
  <TodoApp />
</template>

<script>
import AppTitle from "./components/AppTitle.vue";
import TodoApp from "./components/TodoApp.vue";

export default {
  name: "App",
  components: {
    AppTitle,
    TodoApp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0px;
}
</style>
