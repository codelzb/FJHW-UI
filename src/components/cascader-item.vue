<!--  -->
<template>
  <div class="x-cascader-item">
      <div class="item-wrapper">

      </div>
      <div class="children-wrapper"  v-if="childrenItem">
            <h-cascader-item class="children-item" :source="childrenItem" :level="level+1" v-if="childrenItem.children&&selected.indexOf(childrenItem.label)>-1" :selected="selected" @update:selected="onUpdate($event)"></h-cascader-item>
      </div>
  </div>
</template>
<script>
import hCascaderItem from './cascader-item.vue'
export default {
  name: "hCascaderItem",
  components: {hCascaderItem },
  props: {
    source: { type: Object },
    selected: { type: Array, default: () => [] },
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  filters: {},
};
</script>
<style lang="scss"></style>
