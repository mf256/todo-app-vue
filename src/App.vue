<template>
  <AppTitle title="Todo List" />
</template>

<script>
import AppTitle from "./components/AppTitle.vue";

export default {
  name: "App",
  components: {
    AppTitle,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;
}
</style>
