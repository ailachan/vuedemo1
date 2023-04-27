<template>
	<div style="border: 2px solid black;"> 
		<!--
			侦听器:
			通过定义侦听器，可以监听数据的变化，并且可以
			获取数据变化前后的值
		 -->
		 <input type="text" v-model.lazy="msg" />
		
		<!-- 
			深层侦听：
			 默认复杂数据的类型的侦听，只有整个数据重新赋值的时候才会侦听到，
			 如果在数据内部属性发生变化时，需要侦听，这时候需要深度侦听
		 -->
		 <br />
		<input type="text" v-model="obj.name" /><br />
		<input type="text" v-model="obj.age" /><br />
		<input type="text" v-model="obj.sex" />
		
		<br />

		<!-- 
			$watch 定义侦听器
		 -->
		<input type="text" v-model="question" />
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:"hello world",
				obj:{
					name:"张三",
					age:20,
					sex:"男"
				},
				question:"hello"
			}
		},
		methods:{
			
		},
		watch:{
			msg(newval,oldval){
				console.log(oldval)
				console.log(newval)
				alert("msg修改")
			},
			obj:{
				handler(newval,oldval){ //深度侦听中oldval=newval，都是更改后的值
					console.log(oldval)
					console.log(newval)
					alert("obj修改")
				},
				deep:true,//深度侦听
				//immediate:true,//强制先执行一次
				flush: 'post' ,//让侦听器的执行在dom更新之后
			}
			
		},
		 created() {
		    const wt = this.$watch('question', (newQuestion) => {
				alert(newQuestion)
		    })
			
			//wt() //停止侦听器
		  }
		
		
	}
	
</script>

<style>
</style>