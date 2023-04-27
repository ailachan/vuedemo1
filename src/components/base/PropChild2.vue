<template>
	<h1>{{propA}}</h1>
	<h1>{{propB}}</h1>
	<h1>{{propC}}</h1>
	<h1>{{propD}}</h1>
	<h1>{{propE}}</h1>
	<h1>{{propF}}</h1>
	<h1>{{propG()}}</h1>
</template>

<script>
	export default{
		props: {
		    // 基础类型检查
		    //（给出 `null` 和 `undefined` 值则会跳过任何类型检查）
		    propA: Number,
		    // 多种可能的类型
		    propB: [String, Number],
		    // 必传，且为 String 类型
		    propC: {
		      type: String,
		      required: true
		    },
		    // Number 类型的默认值
		    propD: {
		      type: Number,
		      default: 100
		    },
		    // 对象类型的默认值
		    propE: {
		      type: Object,
		      // 对象或者数组应当用工厂函数返回。
		      // 工厂函数会收到组件所接收的原始 props
		      // 作为参数
		      default(rawProps) {
		        return { message: 'hello' }
		      }
		    },
		    // 自定义类型校验函数
		    propF: {
		      validator(value) {
		        // The value must match one of these strings
		        return ['success', 'warning', 'danger'].includes(value)
		      }
		    },
		    // 函数类型的默认值
		    propG: {
		      type: Function,
		      // 不像对象或数组的默认，这不是一个
		      // 工厂函数。这会是一个用来作为默认值的函数
		      default() {
		        return 'Default function'
		      }
		    }
		  }
	}
</script>

<style>
</style>