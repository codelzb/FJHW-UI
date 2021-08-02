<template>
  <button class="h-button" :class="{[`icon-${position}`]: true}"
    @click="$emit('click')">
    <h-icon class="icon" v-if="icon && !loading" :name="icon"></h-icon>
    <h-icon class="loading icon" v-if="loading" name="loading"></h-icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>
<script>
  import Icon from './icon'
  export default {
    name: 'hButton',
    components: {
      'h-icon': Icon
    },
    props: {
      icon: {
      },
      loading: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'left',
        validator (value) {
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>
<style lang="scss">
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .h-button { 
    font-size: 16px; 
    height: 32px; 
    padding: 0 1em;
    border-radius: 4px; 
    border: 1px solid #66b1fE;
    background: #2588ef;
    display: inline-flex; 
    justify-content: center; 
    align-items: center;
    vertical-align: middle;
    color: #fff;
    &:hover { border-color: #66b1ff; }
    &:active { background-color: #2588ef; }
    &:focus { outline: none; }
    > .content { order: 2; }
    > .icon { order: 1; margin-right: .1em; }
    &.icon-right {
      > .content { order: 1; }
      > .icon { order: 2; margin-right: 0; margin-left: .1em;}
    }
    .loading {
      animation: spin 2s infinite linear;
    }
  }
</style>