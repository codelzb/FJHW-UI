const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

    it('存在.', () => {
        expect(Input).to.exist
    })
    describe('props', () => {
        it('接收value', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('input')
            expect(useElement.value).to.equal('1234')
            vm.$destroy()
        })
        it('接收disabled', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const el = vm.$el.querySelector('input')
            expect(el.disabled).to.equal(true)
            vm.$destroy()
        })
        it('接收readOnly', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const el = vm.$el.querySelector('input')
            expect(el.readOnly).to.equal(true)
            vm.$destroy()
        })
        it('接收error', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    error: '错了'
                }
            }).$mount()
            const el = vm.$el.querySelector('use')
            expect(el.getAttribute('xlink:href')).to.equal('#icon-error')
            const elm = vm.$el.querySelector(".errorMessage")
            expect(elm.innerText).to.equal('错了')
            vm.$destroy()
        })
    })
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
          vm.$destroy() 
        })
        it('支持 change/input/focus/blur 事件', () => {
          ['change', 'input', 'focus', 'blur']
            .forEach((eventName) => {
              vm = new Constructor({}).$mount()
              const callback = sinon.fake();
              vm.$on(eventName, callback)
              //触发input的change 事件
              let event = new Event(eventName);
              Object.defineProperty(
                event, 'target', {
                  value: {value: 'hi'}, enumerable: true
                }
              )
              let inputElement = vm.$el.querySelector('input')
              inputElement.dispatchEvent(event)
              expect(callback).to.have.been.calledWith('hi')
            })
        })
      })
})