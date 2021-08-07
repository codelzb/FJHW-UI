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

describe('Tabs-title', () => {
        it('存在.', () => {
          expect(TabsTitle).to.exist
        })
      
        it('接受 name 属性', () => {
          const Constructor = Vue.extend(TabsTitle)
          const vm = new Constructor({
            propsData: {
              name: 'xxx',
            }
          }).$mount()
          expect(vm.name).to.eq('xxx')
        })
        // it('接受 disabled 属性', () => {
        //   const Constructor = Vue.extend(TabsTitle)
        //   const vm = new Constructor({
        //     propsData: {
        //       disabled: true,
        //     }
        //   }).$mount()
        //   expect(vm.$el.classList.contains('disabled')).to.be.true
        //   const callback = sinon.fake();
        //   vm.$on('click', callback)
        //   vm.$el.click()
        //   expect(callback).to.have.not.been.called
        // })

})