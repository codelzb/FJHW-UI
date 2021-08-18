/* eslint-disable */ 
import Vue from "vue";
import './assets/icons/index.js'
import  "./assets/style/reset.css";
import App from "./App.vue";
import Button from './components/button.vue'
import Icon from './components/icon.vue'
import ButtonGroup from './components/button-group.vue'
import Input from './components/input.vue'
import Row from './components/row.vue'
import Col from './components/col.vue'
import Layout from './components/layout.vue'
import Header from './components/header.vue'
import Sider from './components/sider.vue'
import Content from './components/content.vue'
import Footer from './components/footer.vue'
import plugin from './components/message.js'
import Tabs from './components/tabs'
import TabsTitle from './components/tabs-title'
import TabsPane from './components/tabs-pane'
import Popover from './components/popover.vue'
import Collapse from './components/collapse'
import CollapseItem from './components/collapse-item'
import Cascader from './components/cascader'
import Table from './components/table'

Vue.component('h-button', Button)
Vue.component('h-icon', Icon)
Vue.component('h-button-group', ButtonGroup)
Vue.component('h-input', Input)
Vue.component('h-row', Row)
Vue.component('h-col', Col)
Vue.component('h-layout', Layout)
Vue.component('h-header', Header)
Vue.component('h-sider', Sider)
Vue.component('h-content', Content)
Vue.component('h-footer', Footer)
Vue.prototype.$message = plugin;
Vue.component('h-tabs', Tabs)
Vue.component('h-tabs-title', TabsTitle)
Vue.component('h-tabs-pane', TabsPane)
Vue.component('h-popover', Popover)
Vue.component('h-collapse', Collapse)
Vue.component('h-collapse-item', CollapseItem)
Vue.component('h-cascader', Cascader)
Vue.component('h-table', Table)
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
