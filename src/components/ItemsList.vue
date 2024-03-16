<template>
  <table class="table table-striped">
    <tbody>
      <ItemRow
        v-for="(item, i) in items"
        :key="i"
        :index="i"
        :item="item"
        @toggle-item="$emit('toggle-item', i)"
        @delete-item="$emit('delete-item', i)"
      />
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
  emits: ["delete-item", "toggle-item"],
};
</script>
