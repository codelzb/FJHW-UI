<template>
  <div>
    <h-button>默认按钮</h-button>
    <h-button icon="error">默认按钮</h-button>
    <h-button :loading="true">默认按钮</h-button>
    <h-button disabled>默认按钮</h-button>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/button.vue'

  export default {
    components: {
      'h-button': Button
    },
    data () {
      return {
        content: `
          <h-button>默认按钮</h-button>
          <h-button icon="error">默认按钮</h-button>
          <h-button :loading="true">默认按钮</h-button>
          <h-button disabled>默认按钮</h-button>
      `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>