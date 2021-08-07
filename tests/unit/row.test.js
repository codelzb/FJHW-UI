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
    it('接受gutter属性',(done)=>{
        Vue.component('h-row',Row)
        Vue.component('h-col',Col)
        const div=document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML=`
        <h-row gutter="20">
            <h-col span="12">1</h-col>
            <h-col span="12">1</h-col>
        </h-row>
        `
        const vm=new Vue({
            el:div
        })
        setTimeout(()=>{
            const row=vm.$el.querySelector('.h-row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const cols=vm.$el.querySelectorAll('.h-col')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        })
    })
    it('接受algin属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm= new Constructor({
            propsData:{
                align:"right"
            }
        }).$mount(div)
        const element=vm.$el
        expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
        vm.$el.remove()
        vm.$destroy()
    })

})