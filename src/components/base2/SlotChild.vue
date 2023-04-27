<template>
	<!-- 基本用法 -->
	<!-- 插槽，由父组件传递内容-->
	<!-- <button>
		<slot></slot> 
	</button> -->
	
	<!-- 在这个位置可以添加插槽的默认内容 -->
	<!-- <div>
		<slot>
			
			<h1>我是默认内容</h1>
		</slot>
	</div> -->
	
	<!-- 具名插槽 -->
	<div class="container">
	  <header>
	    <slot name="header"></slot>
	  </header>
	  <main>
	    <slot name="main"></slot>
	  </main>
	  <footer>
	    <slot name="footer"></slot>
	  </footer>
	</div>
	
	<!-- 作用域插槽 ：
		可以将子组件中的数据，传递给父组件中插入的内容
	 -->
	 <div>
		 <slot :text="msg" :num="100"></slot>
	 </div>
	 
	 <!-- 具名作用域插槽 -->
	<div>
		<slot name="test" :text="msg" :num="100"></slot>
	</div>
	
	
</template>

<script>
	export default{
		data(){
			return{
				msg:"子组件传递的数据"
			}
		}
	}
</script>

<style>
</style>