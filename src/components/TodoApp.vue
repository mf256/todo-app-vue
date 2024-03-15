<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col col-lg-4">
        <AddItem @add-item="addItem" />
        <ItemsList :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
import { MOCK_ITEMS } from "@/mockData";
import AddItem from "./AddItem.vue";
import ItemsList from "./ItemsList.vue";

export default {
  name: "TodoApp",
  components: {
    AddItem,
    ItemsList,
  },
  data() {
    return {
      items: [...MOCK_ITEMS],
    };
  },
  methods: {
    addItem(item) {
      this.items = [...this.items, item];
      console.log("xxxx", this.items, item);
    },
  },
};
</script>
