<template>
  {{now}}
  <Hello :class="[{ wdColor: isActive }, errorClass]"></Hello>
</template>

<script>
import Hello from "./Hello.vue";//组件相互引用
export default {
    components: {Hello},
    data(){
        return{
            isActive:true,
            errorClass:'bg_size'
        }
    },
    methods:{

    },
    computed:{
        now(){
            return Date.now()
        }
    }
}
</script>

<style scoped>
  .bg_size{
      font-size: larger;
  }
  .wdColor{
      background-color: red;
  }
  .
</style>