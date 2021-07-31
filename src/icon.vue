<!--  -->
<template>
  <span class="h-icon-wrapper">
      <svg class="h-icon" aria-hidden="true"  @click="$emit('click',$event)">
        <use :xlink:href="`#icon-${name}`"></use>
      </svg>
  </span>
</template>
<script>
import './svg'
export default {
  name:'Hicon',
  props:{
      name:{type: String}
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
.h-icon-wrapper {
        width: 1em;
        height: 1em;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        .h-icon {
            fill: currentColor;
            width: 100%;
            height: 100%;
            vertical-align: top;
            overflow: hidden;
        }
    }
</style>