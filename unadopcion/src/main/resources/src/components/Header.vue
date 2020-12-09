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
            <a class="nav-link" href="principal">Principal</a>
          </li>

          <li class="m-md-2" id="btnGoogleLogUser">
            <a class="nav-link" href="http://localhost:8080/autenticar">Iniciar con Google</a>
          </li>

          <li class="m-md-2" id="btnContacto">
            <a class="nav-link" href="contacto">Contactanos</a>
          </li>

          <li class="m-md-2" id="btnVaterinarias">
            <a class="nav-link" href="buscar-veterinaria">Buscar Veterinaria</a>
          </li>
        </ul>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>

  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    nombre: String,
  },
  methods: {
    mimetodo() {},
  },
  data() {
    return {
      showCollapse: false
    }
  },
  watch: {
    '$route' () {
      this.showCollapse = false
    }
  }
};
</script>

<style scoped>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css);


</style>