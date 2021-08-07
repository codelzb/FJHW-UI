<!--  -->
<template>
  <div class="h-cascader">
    <div class="trigger" @click="popoverVisible=!popoverVisible">

    </div>
    <div class="popover" v-if="popoverVisible">
        <div v-for="item in source">
            {{item.label}}
        </div>
    </div>
  </div>
</template>
<script>
 import hCascaderItem from './cascader-item.vue'
export default {
  name: "hCascader",
  components: {hCascaderItem },
  props: {
    source: { type: Array },
    selected: { type: Array, default: () => [] },
  },
  components: {},
  data() {
    return {
        popoverVisible:false,

    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  filters: {},
};
</script>
<style lang="scss">
.h-cascader{
    .trigger{
        border: 1px solid red; 
        width: 100px;
        height: 32px;
    }
    .popover{
        border:1px solid red;
        
        height: 200px;
        width: 80px;
    }
}

</style>
