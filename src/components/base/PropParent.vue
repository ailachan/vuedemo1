<template>
	<div style="border: 2px solid yellow;">
		<!-- prop单向数据流：
				父组件到子组件数据的单向绑定，父组件数据发生变化，
				子组件渲染，但是子组件不允许修改父组件数据
		 -->
		<ProChild :message="msg" 
			:per="person"
			></ProChild>
		<button @click="chData">点击修改数据（父组件）</button>
		
		
		<ProChild2
			:propA="100"
			propB="hello"
			propC="hello"
			propF="s"
		></ProChild2>
		
	</div>
</template>

<script>
	import ProChild from "./PropChild.vue"
	import ProChild2 from "./PropChild2.vue"
	
	export default {
		components:{
			ProChild,
			ProChild2
		},
		data(){
			return{
				msg:"hello",
				person:{
					name:"张三",
					age:100
				}
			}
		},
		methods:{
			chData(){
				this.msg = this.msg+"hello"
			}
		}
	}
	
</script>

<style>
</style>