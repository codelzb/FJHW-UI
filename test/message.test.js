const expect = chai.expect;
import Vue from 'vue'
import Message from '../src/message.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Message', () => {

    it('存在.', () => {
        expect(Message).to.exist
    })
    describe('props',function(){
        it('接受autoClose',(done)=>{
            let div=document.createElement('div')
            document.body.appendChild(div)
            const Constructor=Vue.extend(Message)
            const vm=new Constructor({
                data:{
                    options:{
                        autoClose:true,
                        duration:1000,
                        type:'success'
                    }
                }
            }).$mount(div)
            setTimeout(() => {
                expect(document.body.contains(vm.$el)).to.eq(true)
                done()
            }, 1500);
        })
        it('接受enableHTML',()=>{
            const Constructor=Vue.extend(Message)
            const callback = sinon.fake();
            const vm=new Constructor({
                data:{
                    options:{
                        useHTML:true,
                        message:'<strong id="test">hi</strong>'
                    }
                }
            }).$mount()
            let strong=vm.$el.querySelector('#test')
            expect(strong).to.exist
        })
    })
})