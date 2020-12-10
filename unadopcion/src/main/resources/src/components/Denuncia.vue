<template>
  <div id="denuncia">
    <LoggedHeader></LoggedHeader>

    <br />
    <div class="container">
      <div class="row justify-content-center"></div>
      <div class="card">
        <div class="card-header">
          <div class="text-center"><strong>SECCIÓN DE DENUNCIAS</strong></div>
        </div>
        <div class="card-body">
          <form class="text-left" id="formulario">
            <br />
            <div class="container">
              <p style="text-align: left" class="text-info">
                Seleccione los detalles del tipo de maltrato con el que se
                encuentra relacionada la mascota:
              </p>
            </div>

            <br><div class="form-row">
              <label class="control-label col-sm-2" for="nombreUsuario"
                ><strong>Nombre Usuario a Denunciar:</strong></label
              >
              <div class="col-sm-10">
                <input
                  required
                  type="text"
                  id="nombreUsuario"
                  class="form-control"
                  v-model="nombreUsuario"
                />
              </div>
            </div>

            <br />
            <div class="form-row">
              <strong class="control-label col-sm-2" for="denunTipo"
                >Tipo de Maltrato:</strong
              >
              <div class="col-sm-10">
                <select
                  class="browser-default custom-select"
                  id="denunTipo"
                  v-model="denunTipo"
                  required
                >
                  <option selected></option>
                  <option>Abandono</option>
                  <option>Maltrato Físico</option>
                  <option>Crueldad Animal</option>
                  <option>Envenenamiento</option>
                  <option>Explotación Animal</option>
                  <option>Tráfico Animal</option>
                </select>
              </div>
            </div>

            <br />
            <div class="form-row">
              <strong class="control-label col-sm-2" for="estadofinal"
                >Estado final:</strong
              >
              <div class="col-sm-10">
                <select
                  class="browser-default custom-select"
                  id="estadofinal"
                  v-model="estadofinal"
                  required
                >
                  <option selected></option>
                  <option>Herido</option>
                  <option>Lesión Temporal</option>
                  <option>Lesión Permanente</option>
                  <option>Muerto</option>
                </select>
              </div>
            </div>

            <br />
            <div class="form-row">
              <strong class="control-label col-sm-2" for="testigo"
                >Testigo:</strong
              >
              <div class="col-sm-10">
                <select
                  class="browser-default custom-select"
                  id="testigo"
                  v-model="testigo"
                  required
                >
                  <option selected></option>
                  <option>Presencial</option>
                  <option>Virtual</option>
                  <option>Por un conocido</option>
                  <option></option>
                </select>
              </div>
            </div>

            <br />
            <div class="form-row">
              <label class="control-label col-sm-2" for="detalles"
                ><strong>Detalles:</strong></label
              >
              <div class="col-sm-10">
                <input
                  required
                  type="text"
                  id="detalles"
                  class="form-control"
                  v-model="detalles"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <br /><button class="btn btn-success" @click="formaEnviar">Enviar</button>

    <br><br/><Footer></Footer>
  </div>
</template>

<script>
import Footer from "./Footer";
import LoggedHeader from "@/components/LoggedHeader";
import RegistrarDenunciaServicio from "@/servicio/RegistrarDenunciaServicio";
import swal from "sweetalert2";

export default {
  name: "Denuncia",
  components: {
    LoggedHeader,
    Footer,
  },

  mounted() {
    console.log("Componente Registrar Denuncia OK.");
  },

  data() {
    return {
      nombreUsuario: "",
      animailId: "",
      denunTipo: "",
      estadofinal: "",
      testigo: "",
      denunDescrip: "",
      detalles: "",
    };
  },
  methods: {
    formaEnviar(e) {
      e.preventDefault();
      let objectoActual = this;
      this.denunDescrip =
        "El estado final de la mascota fue " +
        this.estadofinal +
        " y la persona fue testigo " +
        this.testigo;
      let info = {
        nombreUsuario: this.nombreUsuario,
        animailId: this.animailId,
        denunTipo: this.denunTipo,
        denunDescrip: this.denunDescrip,
        detalles: this.detalles,
      };
      console.log(info); this.registrarDenuncia(objectoActual, info);
    },

    registrarDenuncia(objetoActual, info) {
      RegistrarDenunciaServicio.registrarDenuncia(info).then((respuesta) => {
        objetoActual.probar = respuesta.data;
        console.log(respuesta.data);
        if (respuesta.status === 200) {
          swal.fire(
              "Registro exitoso de Denuncia",
              "Gracias",
              "success"
          );
        }
      });
    },
  },
};
</script>


<style>
footer {
  position: absolute;
  bottom: 0.1cm;
  align-self: auto;
}
</style>