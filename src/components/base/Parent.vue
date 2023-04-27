<template>
	<div style="border: 2px solid black;">
		<!-- Prop 名字格式 --> 
		<!-- 
			如果传递的数据属性，没有加上v-bind绑定，说明此数据是静态传参，
			相当于是普通html属性，直接传参字符串
		 -->
		<Child :greetingMessage="message" 
			:greet-count="count" 
			title="My journey with Vue" 
			:likes="42" 
			lks="42" 
			:isPublished="true"
			:comment-ids="[234, 266, 273]"
			:author="{
			    name: 'Veronica',
			    company: 'Veridian Dynamics'
			  }"
			v-bind="post" :proe="d"
			  ></Child>
		
		
		
	</div>
</template>

<script>
	import Child from "./Child.vue"
	
	export default{
		components:{
			Child
		},
		data(){
			return{
				message:"父组件传递参数1",
				count:100,
				post: {
					id: 1,
					title2: 'My Journey with Vue'
				},
				d:'d'
			}
		}
	}
	
	
</script>

<style>
</style>