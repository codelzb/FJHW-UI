const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsTitle from '../src/tabs-title'
import TabsPane from '../src/tabs-pane'

Vue.component('h-tabs', Tabs)
Vue.component('h-tabs-title', TabsTitle)
Vue.component('h-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('Tabs存在.', () => {
    expect(Tabs).to.exist
  })
  it('接受 selected 属性', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <h-tabs selected="finance">
      <template slot="title">
          <h-tabs-title name="woman">美女 </h-tabs-title>
          <h-tabs-title name="finance">财经</h-tabs-title>
          <h-tabs-title name="sports"> 体育 </h-tabs-title>
        </template>
        <h-tabs-pane>
          <h-tabs-pane name="woman"> 美女相关资讯 </h-tabs-pane>
          <h-tabs-pane name="finance"> 财经相关资讯 </h-tabs-pane>
          <h-tabs-pane name="sports"> 体育相关资讯 </h-tabs-pane>
        </h-tabs-pane>
      </h-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.active`)
      expect(x.textContent).to.be.eq('财经')
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })
  it('可以接受 direction prop', () => {

  })

})