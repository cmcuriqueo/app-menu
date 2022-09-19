
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
            <div class="col-md-8">{{ mensaje }}</div>
            <div class="col">
                <button class="btn btn-primary btn-sm">
                    <font-awesome-icon icon="fa-solid fa-user" /> Actualización Datos Afiliados
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
 .btn.btn-primary{
    background-color: #1c4f88;
    font-size: 12px;
 }
</style>