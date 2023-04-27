import { createStore } from 'vuex'

// 创建一个新的 store 实例
export const store = createStore({
	
	// state我们称之为状态，实际就是需要共享的数据
	state () {
		return {
			msg:"我是vuex中的数据",
			count:100,
			todos: [
				{ id: 1, text: 'hello', done: true },
				{ id: 2, text: 'world', done: false},
				{ id: 3, text: '你好', done: true },
				{ id: 4, text: '哈哈', done: true }
			]
		}
	},
	getters:{
		doneTodos(state) {
		  return state.todos.filter(todo => todo.done)
		},
		doneTodosCount(state,getters){
			return getters.doneTodos.length
		}
	},
	mutations:{
		increment(state) {
		  // 变更状态
		  state.count++
		},
		incrementNum(state,n){ //第二个参数，是其他组件调用传入的载荷参数
			state.count+=n
		}
	},
	actions: {
		//参数context就是store对象
		increment(context) {
			context.commit('increment')
		},
		incrementAsyc(context){
			//添加了一个异步的定时操作，异步操作mutations不支持，actions支持
			setTimeout(()=>{
				context.commit('increment')
			},2000)
		}
	}
})