<script>


  import SidelBar from './components/SidelBar.vue'
  import NavBar from './components/NavBar.vue'
  import Footer from './components/Footer.vue'
  
  export default {
    name: 'App',
    components: {
      SidelBar,
      NavBar,
      Footer
    }
  }
  
</script>


<template>
  <div id="app">
    <NavBar></NavBar>
    <SidelBar></SidelBar>
    <Footer></Footer>
  </div>
</template>



<style scoped>
  #app {
    font-family: sans-serif,Arial,Tahoma !important;
    font-size: 11px !important;
    line-height: 1.42857143 !important;
  }
</style>