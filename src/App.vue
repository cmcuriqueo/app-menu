<script>


  import SidelBar from './components/SidelBar.vue'
  import NavBar from './components/NavBar.vue'
  
  export default {
    name: 'App',
    components: {
      SidelBar,
      NavBar
    }
  }
  
</script>


<template>
  <div id="app">
    <NavBar></NavBar>
    <SidelBar></SidelBar>
  </div>
</template>



<style scoped>
  #app {
    font-family: sans-serif,Arial,Tahoma !important;
    font-size: 11px !important;
    line-height: 1.42857143 !important;
  }
</style>