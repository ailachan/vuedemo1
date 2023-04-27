<template>
  {{name}}
</template>

<script>


export default {
    data(){
        return{
            name:this.$store.state.msg
        }
    }
}
</script>

<style scoped>

</style>