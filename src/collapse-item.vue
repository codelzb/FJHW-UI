<!--  -->
<template>
  <div class="h-collapse-item" :class="{disabled}">
    <div class="title" @click="toggle" v-if="!title">
      <slot name="title"></slot>
    </div>
    <div class="title" @click="toggle" :data-name="name" v-else>
      {{ title }}
    </div>
    <div class="content" ref="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "hCollapseItem",
  props: {
    title: {
      type: String,
    },
    name: {
      type: [String, Number],
      require: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  components: {},
  data() {
    return {
      open: false,
    };
  },
  computed: {},
  created() {},
  inject: ["eventBus"],
  mounted() {
    this.eventBus &&
      this.eventBus.$on("update:selected", (names) => {
        if (names.indexOf(this.name) >= 0) {
          this.open = true;
        } else {
          this.open = false;
        }
      });
  },
  methods: {
    toggle() {
	  if(this.disabled)return
      if (this.open) {
        this.eventBus && this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        this.eventBus && this.eventBus.$emit("update:addSelected", this.name);
      }
    },
  },
};
</script>
<style lang="scss">
@import './color.scss';
$grey: #ddd;
$border-radius: 4px;
.h-collapse-item {
  &.disabled {
    color: $disabled;
    cursor: not-allowed;
  }
  > .title {
    border: 1px solid $grey;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    background: lighten($grey, 8%);
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content {
    padding: 8px;
  }
}
</style>
