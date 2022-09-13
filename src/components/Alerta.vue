
<script>
    export default {
        name: 'AlertaMenu',
        props: {
            mensaje: String, 
            tipo: String 
        }
    }
</script>


<template>
    <div :class="'alert alert-' + tipo" role="alert">
        <div class="row">
            <div class="col">{{ mensaje }}</div>
            <div class="col">
                <button class="btn btn-light btn-sm">
                 Actualización Datos Afiliados
                </button>
            </div>
        </div>
    </div>
</template>