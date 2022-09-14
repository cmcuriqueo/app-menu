<script>
	
	import Alerta from './Alerta.vue'
	import Noticias from './Noticias.vue'
	import Resoluciones from './Resoluciones.vue'
	export default {
		name: 'HelloWorld',
		components:{ Alerta, Noticias, Resoluciones }
	}
</script>



<template>
	<div class="container-fluid">
		<div class="row  justify-content-around">
			<div class="col-md-6" style="position: relative;    z-index: 2;">
				<Alerta tipo="info" mensaje="Empleado del ISSyS: No olvide actualizar los datos de contacto del afiliado que esta atendiendo."></Alerta>
			</div>
		</div>
		<div class="row">
			<div class="col" style="margin-top: -50px;    z-index: 1;   margin-bottom: -75px;" >
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

