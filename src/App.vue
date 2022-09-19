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
    },
    data() {
      return {
        sidelBarStatus: ''
      }
    },
		methods: {
			changeSidelBarStatusMutation: function(newValue){
				console.log( 'newValue ' + newValue)
				this.sidelBarStatus = newValue
				console.log(this.sidelBarStatus)
			}
		},
		mounted() {
			this.$events.$on('sidelBarStatusMutation', eventData  => this.changeSidelBarStatusMutation(eventData ));
		}
  }
  
</script>


<template>
  <div id="app">
    <NavBar v-bind:sidelBarStatus="sidelBarStatus"></NavBar>
    <SidelBar v-bind:sidelBarStatus="sidelBarStatus"></SidelBar>
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