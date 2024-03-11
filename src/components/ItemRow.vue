<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>
      <input
        className="form-check-input"
        type="checkbox"
        :id="`checkboxitem-${index}`"
      />
    </td>
    <td>
      <label :htmlFor="`checkboxitem-${index}`" :class="[done ? 'done' : '']">
        {{ name }}
      </label>
    </td>
    <td className="text-end">
      <button className="btn btn-danger button-delete" type="button">X</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ItemRow",
  props: {
    index: Number,
    name: String,
    done: Boolean,
  },
};
</script>

<style scope>
.done {
  text-decoration: line-through;
}

.button-delete {
  font-weight: bold;
  padding: 3px 6px;
}
</style>
