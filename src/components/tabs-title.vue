<template>
  <div class="h-tabs-title" :class="{ active, disabled }" @click="onClick">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: "hTabsTitle",
  props: {
    disabled: { type: Boolean, default: false },
    name: { type: [String, Number], required: true },
  },
  inject: ["eventBus"],
  data() {
    return { active: false };
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", (name) => {
        this.active = this.name === name;
      });
    }
  },
  methods: {
    onClick() {
      this.disabled ? 0 : this.eventBus.$emit("update:selected", this.name, this);
    },
  },
};
</script>
<style  lang="scss">
@import "./color.scss";
.h-tabs-title {
  flex-shrink: 0;
  padding: 0.5em 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  user-select: none;
  position: relative;
  &::after {
    content: "";
	height: 1em;
    display: block;
    border-right: solid 1px #dcdfe6;
    position: absolute;
    left: 100%;
    transform: translateX(-50%);
  }
  &.active {
    color:#5396ff;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled;
    cursor: not-allowed;
  }
}
</style>
