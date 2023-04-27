<template>
	<div style="border: 1px solid black;">
		<!-- 内联事件处理器 ：
			直接在绑定中使用js代码
		 -->
		<button @click="count++">Add 1</button>
		<p>Count is: {{ count }}</p>
		
		<!-- 
			或者关联方法调用
		 -->
		 <!-- `greet` 是上面定义过的方法名 -->
		 <button @click="greet">Greet</button>
		 
		 <!-- 
		 在内联事件处理器中访问事件参数 ：
			当发生一个事件后，比如点击，双击，按钮等等，这些信息
			原生的Dom，会将其封装成一个event事件对象，这个对象是可以
			传入我们的js响应函数的
			如果函数只有一个参数，可以直接接收，方法调用时甚至都不需要传，比如上面的例子
			
			如果函数有多个参数，这时需要指定传入
		 -->
			<!-- 使用特殊的 $event 变量 -->
			<button @click="warn('Form cannot be submitted yet.', $event)">
			  Submit
			</button>
			
			<!-- 使用内联箭头函数 -->
			<button @click="(event) => warn('Form cannot be submitted yet.', event)">
			  Submit
			</button>
		
		<!-- 
			事件修饰符
		 -->
		 <!-- 单击事件将停止传递（阻止事件由内而外的冒泡） -->
		 <div @click="doDiv">
			<button @click.stop="doBtn">点击触发</button>
		 </div>
		 <!-- 提交事件将不再重新加载页面 （阻止默认事件）-->
		 <form @submit.prevent="onSubmit">
			 <input type="submit" value="提交" />
		 </form>
		 
		 <!-- 修饰语可以使用链式书写 -->
		 <a @click.stop.prevent="doThat"></a>
		 
		 <!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
		 <!-- 例如：事件处理器不来自子元素 -->
		 <div @click.self="doThat"></div>
		 
		 <!-- 添加事件监听器时，使用 `capture` 捕获模式 -->
		 <!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 -->
		 <div @click.capture="doThis">...</div>
		 
		 <!-- 点击事件最多被触发一次 -->
		 <a @click.once="doThis"></a>
		 
		 <!-- 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成 -->
		 <!-- 以防其中包含 `event.preventDefault()` -->
		 <div @scroll.passive="onScroll">...</div>
		
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				count: 0,
				name:"张三"
			}
		},
		methods:{
			greet(event){
				 // 方法中的 `this` 指向当前活跃的组件实例
				alert(`Hello ${this.name}!`)
				// `event` 是 DOM 原生事件，可以默认通过方法传入
				if (event) {
				  alert(event.target.tagName)
				}
			},
			warn(str,ev){
				alert(str)
				if (event) {
				  alert(event.target.tagName)
				}
			},
			doBtn(){
				alert("按钮被点击")
			},
			doDiv(){
				alert("div被点击")
			}
			
		}
		
	} 
	
</script>

<style>
</style>