import { defineStore } from 'pinia'

export const useOtherStore  = defineStore("other",{
	state:()=>{
		return{
			data:10086
		}
	},
	actions:{
		getData(){
			return Math.round(this.data/25)
		}
	}
	
})