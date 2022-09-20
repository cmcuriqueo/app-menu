
<script>
    export default {
        name: 'ResolucionesCs'
    }
</script>

<template>
<div>
    <div class="row" style="padding-left: 15px;">
        <h5 style="z-index:3; color:#59789D">Resoluciones</h5>
    </div>
    <div class="card" style="z-index: 3">
    
    <div class="card-body">
        <div class="table-responsive-md">
            <table class="table">
                <thead>
                    <tr class="bg-primary text-light">
                    <th scope="col">NUMERO</th>
                    <th scope="col">DESCRIPCION</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2058/2022</td>
                        <td>RES. DE DIRECTORIO NRO.002058-2022 MODIFICAR LOS ARANCELES DE PRESTACIONES DE RADIOTERAPIA, MEDICINA NUCLEAR Y ONCOLOGIA, INCREMENTANDO SUS ARANCELES ...</td>
                        <td><button class="btn btn-light btn-sm">Ver</button></td>
                    </tr>
                    <tr>
                        <td>1800/2022</td>
                        <td>RES DE DIRECTORIO NRO.001800-2022 RATIFICAR ARANCELES DERMATOSCOPIA DIGITAL CORPORAL TOTAL, MODULO FOTOTERAPIA UVB AMBULATORIA POR SESION - APROBAR NO...</td>
                        <td><button class="btn btn-light btn-sm">Ver</button></td>
                    </tr>
                    <tr>
                        <td>1799/2022</td>
                        <td>RES. DE DIRECTORIO NRO.001799-2022 RATIFICAR RECONOCIMIENTO DEL CONTROL DE TRABAJO DE PARTO PARA OBSTETRICAS CONTRATADAS CODIGOS 494138 Y 494139 - MOD...</td>
                        <td><button class="btn btn-light btn-sm">Ver</button></td>
                    </tr>
                    <tr>
                        <td>1693/2022</td>
                        <td>RES. DE DIRECTORIO NRO.001693-2022 APROBAR REGLAMENTACION DEL ART.9 DE LA LEY XVIII NRO.12 - REQUISITOS AFILIACION DIRECTOS E INDIRECTOS.</td>
                        <td><button class="btn btn-light btn-sm">Ver</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
</div>
</template>


<style scoped>

    .heading-var-1{
        position: relative;
    }
    .heading-var-1 h5 {
        display: inline-block;
        position: relative;
        z-index: 1;
    }
    tr.bg-primary {
        background-color:#1c4f88!important;
        font-size: 12px;
    }
    .btn-sm {
        font-size: 12px;
    }

    .btn-light  {
        color: #333;
        background-color: #f0f0f0;
        border-color: #d7d7d7;
    }
</style>