<!--  -->
<template>
  <div class="h-layout" :class="layoutClass">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name:'Hlayout',
  components: {},
  data () {
    return {
        layoutClass:{
            'h-hasSider':false,
        }
    };
  },
  computed: {},
  created(){},
  mounted(){
      this.$children.forEach((vm)=>{
          if(vm.$options.name==='Hsider'){
              this.layoutClass['h-hasSider']=true
          }
      })
  },
  methods: {},
  filters: {}
}

</script>
<style lang='scss'>
.h-layout{
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    flex-grow: 1;
     &.h-hasSider {
      flex-direction: row;
    }
}
</style>