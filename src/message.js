import Vue from 'vue'
import messageComponent from './message.vue'
// import confirmComponent from './confirm.vue'
let MessageConstructor = Vue.extend(messageComponent);

let instance;
let instances = [];
let seed = 1;
const Message = function(options) {
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  let id = 'message_' + seed++;
  instance = new MessageConstructor({
    data:{options:options}
  })
  instance.id = id;
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.visible = true;
  instances.push(instance);
  return instance;
};
['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = (options) => {
    if (options.constructor == Object) {
      return Message({
        ...options,
        type
      });
    }
    return Message({
      type,
      message: options
    });
  };
});
Message.close = function(id) {
  for (let i = instances.length - 1; i >= 0;i--) {
    if(instances[i].visible==true){
      instances[i].close();
      return 
    }
  }
};
Message.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};
/*
const Message  = {
  install(Vue, options) {
    ['error','success', 'warning', 'info', 'error'].forEach(type => {
      Vue.prototype[`$${type}`] = function(options) {
        if (typeof options === 'string') {
          options = {
            message: options,
            type
          };
        }
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new MessageConstructor({
          options:options
        }).$mount(div)
        console.log('type',type,vm);
        vm.visible = true
      }
    })
    // Vue.prototype.$success = function({
    //   message,
    //   duration = 2000,
    //   showClose = false
    // }) {
    //   const Constructor = Vue.extend(messageComponent)
    //   const div = document.createElement('div')
    //   document.body.appendChild(div)
    //   const vm = new Constructor({
    //     propsData: {
    //       options: {
    //         type: 'success',
    //         message,
    //         duration,
    //         showClose
    //       }
    //     }
    //   }).$mount(div)
    //   vm.visible = true
    // }

    // Vue.prototype.$info = function({
    //   message,
    //   duration = 2000,
    //   showClose = false
    // }) {
    //   const Constructor = Vue.extend(messageComponent)
    //   const div = document.createElement('div')
    //   document.body.appendChild(div)
    //   const vm = new Constructor({
    //     propsData: {
    //       options: {
    //         type: 'info',
    //         message,
    //         duration,
    //         showClose
    //       }
    //     }
    //   }).$mount(div)
    //   vm.visible = true
    // }

    // Vue.prototype.$warning = function({
    //   message,
    //   duration = 2000,
    //   showClose = false
    // }) {
    //   const Constructor = Vue.extend(messageComponent)
    //   const div = document.createElement('div')
    //   document.body.appendChild(div)
    //   const vm = new Constructor({
    //     propsData: {
    //       options: {
    //         type: 'warning',
    //         message,
    //         duration,
    //         showClose
    //       }
    //     }
    //   }).$mount(div)
    //   vm.visible = true
    // }

    // Vue.prototype.$error = function({
    //   message,
    //   duration = 2000,
    //   showClose = false
    // }) {
    //   const Constructor = Vue.extend(messageComponent)
    //   const div = document.createElement('div')
    //   document.body.appendChild(div)
    //   const vm = new Constructor({
    //     propsData: {
    //       options: {
    //         type: 'error',
    //         message,
    //         duration,
    //         showClose
    //       }
    //     }
    //   }).$mount(div)
    //   vm.visible = true
    // }

    // Vue.prototype.$confirm = function(options) {
    //   const Constructor = Vue.extend(confirmComponent)
    //   const div = document.createElement('div')
    //   document.body.appendChild(div)
    //   const vm = new Constructor({
    //     propsData: options
    //   }).$mount(div)
    //   vm.visible = true
    //   return vm.confirm()
    // }
  },

  success({ message, duration = 2000, showClose = false }) {
    const Constructor = Vue.extend(messageComponent)
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
      propsData: {
        options: {
          type: 'success',
          message,
          duration,
          showClose
        }
      }
    }).$mount(div)
    vm.visible = true
  },

  info({ message, duration = 2000, showClose = false }) {
    const Constructor = Vue.extend(messageComponent)
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
      propsData: {
        options: {
          type: 'info',
          message,
          duration,
          showClose
        }
      }
    }).$mount(div)
    vm.visible = true
  },

  warning({ message, duration = 2000, showClose = false }) {
    const Constructor = Vue.extend(messageComponent)
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
      propsData: {
        options: {
          type: 'warning',
          message,
          duration,
          showClose
        }
      }
    }).$mount(div)
    vm.visible = true
  },

  error({ message, duration = 2000, showClose = false }) {
    const Constructor = Vue.extend(messageComponent)
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
      propsData: {
        options: {
          type: 'error',
          message,
          duration,
          showClose
        }
      }
    }).$mount(div)
    vm.visible = true
  },

  // confirm(options) {
  //   const Constructor = Vue.extend(confirmComponent)
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   const vm = new Constructor({
  //     propsData: options
  //   }).$mount(div)
  //   vm.visible = true
  //   return vm.confirm()
  // }
}
*/
export default Message