<template>
  <div id="app">
    <div class="gl">
      <div class="scroll" style="height:200px;width:250px;">
        <h-scroll style="height:200px;width:250px;">
          <div style="width:300px;height:700px;border:solid;">
            <p>lzb无敌</p>
            <p>lzb无敌</p>
            <p>lzb无敌</p>
            <p>lzb无敌</p>
            <p>lzb无敌</p>
            <p>lzb无敌</p>
            <p>lzb无敌</p>
            <p>lzb无敌</p>
          </div>
        </h-scroll>
      </div>
      <div class="gl">
        <span>{{ selectedTable }}</span>
        <h-table :data.sync="data" checkable expand="description" numberVisable bordered compact :selected-items.sync="selectedTable" :height="400" :loading="loading" @sort-change="sortChange">
          <h-table-column name="姓名" field="name" :width="100"></h-table-column>
          <h-table-column name="分数" field="score" :width="100"></h-table-column>
          <template slot-scope="scope">
            <button @click="edit(scope.item)">编辑</button>
            <button @click="view(scope.item)">删除</button>
          </template>
        </h-table>
      </div>
      <!-- <div class="gl">
        <h-table :data.sync="data" :columns.sync="columns" bordered :striped="false" :height="300" :sortMethod="aaa"  :selected-items.sync="selectedTable"></h-table>
      </div> -->
      <div class="gl" ref="wrapper">
        <h-cascader :source.sync="source" popover-height="200px" :selected.sync="selected1" :load-data="loadData"></h-cascader>
        <h-cascader :source.sync="source1" popover-height="200px" :selected.sync="selected1"></h-cascader>
      </div>
      <div class="gl">
        <h-collapse v-model="select" @change="handleChange">
          <h-collapse-item name="social" disabled>
            <template slot="title"> hhhhhhhhhhhhhhhhhh<h-icon name="error"></h-icon></template>
            // 内容文本
          </h-collapse-item>
          <h-collapse-item title="财经新闻" name="finance">
            // 内容文本
          </h-collapse-item>
          <h-collapse-item title="科技新闻" name="sicence">
            // 内容文本
          </h-collapse-item>
          <h-collapse-item title="体育新闻" name="sports">
            // 内容文本
          </h-collapse-item>
        </h-collapse>
      </div>
      <div class="gl">
        <h-popover trigger="hover">
          <template slot="content">hover不消失</template>
          <h-button>点击</h-button>
        </h-popover>
        <h-popover position="left">
          <template slot="content">弹出内容1</template>
          <h-button>点击</h-button>
        </h-popover>
        <h-popover position="right">
          <template slot="content">弹出内容1</template>
          <h-button>点击</h-button>
        </h-popover>
        <h-popover position="bottom">
          <template slot="content">弹出内容1</template>
          <h-button>点击</h-button>
        </h-popover>
      </div>
      <h-tabs v-model="selectedTab">
        <template slot="title">
          <h-tabs-title name="social">社会</h-tabs-title>
          <h-tabs-title name="finance">财经</h-tabs-title>
          <h-tabs-title name="sports">体育</h-tabs-title>
          <h-tabs-title name="disabled" disabled> 禁用 </h-tabs-title>
        </template>
        <h-tabs-pane name="social"> // 内容 </h-tabs-pane>
        <h-tabs-pane name="finance"> // 内容 </h-tabs-pane>
        <h-tabs-pane name="sports"> // 内容 </h-tabs-pane>
        <h-tabs-pane name="disabled"> // 内容 </h-tabs-pane>
      </h-tabs>
      <div class="gl">
        <h-layout style="height: 100vh">
          <h-header class="demo" style="background-color: #2588ef">1</h-header>
          <h-layout>
            <h-sider class="demo" style="background-color: red">1</h-sider>
            <h-content class="demo" style="background-color: yellow">1</h-content>
          </h-layout>
          <h-footer class="demo" style="background-color: #2588ef">1</h-footer>
        </h-layout>
      </div>
      <div class="gl">
        <h-row gutter="20" style="width: 1000px">
          <h-col :xl="4">1</h-col>
          <h-col :xl="4">1</h-col>
        </h-row>
      </div>
      <div class="gl">
        <h-input readonly></h-input>
        <h-input disabled></h-input>
        <h-input error="请输入中文"></h-input>
        <h-input v-model="message"></h-input>
      </div>
      <h-button icon="info" position="right" @click="showToast1">
        按钮
      </h-button>
      <h-button icon="info" position="left" @click="showToast2">
        按钮
      </h-button>
      <h-button :loading="true" @click="showToast3"> 按钮 </h-button>
      <div style="margin: 20px">
        <h-button-group>
          <h-button icon="power" @click="showToast4"> 上一页 </h-button>
          <h-button icon="power" position="left" @click="showToast5">
            按钮
          </h-button>
          <h-button :loading="true" position="right"> 下一页> </h-button>
        </h-button-group>
      </div>
    </div>
  </div>
</template>

<script>
import db from "./components/db";
function ajax(parentId = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter((item) => item.parent_id == parentId);
      result.forEach((node) => {
        if (db.filter((item) => item.parent_id === node.id).length > 0) {
          node.isLeaf = false;
        } else {
          node.isLeaf = true;
        }
      });
      success(result);
    }, 1000);
  });
}
let arr = [
  { name: "luo", score: "100", description: "xxxxxxxxx" },
  { name: "zong", score: "90", description: "xxxxxxxxx" },
  { name: "bin", score: "80" },
  { name: "luo", score: "100" },
  { name: "zong", score: "90" },
  { name: "bin", score: "80" },
  { name: "luo", score: "100" },
  { name: "zong", score: "90" },
  { name: "bin", score: "80" },
  { name: "bin", score: "80" },
  { name: "luo", score: "100" },
  { name: "zong", score: "90" },
  { name: "bin", score: "80" },
  { name: "bin", score: "80" },
  { name: "luo", score: "100" },
  { name: "zong", score: "90" },
  { name: "bin", score: "80" },
  { name: "luo", score: "100" },
  { name: "zong", score: "90" },
  { name: "bin", score: "80" },
];
let bigArr = [];
for (let i = 1; i < 51; i++) {
  bigArr.push(
    ...arr.map((item, index) => {
      return { id: i * 20 + index, ...item };
    })
  );
}
console.log("bigArr", bigArr);
export default {
  name: "App",
  components: {},
  data() {
    return {
      loading: false,
      loading1: false,
      loading2: true,
      loading3: false,
      message: "hi",
      selectedTab: "social",
      selected: "social",
      select: ["social"],
      selected1: ["福建"],
      source: [],
      source1: [
        {
          value: "福建",
          name: "福建",
          children: [
            {
              value: "厦门",
              name: "厦门",
              children: [
                { value: "同安区", name: "同安区", children: [] },
                { value: "湖里区", name: "湖里区", children: [] },
                { value: "思明区", name: "思明区", children: [] },
              ],
            },
            {
              value: "福州",
              name: "福州",
              children: [{ value: "鼓楼区", name: "鼓楼区", children: [] }],
            },
            { value: "莆田", name: "莆田", children: [] },
          ],
        },
        {
          value: "广东",
          name: "广东",
          children: [
            {
              value: "深圳",
              name: "深圳",
              children: [
                { value: "宝安区", name: "宝安区" },
                { value: "前海区", name: "前海区" },
              ],
            },
            { value: "珠海", name: "珠海", children: [] },
          ],
        },
      ],
      selectedTable: [],
      data: bigArr,
      columns: [
        { name: "姓名", field: "name", width: 100 },
        { name: "分数", field: "score", sortable: true },
      ],
    };
  },
  created() {
    ajax(0).then((result) => {
      this.source = result;
    });
  },
  mounted() {},
  methods: {
    edit(item) {
      alert(`${item.id}`);
    },
    view(item) {
      alert(`${item.id}`);
    },
    sortChange(data) {
      this.loading = !this.loading;
      setTimeout(() => {
        this.loading = !this.loading;
      }, 1000);
      console.log("data", data);
    },
    aaa(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }

      // names must be equal
      return 0;
    },
    x({ selected, item, index }) {
      console.log("selected", selected, item, index);
    },
    loadData({ id }, updateSource) {
      ajax(id).then((result) => {
        console.log(result);
        updateSource(result); // 回调:把别人传给我的函数调用一下
      });
    },
    handleChange(val) {
      console.log("手風琴", val);
    },
    yyy(data) {
      console.log("yyy");
      console.log(data);
    },
    inputChange(e) {
      console.log(e);
    },
    showToast1() {
      this.$message.error({
        message: "这是一条错误消息，并且不会自动关闭",
        showClose: true,
        onClose: (e) => {
          console.log("1111111111111", e);
        },
      });
    },
    showToast2() {
      this.$message.info({
        message: "<strong>aaaa额额额</strong>",
        iconClass: "loading",
        useHTML: true,
        showClose: true,
        offset: 300,
      });
    },
    showToast3() {
      this.$message.close();
    },
    showToast4() {
      this.$message.success({
        message: "这是一条成功消息，并且不会自动关闭",
        showClose: true,
      });
    },
    showToast5() {
      this.$message.warning({
        message: "这是一条警告消息，并且不会自动关闭",
        showClose: true,
      });
    },
    showToast(position) {
      this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
        position,
        enableHtml: false,
        closeButton: {
          text: "已充值",
          callback() {
            console.log("他说已经充值智商了");
          },
        },
        autoClose: 3,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.gl {
  margin: 20px;
  margin-top: 100px;
}
.demo {
  background: #ddd;
  border: 1px solid #666;
  height: 100px;
}

.h-sider {
  background: #333;
  width: 150px;
  height: 70vh;
}
</style>
