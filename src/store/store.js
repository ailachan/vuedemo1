import { defineStore } from 'pinia'

//使用别的store仓库
import {useOtherStore} from "./store2.js"

// 你可以对 `defineStore()` 的返回值进行任意命名，
//但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
//(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useTestStore = defineStore('test', {
	state:()=>{
		return{
			count:100,
			name: 'Eduardo',
			isAdmin: true,
			items: [],
			hasChanged: true,
			localData:10021
		}
	},
	//getters可以直接理解为计算属性
	getters: {
		double: (state) => state.count * 2,
		// 自动推断出返回类型是一个 number
		doubleCount(state) {
		  return state.count * 2
		},
		// 返回类型**必须**明确设置
		doublePlusOne() {
		  // 整个 store 的 自动补全和类型标注 ✨
		  return this.doubleCount + 1
		},
		otherGetter(state) {
		  const otherStore = useOtherStore() //创建store
		  return state.localData + otherStore.data //直接取值
		}
	},
	actions: {
		increment() {
			this.count++
		},
		randomizeCounter() {
		  this.count = Math.round(100 * Math.random()) //随机生成0-100之间的整数，赋值给count
		},
		fetchUserPreferences(){
			const otherStore = useOtherStore() 
			return this.count + otherStore.getData()
		}
	},
})