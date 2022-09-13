<script>
    export default {
      name: 'NavBar'
    }
</script>
    

<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="padding: 0rem;">
  <a class="navbar-brand" href="#" style="padding-top: 0rem;padding-bottom: 0rem;margin-right: 0rem;">
                
    <img src="./../assets/issys.jpg" class="img-resposive">

  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">IP 192.168.0.1</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Correo <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sitio Web</a>
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
    <button type="button" id="sidebarCollapse" class="btn btn-info">
        <i class="fas fa-align-left"></i>
        <span>Toggle Sidebar</span>
    </button>
  </div>
</nav>
</template>