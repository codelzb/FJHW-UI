<!--  -->
<template>
  <div class="h-table-wrapper" ref="wrapper">
    <div ref="scroll" style="overflow: auto;position:relative;" @scroll="handleScroll">
      <div class="h-table-view-phantom" :style="{ height: contentHeight + 'px' }"></div>
      <div ref="tableWrapper">
        <table class="h-table" :class="{ bordered, compact, striped }" ref="table">
          <thead>
            <tr>
              <th v-if="expand" :style="{ width: '50px' }" class="h-table-center"></th>
              <th v-if="checkable" :style="{ width: '50px' }" class="h-table-center"><input type="checkbox" @change="onChangeAllItems($event)" :checked="areAllItemsSelected" ref="allChecked" /></th>
              <th :style="{ width: '50px' }" class="h-table-center" v-if="numberVisable">#</th>
              <th :style="{ width: column.width + 'px' }" v-for="column in columns" :key="column.field">
                <div class="h-table-header">
                  {{ column.name }}
                  <span class="h-table-sorter" v-if="'sortable' in column">
                    <h-icon name="arrow-up-filling2" :class="{ active: column['sortable'] === 'descending' }" @click="changeOrderBy(column['field'], 'descending', column)" />
                    <h-icon name="arrow-down-filling2" :class="{ active: column['sortable'] === 'ascending' }" @click="changeOrderBy(column['field'], 'ascending', column)" />
                  </span>
                </div>
              </th>
              <th v-if="$scopedSlots.default"></th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, index) in visibleData">
              <tr :key="item.id">
                <td v-if="expand" :style="{ width: '50px' }" class="h-table-center">
                  <h-icon name="arrow-right" class="h-table-expandIcon" @click="expandItem(item.id)"></h-icon>
                </td>
                <td v-if="checkable" :style="{ width: '50px' }" class="h-table-center"><input type="checkbox" @change="onChangeItem(item, index, $event)" :checked="inSelectItmes(item)" /></td>
                <td :style="{ width: '50px' }" class="h-table-center" v-if="numberVisable">{{ index + 1 }}</td>
                <template v-for="column in columns">
                  <td :style="{ width: column.width + 'px',height: itemHeight + 'px' }" :key="column.field">
                    <template v-if="column.render">
                      <vnodes :vnodes="column.render({ value: item[column.field] })"></vnodes>
                    </template>
                    <template v-else>
                      {{ item[column.field] }}
                    </template>
                  </td>
                </template>
                <td v-if="$scopedSlots.default"><slot :item="item"></slot></td>
              </tr>
              <tr v-if="inExpandIds(item.id)" :key="`${item.id}-expand`">
                <td :colspan="columns.length + expandedCellColSpan">
                  {{ item[expand] }}
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <div class="h-table-loading" v-if="loading">
      <h-icon name="loading"></h-icon>
    </div>
  </div>
</template>
<script>
import Hicon from "./icon.vue";
import Input from "./input.vue";
import { orderBy } from "./util.js";
export default {
  name: "hTable",
  props: {
    // columns: {
    //   type: Array,
    //   require: true,
    // },
    loading1111: {
      type: Boolean,
    },
    selectedItems: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      require: true,
      validator(array) {
        return !(array.filter((item) => item.id === undefined).length > 0);
      },
    },
    expand: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    height: {
      type: Number,
    },
    numberVisable: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    compact: {
      type: Boolean,
      default: false,
    },
    striped: {
      type: Boolean,
      default: true,
    },
    checkable: {
      type: Boolean,
      default: false,
    },
    sortMethod: Function,
    sortBy: [String, Function, Array],
    sortOrders: {
      type: Array,
      default() {
        return ["ascending", "descending", null];
      },
      validator(val) {
        return val.every((order) => ["ascending", "descending", null].indexOf(order) > -1);
      },
    },
    itemHeight: {
      type: Number,
      default: 40,
    },
  },
  components: {
    Input,
    Hicon,
    vnodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes,
    },
  },
  data() {
    return {
      copyData: this.data,
      table2: "",
      expandIds: [],
      columns: [],

      visibleData: [],
    };
  },
  watch: {
    selectedItems() {
      if (this.selectedItems.length === this.data.length || this.selectedItems.length === 0) {
        this.$refs.allChecked.indeterminate = false;
      } else {
        this.$refs.allChecked.indeterminate = true;
      }
    },
  },
  computed: {
    areAllItemsSelected() {
      const a = this.data.map((item) => item.id).sort();
      const b = this.selectedItems.map((item) => item.id).sort();
      let equal = true;
      if (a.length === b.length) {
        for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            equal = false;
            break;
          }
        }
        return equal;
      } else {
        return false;
      }
    },
    expandedCellColSpan() {
      let result = 0;
      if (this.checkable) {
        result += 1;
      }
      if (this.expand) {
        result += 1;
      }
      if (this.numberVisable) {
        result += 1;
      }
      return result+1;
    },
    contentHeight() {
      console.log("this.data.length * this.itemHeight ", this.data.length * this.itemHeight);
      return this.data.length * this.itemHeight + "px";
    },
    visibleDataHeight() {
      return this.visibleData.length * this.itemHeight + "px";
    },
  },
  created() {},
  mounted() {
    console.log("this.$slots.default", this.$slots.default);
    this.columns = this.$slots.default.map((node) => {
      let { name, field, width } = node.componentOptions.propsData;
      let render = node.data.scopedSlots && node.data.scopedSlots.default;
      return { name, field, width, render };
    });
    console.log("this.columns", this.columns);
    let table2 = this.$refs.table.cloneNode(false);
    this.table2 = table2;
    table2.classList.add("h-table-copy");
    // table2.appendChild(this.$refs.table.children[0]);
    let tHead = this.$refs.table.children[0];
    let { height } = tHead.getBoundingClientRect();
    this.$refs.tableWrapper.style.marginTop = height + "px";
    this.$refs.tableWrapper.style.height = this.height - height + "px";
    table2.appendChild(tHead);
    this.$refs.wrapper.appendChild(table2);
    // this.updateHeadersWidth();
    // this.onWindowResize = () => this.upforceUpdateHeadersWidth();
    // window.addEventListener("resize", this.onWindowResize);

    //虚拟列表
    this.updateVisibleData();
  },
  beforeDestroy() {
    this.table2.remove();
    // window.removeEventListener("resize", this.onWindowResize);
  },
  methods: {
    updateVisibleData(scrollTop) {
      scrollTop = scrollTop || 0;
      const visibleCount = Math.ceil(this.$refs.tableWrapper.clientHeight / this.itemHeight);
      const start = Math.floor(scrollTop / this.itemHeight);
      const end = start + visibleCount;
      console.log("start", start, end);
      this.visibleData = this.data.slice(start, end);
      this.$refs.tableWrapper.style.webkitTransform = `translate3d(0, ${start * this.itemHeight}px, 0)`;
    },
    handleScroll() {
      const scrollTop = this.$refs.scroll.scrollTop;
      console.log('scrollTop',scrollTop);
      this.updateVisibleData(scrollTop);
    },
    inExpandIds(id) {
      return this.expandIds.indexOf(id) >= 0;
    },
    expandItem(id) {
      if (this.inExpandIds(id)) {
        this.expandIds.splice(this.expandIds.indexOf(id), 1);
      } else {
        this.expandIds.push(id);
      }
    },
    updateHeadersWidth() {
      //TODO:动态更新表头宽度...未完成
      let table2 = this.table2;
      let tableHeader = Array.from(this.$refs.table.children).filter((node) => node.tagName.toLowerCase() === "thead")[0];
      let tableHeader2;
      Array.from(table2.children).map((node) => {
        if (node.tagName.toLowerCase() !== "thead") {
          node.remove;
        } else {
          tableHeader2 = node;
        }
      });
      Array.from(tableHeader.children[0].children).map((th, i) => {
        const { width } = th.getBoundingClientRect();
        tableHeader2.children[0].children[i].style.width = width + "px";
      });
    },
    changeOrderBy(field, value, column) {
      let copy = JSON.parse(JSON.stringify(this.columns));
      copy.forEach((e) => {
        if (e.field == field) {
          if (value === e["sortable"]) {
            e["sortable"] = null;
          } else {
            e["sortable"] = value;
          }
          let { text, field } = column;
          this.$emit("sort-change", { column: { text, field }, order: e["sortable"] });
          this.$emit("update:data", e["sortable"] ? orderBy(this.data, e.field, e["sortable"], this.sortMethod, this.sortBy) : this.copyData);
        }
      });
      this.$emit("update:columns", copy);
    },
    inSelectItmes(item) {
      return this.selectedItems.filter((i) => i.id === item.id).length > 0;
    },
    onChangeItem(item, index, e) {
      let selected = e.target.checked;
      let copy = JSON.parse(JSON.stringify(this.selectedItems));
      if (selected) {
        copy.push(item);
      } else {
        copy = copy.filter((i) => i.id !== item.id);
      }
      this.$emit("update:selectedItems", copy);
    },
    onChangeAllItems(e) {
      let selected = e.target.checked;
      this.$emit("update:selectedItems", selected ? this.data : []);
    },
  },
  filters: {},
};
</script>
<style lang="scss">
@import "var";
.h-table {
  box-sizing: border-box;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-bottom: 1px solid #dae4f3;
  &.bordered {
    border: 1px solid #dae4f3;
    border-bottom: unset;
    td,
    th {
      border: 1px solid #dae4f3;
    }
  }
  &.compact {
    td,
    th {
      padding: 4px;
    }
  }
  td,
  th {
    border-bottom: 1px solid #dae4f3;
    text-align: left;
    padding: 8px;
  }
  &.striped {
    tbody {
      > tr {
        &:nth-child(odd) {
          background-color: #fff;
        }
        &:nth-child(even) {
          background-color: #eaf4fe;
        }
      }
    }
  }
  &-view-phantom {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
    height: 40000px;
  }
  &-sorter {
    display: inline-flex;
    flex-direction: column;
    cursor: pointer;
    svg {
      width: 14px;
      height: 14px;
      fill: #bbb;
      &.active {
        fill: #333;
      }
      &:first-child {
        position: relative;
      }
      &:nth-of-type(2) {
        position: relative;
        top: 2px;
      }
    }
  }
  &-header {
    display: flex;
    align-items: center;
  }
  &-wrapper {
    position: relative;
    // overflow: auto;
  }
  &-loading {
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 50px;
      height: 50px;
      @include spin;
    }
  }
  &-copy {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
  }
  &-expandIcon {
    width: 15px;
    height: 15px;
  }
  & &-center {
    text-align: center;
  }
}
</style>
