<template>
    {{new Date()}}
<router-link to="/page1" replace>ddd</router-link><!--替代栈顶页面-->
<router-view name="View1"></router-view>
<router-view name="View2"></router-view>
<router-view name="View3"></router-view>
</template>

<script setup>

</script>

<style scoped>

</style>