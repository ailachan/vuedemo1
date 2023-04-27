<template>
	<div style="border:2px solid green"> 
		
		<!-- 
			v-model双向绑定
			跟value属性关联
		 -->
		<p>{{msg}}</p>
		<input type="text" v-model="msg" />
		
		<!-- 
			单选的绑定
			v-model value属性关联
		 -->
		<br />
		<input type="radio" name="sex" value="男"  v-model="sex"/><label>男</label><br>
		<input type="radio" name="sex" value="女"  v-model="sex"/><label>女</label>
		<p>sex:{{sex}}</p>
		
		<!-- 
			多选框绑定
			v-model checked属性关联
		 -->
		<input type="checkbox" v-model="checked" /><label>多选框</label>
		<p>{{checked}}</p>
		
		<!-- textarea多行文本 -->
		<span>多行文本:</span>
		<p style="white-space: pre-line;">{{ msg }}</p>
		<textarea v-model="msg" ></textarea>
		
		<!-- 
		 select选择器：
			v-model实际上绑定的也是select的value
		 -->
		 <div>Selected: {{ selected }}</div>
		 <select v-model="selected">
		   <option value="A">A</option>
		   <option value="B">B</option>
		   <option value="C">C</option>
		   <option value="D">D</option>
		 </select>
		 
		 <!-- 多选-->
		<div>Selected: {{ selected2 }}</div>
		<select v-model="selected2" multiple>
		  <option>A</option>
		  <option>B</option>
		  <option>C</option>
		</select>
		
		<!-- 
		 v-model的三个修饰符
			.lazy
			.number
			.trim 去除前后空白
		 -->
		<p>{{msg}}</p>
		<input type="text" v-model.lazy="msg" />
		
		<p>num的类型为：{{typeof num}}</p>
		<input type="text" v-model.number="num" />
		
		<p>前{{msg}}后</p>
		<input type="text" v-model.trim="msg" />
		
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				msg:"hello world",
				sex:"男",
				checked:true,
				selected:"B",
				selected2:["B"],
				num:100
			}
		}
	}
</script>

<style>
</style>