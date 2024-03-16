<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col col-lg-4">
        <AddItem @add-item="addItem" />
        <ItemsList
          :items="items"
          @delete-item="deleteItem"
          @toggle-item="toggleItem"
        />
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
    },
    deleteItem(index) {
      this.items = [...items.filter((v, i) => i !== index)];
    },
    toggleItem(index) {
      this.items = [
        ...items.map((v, i) =>
          i === index ? { ...v, isCompleted: !v.isCompleted } : v
        ),
      ];
    },
  },
};
</script>
