<template>
	<div style="border: 2px solid black;"> 
		<!-- 
			条件渲染
		 -->
		<h1 v-if="awesome">Vue is awesome!</h1>
		<h1 v-else>Oh no 😢</h1>
		<button @click="this.awesome=!this.awesome">点击</button>
		
		<!-- 多条件分支 -->
		<div v-if="type === 'A'">
		  A
		</div>
		<div v-else-if="type === 'B'">
		  B
		</div>
		<div v-else-if="type === 'C'">
		  C
		</div>
		<div v-else>
		  Not A/B/C
		</div>
		<button @click="btnCh()">点击修改</button>
		
		
		<!-- template :
			模板标签，一般情况下就是用于创建html代码，供js使用，
			默认情况下，并不会在页面中显示
			在这里使用条件渲染，如果条件成立，渲染的时候，不会渲染template
			标签本身，只会渲染它里面的内容，是会显示在页面上的
		-->
		<template v-if="ok">
		  <h1>Title</h1>
		  <p>Paragraph 1</p>
		  <p>Paragraph 2</p>
		</template>
		
		<!-- v-show条件渲染 -->
		<h1 v-show="sh">Hello!</h1>
		<button @click="this.sh = !this.sh">点击</button>
		
		<!-- v-if和v-show的区别
			v-if是真正的条件渲染，条件成立渲染标签，条件不成立不渲染
			v-show 不管条件成不成立都渲染，只是如果条件不成立，
					则使用css的display属性隐藏标签
		 -->
	</div>
</template>

<script>
	export default{
		data(){
			return{
				awesome:true,
				type:"A",
				ok:true,
				sh:true
			}
		},
		methods:{
			btnCh(){
				if(this.type === "A"){
					this.type = "B"
				}else if(this.type === "B"){
					this.type = "C"
				}else if(this.type === "C"){
					this.type = "D"
				}else{
					this.type = "A"
				}
			}
		}
		
	}
	
</script>

<style>
</style>