<template>
  <div class="h-tabs">
      <div class="title-wrapper" ref="titleWrapper">
          <slot name="title"></slot>
          <div class="line" ref="line"></div>
      </div>
      <div class="default-wrapper">
          <slot></slot>
      </div>
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "hTabs",
  model:{
      prop:'selected',
      event:'update:selected'
  },
  props: {
    selected: {
      type: [String,Number],
      required: true,
    },
    // tabPosition: {
    //   type: String,
    //   default: "top",
    //   validator(value) {
    //     return ["left", "top", "bottom", "right"].indexOf(value) >= 0;
    //   },
    // },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  mounted() {
    this.eventBus.$on('update:selected', (name, vm) => {
        this.$emit('update:selected',name)
        let line=this.$refs.line
        let {left,right}=vm.$el.getBoundingClientRect()
        let {left:wrapperLeft}=this.$refs.titleWrapper.getBoundingClientRect()
        line.style.width=right-left+'px'
        line.style.left=left-wrapperLeft+'px'
    })
    let title=null
    this.$children.forEach((vm) => {
          if (vm.$options.name === "hTabsTitle" && vm.name === this.selected) {
            title=vm
          }
    })
    this.eventBus.$emit('update:selected',this.selected,title)
  },
};
</script>
<style lang="scss">
 @import './color.scss';
    .h-tabs {
        >.title-wrapper {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            position: relative;
            >.line {
                position: absolute;
                bottom: 0;
                background: #5396ff;
                height: 2px;
                transition: all 0.3s linear;
                border-radius: 1px;
                z-index: 1;
            }
            &::after{
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 2px;
                background-color: #dcdfe6;
                z-index: 0;
            }
        }
    }
</style>
