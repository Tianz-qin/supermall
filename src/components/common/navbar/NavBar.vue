<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"/></div>
    <div class="center">
      <slot name="center"/></div>
    <div class="right">
      <slot name="right"/></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
.nav-bar{
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100,.1);
}
  .right, .left{
    width: 60px;
  }

  .center{
    flex: 1;
  }
</style>
