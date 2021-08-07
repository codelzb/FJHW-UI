<template>
    <div class="h-tabs-pane" :class="{active}" v-show="active">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'hTabsPane',
        inject: ['eventBus'],
        props: { name: { type: [String, Number], required: true } },
        data() { return { active: false } },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = this.name === name;
            })
        },
    }
</script>
<style lang="scss">
    @import './color.scss';
    .h-tabs-pane {
        &.active {
            background: $bg;
        }
    }
</style>