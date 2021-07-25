import Vue from 'vue'
import '../style/reset.css'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
Vue.component('h-button', Button)
Vue.component('h-icon', Icon)
Vue.component('h-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    message: 'hi'
  },
  created(){
  },
  methods: {
    inputChange (e) {
      console.log(e)
    }
  }
})

let chai = require('chai')
import spies from 'chai-spies'
chai.use(spies)
const expect =chai.expect
{
  const Constructor =Vue.extend(Button)
  console.log('Constructor',Constructor);
  const button =new Constructor({
    propsData:{
      icon:'shezhi'
    }
  })
  button.$mount()
  let useElement=button.$el.querySelector('use')
  let href=useElement.getAttribute('xlink:href')

  expect(href).to.eq('#icon-shezhi')

}
{
  const div =document.createElement('div')
  document.body.appendChild(div)
  const Constructor =Vue.extend(Button)
  console.log('Constructor',Constructor);
  const button =new Constructor({
    propsData:{
      icon:'qixiangjulogo',
      loading:true
    }
  })
  button.$mount(div)
  let useElement=button.$el.querySelector('use')
  let href=useElement.getAttribute('xlink:href')

  expect(href).to.eq('#icon-shezhi')

}
{
  const div =document.createElement('div')
  document.body.appendChild(div)
  const Constructor =Vue.extend(Button)
  console.log('Constructor',Constructor);
  const button =new Constructor({
    propsData:{
      icon:'qixiangjulogo',
      loading:true
    }
  })
  button.$mount(div)
  button.$el.remove()
  button.$destroy()
  let spy=chai.spy(function(){})

  button.$on('click',spy)
  let useElement=button.$el
  useElement.click()

  expect(spy).to.have.been.called()
}