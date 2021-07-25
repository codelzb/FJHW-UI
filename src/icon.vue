<!--  -->
<template>
      <svg class="h-icon">
        <use :xlink:href="`#icon-${name}`"></use>
      </svg>
</template>
<script>
export default {
  props:{
      name:{}
  },
  components: {},
  data () {
    return {
    };
  },
  computed: {},
  created(){},
  mounted(){},
  methods: {},
  filters: {}
}

</script>
<style lang='scss' scoped>
.h-icon {
      width: 1em;
      height: 1em;
    }
</style>