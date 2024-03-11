<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>
      <input
        class="form-check-input"
        type="checkbox"
        :id="`checkboxitem-${index}`"
      />
    </td>
    <td>
      <label
        :htmlFor="`checkboxitem-${index}`"
        :class="[item?.isComplete ? 'done' : '']"
      >
        {{ item.name }}
      </label>
    </td>
    <td class="text-end">
      <button class="btn btn-danger button-delete" type="button">X</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ItemRow",
  props: {
    index: Number,
    item: Object,
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
