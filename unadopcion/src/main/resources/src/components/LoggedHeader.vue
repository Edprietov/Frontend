<template>

  <div id="Header" class="Header">
    <b-navbar   sticky toggleable="lg"  class="navbar navbar-expand-lg navbar-light bg-light" height="10px">
      <b-navbar-brand to="/" class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" type="button" href="principal">
          <img src="@/assets/UNAdopcion.svg" alt="Logo UNadopcion" height="35" />
        </a>
      </b-navbar-brand>

      <b-navbar-toggle  target="nav-collapse--menu"></b-navbar-toggle>

      <b-collapse id="nav-collapse--menu" v-model="showCollapse" is-nav>
        <b-navbar-nav class="ml-auto custom-dropdown-menus anavbar-light bg-light" id="nav-nav">
        <ul class="navbar-nav ml-md-auto">
          <li class="m-md-2" id="btnPrincipal">
            <a
              class="nav-link"
              v-bind:href="/inicio/ + this.$store.getters.getGoogleId"
              >Inicio</a
            >
          </li>

          <b-nav-item-dropdown id="dropdown-1" text="Mascota" class="m-md-2">
            <b-dropdown-item id="btnRegisPet"  href="/registro-mascota">Registrar mascota</b-dropdown-item>
            <b-dropdown-item  href="/buscar-mascota">Buscar Mascota</b-dropdown-item>
            <b-dropdown-item  href="/mostrar-mascota">Mostar Mascota</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown id="dropdown-2" text="Maltrato" class="m-md-2">
            <b-dropdown-item id="btnDenuncia"  href="/denuncia">Denunciar</b-dropdown-item>
            <b-dropdown-item id="btnConsultarMaltrato" href="/consultar-maltrato">Consultar</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown id="dropdown-2" text="Veterinaria" class="m-md-2">
            <b-dropdown-item id="btnRegistrarVeterinaria"  href="/registro-veterinaria">Registrar</b-dropdown-item>
            <b-dropdown-item id="btnConsultarVeterinaria" href="/consultar-veterinaria">Consultar</b-dropdown-item>
            <b-dropdown-item id="btnBuscarVeterinaria" href="/buscar-veterinaria">Buscar</b-dropdown-item>
          </b-nav-item-dropdown>

          <li  class="m-md-2" href="/solicitud">
            <a class="nav-link">Solicitudes</a>
          </li>

          <li class="m-md-2">
            <a class="nav-link" href="/cuidados">Cuidados</a>
          </li>
          <li class="m-md-2">
            <a class="nav-link" href="/contacto">Contacto</a>
          </li>



          </ul>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "LoggedHeader",
  props: {
    nombre: String,
  },
};
</script>

<style scoped>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css);

</style>