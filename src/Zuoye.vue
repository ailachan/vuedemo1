<template>
  {{ name }}
  <input v-model="name" type="text" />
  <input type="text" ref="inp" value="1111" />
  <button @click="inClick"></button>

</template>

<script>
export default {
    data() {
        return {
            name: "dddd"
        }
    },
    watch: {
        // 每当 question 改变时，这个函数就会执行
        name(newName, oldName) {
            console.log("new:"+newName);
            console.log("old:"+oldName);
        }
    },
    methods:{
        inClick(){
            let inp = this.$refs.inp;
            console.log(this.$refs.inp);
            alert(inp.value)
        }
    }

}
</script>

<style scoped>

</style>