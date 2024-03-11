<template>
  <div className="input-group mb-3">
    <input
      type="text"
      className="form-control"
      placeholder="Enter new element"
    />
    <button
      className="btn btn-outline-secondary btn-primary button-add"
      type="button"
      id="button-addon2"
    >
      Add
    </button>
  </div>
</template>

<script>
export default {
  name: "AddItem",
};
</script>

<style scope>
.button-add {
  color: white;
}
</style>
