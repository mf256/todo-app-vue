<template>
  <table className="table table-striped">
    <tbody>
      <ItemRow index="0" name="Test" done="false" />
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
};
</script>
