import Vue from 'vue'
import '../style/reset.css'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import plugin from './message.js'
import Tabs from './tabs'
import TabsTitle from './tabs-title'
import TabsPane from './tabs-pane'
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
new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi',
    selectedTab: 'social'
  },
  created(){
  },
  methods: {
    yyy(data){
      console.log('yyy')
      console.log(data)
    },
    inputChange (e) {
      console.log(e)
    },
    showToast1(){
      this.$message.error({
        message: '这是一条错误消息，并且不会自动关闭',
        showClose: true,
        onClose:(e)=>{
          console.log('1111111111111',e);
        }
    })
    },
    showToast2(){
      this.$message.info({
        message: '<strong>aaaa额额额</strong>',
        iconClass:'loading',
        useHTML:true,
        showClose: true,
        offset:300
    })
    },
    showToast3(){
      this.$message.close()
    },
    showToast4(){
      this.$message.success({
        message: '这是一条成功消息，并且不会自动关闭',
        showClose: true
    })
    },
    showToast5(){
      this.$message.warning({
        message: '这是一条警告消息，并且不会自动关闭',
        showClose: true
    })
    },
    showToast(position){
      this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
        position,
        enableHtml: false,
        closeButton: {
          text: '已充值',
          callback () {
            console.log('他说已经充值智商了')
          }
        },
        autoClose: 3,
      })
    }
  }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
/*
try {

  // 单元测试
  {
    '可以设置 icon'
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'loading'
      }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')
    vm.$el.remove()
    vm.$destroy()
  }
  {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'loading',
        loading: true
      }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')
    vm.$el.remove()
    vm.$destroy()
  }
  {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'loading'
      }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
  }
  {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'loading',
        position: 'right'
      }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  }
  {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'loading',
      }
    })
    vm.$mount()
    let spy = chai.spy(function () {})

    vm.$on('click', spy)
    // 希望这个函数被执行
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
  }
} catch (error) {
  window.errors = [error]
} finally {
  window.errors && window.errors.forEach((error) => {
    console.error(error.message)
  })
}
*/