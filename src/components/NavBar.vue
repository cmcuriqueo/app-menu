<script>
    export default {
      name: 'NavBar',
      props:['sidelBarStatus'],
      methods: {
        changeStatus() {
          let newValue = this.sidelBarStatus == 'active' ? '' : 'active'

          console.log( this.sidelBarStatus == 'active'  )
          this.$events.fire('sidelBarStatusMutation', newValue )
        }
      }
    }
</script>
    

<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="padding: 0rem;">
      
    <button type="button"  id="sliderBarButtonAction" class="btn btn-default" @click="changeStatus()">
        <i class="fas fa-align-left"></i>
        <span><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></span>
    </button>
  <a class="navbar-brand" href="#" style="padding-top: 0rem;padding-bottom: 0rem;margin-right: 0rem;">
                
    <img src="./../assets/issys.jpg" class="img-resposive">

  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#" ><span class="badge badge-primary text-light" style="font-size: 0.65rem;"> <font-awesome-icon icon="fa-solid fa-network-wired" /> IP 192.168.0.1</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#"><font-awesome-icon icon="fa-solid fa-envelope" /> Correo <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><font-awesome-icon icon="fa-solid fa-globe" /> Sitio Web</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
            CURIQUEO CESAR MATIAS (cmcuriqueo)
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Actualizar Datos Personales</a>
          <a class="dropdown-item" href="#">Cambiar Clave</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Salir</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</template>

<style scoped>
  .dropdown-menu {
    font-size: 12px;
  }
  .badge.badge-primary{
    background-color:  #1c4f88;
  }

  @media (min-width: 769px) {
    #sliderBarButtonAction {
        display: none;
    }
  }
</style>