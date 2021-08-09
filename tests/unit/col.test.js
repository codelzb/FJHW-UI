const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row.vue'
import Col from '../src/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

    it('存在.', () => {
        expect(Row).to.exist
    })
    it('接受span属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm= new Constructor({
            propsData:{
                span:1
            }
        }).$mount(div)
        const element=vm.$el
        expect(vm.$el.classList.contains('h-col-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接受offset',()=>{
        const div=document.createElement('div')
        document.body.appendChild(div)
        const Constructor=Vue.extend(Col)
        const vm=new Constructor({
            propsData:{
                offset:1
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('h-offset-1')).to.equal(true)
    })
    it('xs md lg xl',()=>{
        const div=document.createElement('div')
        document.body.appendChild(div)
        const Constructor=Vue.extend(Col)
        const vm=new Constructor({
            propsData:{
                xl:1
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('h-col-xl-1')).to.equal(true)
    })
})