<template>
	<h1>生命周期{{msg}}</h1>
	<button @click="this.msg = this.msg+'hello'">点击修改</button>
	
</template>

<script>
	export default{
		data(){
			return{
				msg:"data"
			}
		
		},
		setup(){ //启动，第一调用的
			console.log("setup启动")
			//console.log("this："+this) //报错，没有this,说名组件对象还未创建
			//console.log("this.msg:"+this.msg)
			console.log("------------------------------")
		},
		beforeCreate(){
			console.log("beforeCreate")
			console.log("------------------------------")
		},
		created(){
			console.log("created")
			
			console.log("------------------------------")
		},
		beforeMount(){
			console.log("beforeMount")
			console.log("------------------------------")
		},
		mounted(){
			console.log("mounted")
			
			console.log("------------------------------")
		},
		beforeUpdate(){
			console.log("beforeUpdate")
			
			console.log("------------------------------")
		},
		updated(){
			console.log("updated")
			console.log("------------------------------")
		},
		beforeUnmount(){
			console.log("beforeUnmount")
			console.log("------------------------------")
		},
		unmounted(){
			console.log("unmounted")
			console.log("------------------------------")
		}
		
	}
	
	
</script>

<style>
</style>