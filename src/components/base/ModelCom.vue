<template>
	<div style="border: 2px solid red;">
		<!-- 
			v-model组件使用
			如下代码会等价展开成这样的形式：
			
			<CustomInput
				:modelValue="searchText"
				@update:modelValue="(newValue) => {searchText = newValue}"
			></CustomInput>
			
		 -->
		 <p>{{searchText}}</p>
		 <CustomInput v-model="searchText"></CustomInput>
		 
		 
		 <!-- v-model传参
			默认展开等价于：
				<CustomInput
					:title="searchText"
					@update:title="(newValue) => {searchText = newValue}"
				></CustomInput>
		  -->
		 <p>{{text}}</p>
		 <CustomInput v-model:title="text"></CustomInput>
		
	</div>
</template>

<script>
	import CustomInput from "./CustomInput.vue"
	
	export default{
		components:{
			CustomInput
		},
		data(){
			return {
				searchText:"hello",
				text:"hello"
			}
		}
	}
	
</script>

<style>
</style>