<template>
	<!-- 一种实现双向绑定的方式 -->
	<!-- <input
	    :value="modelValue"
	    @input="$emit('update:modelValue', $event.target.value)"
	  /> -->
	  
	  <!-- 另一种方式实现组件的v-model
	   双向绑定-->
	   <input v-model="value" />
	  
		<input v-model="valueTitle" />
</template>

<script>
	export default{
		props:["modelValue","title"],
		computed:{
			value:{
				get(){
					return this.modelValue
				},
				set(val){
					this.$emit('update:modelValue', val)
				}
			},
			valueTitle:{
				get(){
					return this.title
				},
				set(val){
					this.$emit('update:title', val)
				}
			}
		}
	}
	
</script>

<style>
</style>