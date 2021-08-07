<template>
  <transition name="slide">
    <div class="h-sider" :class="{ 'h-sider-change': isActive}">
      <slot></slot>
      <!-- <button @click="visible=false">close</button> -->
      <div class="h-unfold" @click="unfold">
        <div class="h-unfold-icon">
          <div class="h-circle" :class="{ 'h-icon-reverse': isActive}"></div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "hSider",
  data() {
    return {
      visible: true,
      isActive: false,
    };
  },
  methods: {
    unfold() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss">
.h-sider {
    transition: width 1s;
    position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter,
.slide-leave-to {
  margin-left: -200px;
}
.h-sider-change{
    border: unset;
    padding: unset;
    width: 0px;
    transition: width 1s;
}
.h-unfold {
  width: 30px;
  height: 40px;
  position: absolute;
  top: 6px;
  right: -30px;
  z-index: 999;
  background-image: linear-gradient(135deg, #5e60eb 3%, #4586fb 100%);
  background-blend-mode: normal, normal;
  box-shadow: 0px 5px 5px 0px rgba(11, 2, 5, 0.1);
  border-radius: 0px 6px 6px 0px;
  .h-unfold-icon {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px #fff solid;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    .h-circle {
      width: 8px;
      height: 8px;
      border-top: 1px #fff solid;
      border-left: 1px #fff solid;
      margin: 0 auto;
      margin-left: 6px;
      top: 50%;
      transform: translateY(50%) rotate(-45deg);
    }
    .h-icon-reverse {
      margin-left: 2px;
      transform: translateY(50%) rotate(135deg);
    }
  }
}
</style>
