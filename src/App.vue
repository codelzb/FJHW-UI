<template>
  <div id="app">
    <div class="gl">
      <div class="gl">
        <h-cascader :source="source"></h-cascader>
      </div>
      <div class="gl">
        <h-collapse v-model="select" @change="handleChange">
          <h-collapse-item name="social" disabled>
            <template slot="title">
              hhhhhhhhhhhhhhhhhh<h-icon name="error"></h-icon>
            </template>
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
            <h-content class="demo" style="background-color: yellow"
              >1</h-content
            >
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
export default {
  name: "App",
  components: {},
  data() {
    return {
      loading1: false,
      loading2: true,
      loading3: false,
      message: "hi",
      selectedTab: "social",
      selected: "social",
      select: ["social"],
      source: [
        {
          value: "福建",
          label: "福建",
          children: [
            {
              value: "厦门",
              label: "厦门",
              children: [
                { value: "同安区", label: "同安区", children: [{}] },
                { value: "湖里区", label: "湖里区", children: [{}] },
                { value: "思明区", label: "思明区", children: [{}] },
              ],
            },
            {
              value: "福州",
              label: "福州",
              children: [{ value: "鼓楼区", label: "鼓楼区", children: [{}] }],
            },
            { value: "莆田", label: "莆田", children: [] },
          ],
        },
        {
          value: "广东",
          label: "广东",
          children: [
            {
              value: "深圳",
              label: "深圳",
              children: [
                { value: "宝安区", label: "宝安区" },
                { value: "前海区", label: "前海区" },
              ],
            },
            { value: "珠海", label: "珠海", children: [] },
          ],
        },
      ],
    };
  },
  created() {},
  methods: {
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
      this.$toast(
        `你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`,
        {
          position,
          enableHtml: false,
          closeButton: {
            text: "已充值",
            callback() {
              console.log("他说已经充值智商了");
            },
          },
          autoClose: 3,
        }
      );
    },
  },
};
</script>

<style lang="scss">
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
