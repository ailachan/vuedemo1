<template>
	<h1>{{mess}}</h1>
	<button @click="chData">修改数据（子组件）</button>
	<h1>{{normalizedMsg}}</h1>
	
	<!-- 
		接收显示父组件的person对象
	 -->
	<h1>{{per.name}}</h1>
	<h1>{{per.age}}</h1>
	<button @click="chObj">修改对象数据（子组件）</button>
</template>

<script>
	export default{
		props:["message","per"],
		data(){
			return{
				//如果父组件的传参只是作为初始值，后续都需要在局部组件中改变
				mess:this.message
			}
		},
		methods:{
			chData(){
				
				//子组件中不允许直接修改父组件的传参，注意这是单向绑定的
				//this.message = "哈哈哈哈"
				
				//如果传参只作为初始值可以修改，修改的话只在当前组件有效
				this.mess = "哈哈哈哈"
			},
			chObj(){
				this.per.name = "李四"
				this.per.age = 30
			}
		},
		computed:{
			// 或者将父组件传参，通过计算属性转换
			normalizedMsg(){
				return this.message.trim().toUpperCase()
			}
		}
	}
	
</script>

<style>
</style>