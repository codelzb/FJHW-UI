<!--  -->
<template>
  <div class="h-collapse">
      <slot></slot>
  </div>
</template>
<script>
 import Vue from 'vue'
export default {
	model:{
		prop:'selected',
		event:'change'
	},
  props:{
		selected: { type: Array },
		accordion:{ 
			type: Boolean,
      default: false
		}
	},
  components: {},
  data () {
    return {
		 eventBus: new Vue(),
    };
  },
	 provide () {
      return {
        eventBus: this.eventBus
      }
    },
  computed: {},
  created(){},
  mounted(){
		this.eventBus.$emit('update:selected',this.selected)
		this.eventBus.$on('update:addSelected',(name)=>{
			let selectedCopy = JSON.parse(JSON.stringify(this.selected))
			if(this.accordion){
				selectedCopy=[name]
			}else{
				selectedCopy.push(name)
			}
			this.eventBus.$emit('update:selected',selectedCopy)
			this.$emit('change',selectedCopy)
		})
		this.eventBus.$on('update:removeSelected',(name)=>{
			let selectedCopy = JSON.parse(JSON.stringify(this.selected))
			let index = selectedCopy.indexOf(name)
			selectedCopy.splice(index, 1)
			this.eventBus.$emit('update:selected',selectedCopy)
			this.$emit('change',selectedCopy)
		})
	},
  methods: {},
  filters: {}
}

</script>
<style lang='scss'>
	$grey: #ddd;
  $border-radius: 4px;
  .h-collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }

</style>