<template>
  <div id="registro-veterinaria"><LoggedHeader></LoggedHeader>

    <br><br><br><br>
    <div class="row">
      <div class="col-md-12">
        <div row>
          <div class="col-md-1"></div>
          <div class="align-content-lg-center-md-8">
            <h1>Registro Centro Veterinario</h1>
          </div>
        </div>

        <br><br><br><br>

        <div class="row">
          <div class="col-sm-2"></div>
          <form class="col-sm-10">
            <div class="row">
              <div class="col-sm-2">
                <label>Nombre:</label>
              </div>
              <div class="col-sm-7">
                <input type="text" class="form-control" placeholder="Ingresa nombre veterinaria" v-model="nombre">
              </div>
            </div>

            <br><br>

            <div class="row">
              <div class="col-sm-2">
                <label>Latitud:</label>
              </div>
              <div class="col-sm-2">
                <input type="number" class="form-control" placeholder="Digite latitud" v-model="latitud">
              </div>
              <div class="col-sm-1"></div>
              <div class="col-sm-2">
                <label>Latitud:</label>
              </div>
              <div class="col-sm-2">
                <input type="number" class="form-control" placeholder="Digite longitud" v-model="longitud">
              </div>
            </div>


            <br><br>

            <div class="row">
              <div class="col-sm-2">
                <label>Direccion:</label>
              </div>
              <div class="col-sm-7">
                <input type="text" class="form-control" placeholder="Ingresa direccion" v-model="direccion">
              </div>
            </div>

            <br><br>

            <div class="row">
              <div class="col-sm-2">
                <label>Numero:</label>
              </div>
              <div class="col-sm-7">
                <input type="tel" class="form-control" placeholder="Digite numero celular o fijo" v-model="numero">
              </div>
            </div>

            <br><br>

            <div class="row">
              <div class="col-sm-2">
                <label>Sitio Web:</label>
              </div>
              <div class="col-sm-7">
                <input type="url" class="form-control" placeholder="Ingresa direccion pagina web" v-model="sitioWeb">
              </div>
            </div>

            <br><br>

            <div class="row">
              <div class="col-sm-2">
                <label>Descripcion:</label>
              </div>
              <div class="col-sm-7">
                <textarea type="text" class="form-control " rows="3" placeholder="Ingresa descripcion" v-model="descripcion"></textarea>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-5"></div>
              <div class="col-sm-4">
                <button type="button" class="btn btn-outline-success" @click="formaEnviar">Enviar</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
    <br><br>
    <Footer></Footer>
  </div>

</template>

<script>
import LoggedHeader from "@/components/LoggedHeader";
import Footer from "@/components/Footer";
import RegistrarVeterinariaServicio from "@/servicio/RegistrarVeterinariaServicio";
import swal from "sweetalert2";
export default {
  name: "RegistroVeterinaria",
  components: {LoggedHeader, Footer},

  mounted() {
    console.log('Componente Registrar Calificacion Usuario OK.')
  },

  data() {
    return {

      nombre: '',
      latitud: '',
      longitud: '',
      direccion: '',
      numero: '',
      sitioWeb: '',
      descripcion: '',

    }
  },

  methods: {
    formaEnviar(e) {
      e.preventDefault();
      let objectoActual = this;
      let info = {
        nombre: this.nombre,
        latitud: this.latitud,
        longitud: this.longitud,
        direccion: this.direccion,
        numero: this.numero,
        sitioWeb: this.sitioWeb,
        descripcion: this.descripcion,
      }
      console.log(info),
          this.registrarVeterinaria(objectoActual, info);
    },

    registrarVeterinaria: function (objetoActual, info) {
      RegistrarVeterinariaServicio.registrarVeterinaria(info)
          .then(respuesta => {
                objetoActual.probar = (respuesta.data);
                console.log(respuesta.data);
                if (respuesta.status === 200) {
                  swal.fire(
                      "Se realizo el registro de la veterinaria exitosamente",
                      "Gracias por su contribución",
                      "success"
                  );
                }
              }
          );

    },
  }
}
</script>

<style>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css);
body{
  color: blueviolet;
}



</style>