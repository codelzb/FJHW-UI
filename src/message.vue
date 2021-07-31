<template>
  <transition name="slide-message">
    <div class="h-message" :class="{ [`${options.type}`]: true }" :style="positionStyle" v-show="visible">
      <h-icon :name="options.iconClass" class="h-icon" v-if="options.iconClass"></h-icon>
      <h-icon :name="options.type" class="h-icon" v-else></h-icon>
      <slot>
        <p v-if="!options.useHTML">{{ options.message }}</p>
        <p v-else v-html="options.message"></p>
      </slot>
      <h-icon name="close" class="h-icon close" v-if="options.showClose" @click="closeMessage" style="width:12px;height:12px;"></h-icon>
    </div>
  </transition>
</template>
<script>
import hIcon from "./icon.vue";
export default {
  name: "hMessage",
  components: { hIcon },
  data() {
    return {
      visible: false,
      timer: null,
      options: {
        type: "success",
        message: "",
        duration: 2000,
        showClose: false,
        iconClass:null,
        useHTML:false,
        onClose:null,
        offset:50
      },
    };
  },
  computed:{
    positionStyle(){
      return {
          'top': `${ this.options.offset }px`
        };
    }
  },
  methods: {
    closeMessage() {
      if (this.options.onClose && typeof this.options.onClose === 'function') {
          this.options.onClose(this)
      }
      this.close();
    },
    autoClose() {
      this.timer = setTimeout(() => {
        this.close();
      }, this.options.duration);
    },
    close() {
      this.visible = false;
      this.$el.addEventListener("transitionend", this.destroyEle);
    },
    destroyEle() {
      this.$el.removeEventListener("transitionend", this.destroyEle);
      this.$destroy();
    },
  },
  mounted() {
    !this.options.showClose && this.autoClose();
  },
  beforeDestroy() {
    this.timer ? clearTimeout(this.timer) : "";
    this.$el.remove();
  },
};
</script>
<style  lang="scss">
@import "./color.scss";
.h-message {
  position: fixed;
  z-index: 100;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: fleh-start;
  align-items: center;
  font-size: 16px;
  background: #fff;
  padding: 0.5em 1.2em;
  border-radius: 4px;
  // box-shadow: $shadow;
  > .h-icon {
    margin-right: 0.4em;
    width: 16px;
    height: 16px;
    &.close {
      cursor: pointer;
      margin-left: 3em;
      margin-right: -0.8em;
      color: $sub;
      &:hover {
        color: $hover;
      }
    }
  }
  &.success {
    color: $success;
    background-color: #f0f9eb;
  }
  &.error {
    color: $error;
    background-color: #fef0f0;
  }
  &.info {
    color: $link;
    background-color: #edf2fc;
  }
  &.warning {
    color: $warning;
    background-color: #fdf6ec;
  }
}
.slide-message-enter-active,
.slide-message-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.slide-message-enter-to,
.slide-message-leave {
  transform: translateY(0) translateX(-50%);
  opacity: 1;
}
.slide-message-enter,
.slide-message-leave-to {
  transform: translateY(-100%) translateX(-50%);
  opacity: 0;
}
</style>
