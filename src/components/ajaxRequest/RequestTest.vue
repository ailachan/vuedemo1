<template>

</template>

<script>
import axios from "axios"

axios.get('api/test/set')
    .then(function (response) {
        // 处理成功情况
        console.log(response);
    })
    .catch(function (error) {
        // 处理错误情况
        console.log(error);
    })
    .finally(function () {
        // 总是会执行
    });
export default {
    name: "RequestTest"
}
</script>

<style scoped>

</style>