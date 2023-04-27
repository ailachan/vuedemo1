<template>
    {{formData}}
    {{result}}
  <button @click="submit()">查询</button>
  <button @click="insert()">增加</button>
</template>

<script>
export default {
    data() {
        return {
            formData:[],
            result:[]
        }
    },
    methods:{
        submit(){
            this.$axios.get("api/test/selectAllUser").then(res=>{
                console.log(res.data)
                this.formData = res.data
            })
        },
        insert(){
            this.$axios.post("api/test/insertUser",{
                userId:122,
                name:"ddddd",
                orderId:2
            }).then(res=>{
                this.result = res.data
                console.log(res.data);
            }).catch(e=>{
                console.log(e)
            })
        }
    }
}
</script>

<style scoped>

</style>