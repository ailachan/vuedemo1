<script setup>
  import Parent from "@/components/Parent.vue";
  import GlobComponent from "@/GlobComponent.vue";
  import PropParent from "@/components/base/PropParent.vue";
  import EventParent from "@/components/base/EventParent.vue";
  import Attr from "@/components/base2/Attr.vue";
  import RequestTest from "@/components/ajaxRequest/RequestTest.vue";
  function onClick(){
      alert("组合式")
  }
  // import ForRender from "@/components/ForRender.vue";
  // import EventExc from "@/components/EventExc.vue";
</script>

<template>
  <Attr style="background-color: red" @click="onClick()"></Attr>
  <Parent></Parent>
  <GlobComponent></GlobComponent>
  <PropParent></PropParent>
  <EventParent></EventParent>
  <RequestTest></RequestTest>
<!--  <EventExc></EventExc>-->
<!--  <ForRender></ForRender>-->
</template>

<style>

</style>
