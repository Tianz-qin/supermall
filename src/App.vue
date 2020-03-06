<template>
  <div id="app">
    <router-view/>
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
