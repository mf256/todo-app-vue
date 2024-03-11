<template>
  <form @submit="onSubmit" class="add-form">
    <div class="input-group mb-3">
      <input
        v-model="name"
        type="text"
        class="form-control"
        placeholder="Enter new element"
      />
      <input
        class="btn btn-outline-secondary btn-primary button-add"
        type="submit"
        value="Add"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "AddItem",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.name) {
        return;
      }

      const newItem = {
        name: this.name,
        isCompleted: false,
      };

      this.$emit("add-item", newItem);
      this.name = "";
    },
  },
};
</script>

<style scope>
.button-add {
  color: white;
}
</style>
