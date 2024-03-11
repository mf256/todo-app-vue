<template>
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col col-lg-4">
        <AddItem />
        <ItemsList />
      </div>
    </div>
  </div>
</template>

<script>
import AddItem from "./AddItem.vue";
import ItemsList from "./ItemsList.vue";

export default {
  name: "TodoApp",
  components: {
    AddItem,
    ItemsList,
  },
};
</script>
