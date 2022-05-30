<template>
  <MyHeader></MyHeader>
  <router-view></router-view>
</template>

<script>
import MyHeader from "@/components/MyHeader";

export default {
  name: 'App',
  components: {
    MyHeader,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ff0000;
  margin-top: 20px;
}
</style>
