<script>
	
	import Alerta from './Alerta.vue'
	import Resoluciones from './Resoluciones.vue'
	import Noticias from './Noticias.vue'
	export default {
		name: 'HelloWorld',
		components:{ Alerta,  Resoluciones, Noticias }
		
	}
</script>



<template>
	<div class="container-fluid">
		<div class="row  justify-content-around">
			<div class="col-md-8" style="position: relative;    z-index: 2;">
				<Alerta tipo="info" mensaje="Empleado del ISSyS: No olvide actualizar los datos de contacto del afiliado que esta atendiendo."></Alerta>
			</div>
		</div>
		<div class="row">
			<div class="col" style="margin-top: -15px;    z-index: 1;   margin-bottom: -75px;" >
				<Noticias></Noticias>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<Resoluciones></Resoluciones>
			</div>
		</div>
	</div>
</template>

