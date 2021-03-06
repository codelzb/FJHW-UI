import { expect } from 'chai'
import { shallowMount,mount  } from '@vue/test-utils'
import Button from '@/components/button.vue'
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

describe('Button', () => {

  it('存在.', () => {
    expect(Button).to.exist
  })

  it('可以设置icon.', () => {
    const warpper = mount(Button,{
      propsData:{
        icon:'error'
      }
    })
    const useElement = warpper.find('use')
    expect(useElement.attributes()['href']).to.equal('#icon-error')
  })

  it('可以设置loading.', () => {
    const warpper = mount(Button,{
      propsData: {
        icon: 'loading',
        loading: true
      }
    })
    const vm=warpper.vm
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.equal(1)
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loading')
    vm.$destroy()
  })

  xit('icon 默认的 order 是 1', () => {
    const warpper = mount(Button,{
      propsData: {
        icon: 'loading'
      }
    })
    const vm =warpper.vm
    const icon = vm.$el.querySelector('span')
    expect(getComputedStyle(icon).order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
  })
  xit('设置 iconPosition 可以改变 order', () => {
    const warpper = mount(Button,{
      propsData: {
        icon: 'error',
        position: 'right'
      }
    })
    const vm =warpper.vm
    const icon = vm.$el.querySelector('span')
    expect(getComputedStyle(icon).order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  })
  it('点击 button 触发 click 事件', () => {
    const wrapper = mount(Button,{
      propsData: {
        icon: 'error',
      }
    })
    const vm=wrapper.vm
    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called

  })
})
