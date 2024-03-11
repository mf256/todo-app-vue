<template>
  <table class="table table-striped">
    <tbody>
      <ItemRow v-for="(item, i) in items" :key="i" :index="i" :item="item" />
    </tbody>
  </table>
</template>

<script>
import ItemRow from "./ItemRow.vue";

export default {
  name: "ItemsList",
  components: {
    ItemRow,
  },
  props: {
    items: Array,
  },
};
</script>
