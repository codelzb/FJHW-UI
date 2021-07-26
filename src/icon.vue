<!--  -->
<template>
      <svg class="h-icon">
        <use :xlink:href="`#icon-${name}`"></use>
      </svg>
</template>
<script>
import './svg'
export default {
  name:'Hicon',
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
<style lang='scss'>
.h-icon {
      width: 1em;
      height: 1em;
    }
</style>