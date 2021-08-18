<template>
  <div>column</div>
</template>

<script>
  export default {
    name: "hTableColumn",
    props: {
      name: {
        type: String,
        required: true
      },
      field: {
        type: String,
        required: true
      },
      width: {
        type: Number,
      }
    }
  }
</script>