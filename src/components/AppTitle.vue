<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: "AppTitle",
  props: {
    title: String,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
