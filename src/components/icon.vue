<template>
  <div v-if="isExternal" :style="{styleExternalIcon,...iconStyle}" class="h-external-icon h-icon" v-on="$listeners" />
  <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners" :style="iconStyle">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import  './svg'
export default {
  name: 'hIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    size: {
      type: [Number,String],
    },
    color: {
      type: String,
    },
  },
  computed: {
    iconStyle(){
      if (!this.size && !this.color) {
          return {}
      }
      return {
        ...(this.size ? { 'font-size': `${this.size}px` }: {}),
      ...(this.color ? { 'fill': this.color} : {}),
      }
    },
    isExternal() {
      return /^(https?:|mailto:|tel:)/.test(this.name);
    },
    iconName() {
      return `#icon-${this.name}`
    },
    svgClass() {
      if (this.className) {
        return 'h-icon ' + this.className
      } else {
        return 'h-icon'
      }
    },
    styleExternalIcon() {
      return {
        mask: `url(${this.name}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.name}) no-repeat 50% 50%`
      }
    }
  }
}
</script>

<style>
.h-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.h-external-icon {
  background-color: currentColor;
  mask-size: cover!important;
  display: inline-block;
}
</style>