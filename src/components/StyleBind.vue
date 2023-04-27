<template>
	<div style="border: 1px solid green;">
		
		<!-- 
			对象的绑定
		 -->
		<!-- class绑定对象 -->
		<p :class="{wdColor:wdC,wdSize:wdS}">测试文本</p>
		<!-- 绑定的对象也可以直接写入到data -->
		<p :class="styObj">测试文本2</p>
		<!-- 结合计算属性,返回对象 -->
		<p :class="classObject">测试文本2</p>
		
		<!-- 
			数组的绑定
		 -->
		 <!-- 基本的数组绑定 ，渲染结果：<div class="active text-danger"></div>-->
		 <div :class="[activeClass, errorClass]">测试文本3</div>
		 
		 <!-- 如果你也想在数组中有条件地渲染某个 class，你可以使用三元表达式-->
		<div :class="[isActive ? activeClass : '', errorClass]">测试文本4</div>
		<!-- 然而，这可能在有多个依赖条件的 class 时会有些冗长。因此也可以在数组中嵌套对象 -->
		<div :class="[{ wdColor: isActive }, errorClass]">测试文本5</div>
		<!-- 绑定样式到组件 -->
		<Imp :class="[{ wdColor: isActive }, errorClass]"></Imp>
		
		
		<!-- 
			绑定内联样式
			渲染之后：
			<p style="color:red;fontSize: 40px;">测试文本p</p>
		 -->
		 <p :style="{ color: activeColor, fontSize: fontSize + 'px' }">测试文本p</p>
	
		<!-- 直接绑定数据中的对象 -->
		<div :style="styleObject">测试文本div</div>
		<!-- 绑定数组 -->
		<div :style="[baseStyles, overridingStyles]">测试文本div</div>
		
		
	</div>
</template>

<script>
	import Imp from "./Imp.vue"
	
	export default{
		data(){
			return {
				wdC:true,
				wdS:false,
				styObj:{
					wdColor:true,
					wdSize:false,
					'wd-bg':true
				},
				isActive: true,
				error: true,
				activeClass: 'wdColor',
				errorClass: 'wd-bg',
				activeColor:"red",
				fontSize:40,
				styleObject: {
				  color: 'red',
				  fontSize: '13px'
				},
				baseStyles:{
					color:"green"
				},
				overridingStyles:{
					"background-color":"#123456"
				}
			}
		},
		computed:{
			classObject(){
				return {
					wdColor: this.isActive && !this.error,
					'wd-bg': this.error && this.error.type === 'fatal'
				}
			}
		},
		components:{
			Imp
		},
		
	}
	
</script>

<style scoped>
	.wdColor{
		color: red;
	}
	.wdSize{
		font-size: 50px;
	}
	.wd-bg{
		background-color: antiquewhite;
	}
</style>