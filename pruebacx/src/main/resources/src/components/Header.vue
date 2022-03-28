<template>
  <div class="Header">
    <!--Header-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="principal">
        <img src="@/assets/imagine.jpg" alt="Logo UNadopcion" height="40" />
      <a class="navbar-brand" href="principal">Imagine CX</a>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-md-auto">
          <li class="nav-item" id="btnPrincipal">
            <a class="nav-link" href="principal">Principal</a>
          </li>

          <li class="nav-item" id="btnGoogleLogUser">
            <a class="nav-link" href="http://34.123.151.81:8080/autenticar"
              >Iniciar con Google</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contacto">Contactanos</a>
          </li>

          <li class="nav-item" id="btnPrincipal">
            <a class="nav-link" href="buscar-veterinaria">Buscar Veterinaria</a>
          </li>
        </ul>
      </div>
    </nav>
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
};
</script>

