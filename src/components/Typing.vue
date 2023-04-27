<template>
  <div>
      <input
              :value="name"
              @input="event => name = event.target.value">
      {{name}}
<!--      <input type="text" v-model="name" />-->
  </div>
</template>

<script>
export default {
    data() {
        return{
            name: "Typing"
        }
    }
}
</script>

<style scoped>

</style>