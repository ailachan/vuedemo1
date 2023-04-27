<template>
	<div style="border: 2px solid red;">
		<!-- 模板引用 -->
		<input type="text" ref="ipt"  />
		<button @click="prt">点击获取input对象</button>
		
		<!-- v-for 中的模板引用  -->
		<ul>
			<li v-for="item in items" :ref="'its'+item.id">
				{{item.msg}}
			</li>
		</ul>
		<button @click="prtFor">点击获取v-for的对象</button>
		
		<!-- 
			函数模板引用  
		 -->
		 <input :ref="(el) => { return 'iiput' }">
		
		
		<!-- 组件引用 -->
		<Child ref="cl"></Child>
		<button @click="getChild">获取子组件对象</button>
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
				items:[
					{msg:"hello",id:1},
					{msg:"world",id:2},
					{msg:"你好",id:3},
					{msg:"嘿嘿",id:4}
				]
			}
		},
		methods:{
			prt(){
				//直接获取dom对象，vue提供了一个$refs来获取
				let ipt = this.$refs.ipt
				console.log(ipt)
				//操作元素对象
				alert(ipt.value)
			},
			prtFor(){
				console.log(this.$refs.its1)
				console.log(this.$refs.its2)
				console.log(this.$refs.its3)
				console.log(this.$refs.its4)
			},
			getChild(){
				let cl = this.$refs.cl
				console.log(cl)
				console.log(cl.msg)
				cl.test1()
				//cl.test2() //如果子组件expose属性没有暴露，则调用报错
			}
		}
	}
	
</script>

<style>
</style>