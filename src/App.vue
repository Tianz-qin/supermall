<template>
  <div id="app">
<!--   主要用于保留组件状态或避免重新渲染。-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tarbar/>
  </div>
</template>

<script>
  import mainTarbar from "./components/content/mainTarbar/mainTarbar";

export default {
  name: 'App',
  components: {
    mainTarbar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
