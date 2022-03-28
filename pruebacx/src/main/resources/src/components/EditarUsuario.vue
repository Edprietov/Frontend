<template>
  <div id="" >


    <br>
    <div class="row justify-content-center" >
      <div class="col-7">
        <!-- primer carta-->
        <div class="col-10" >
          <div class="card" >
            <div class="card-header">
              <b>Manten tus datos al día!</b>
            </div>


            <div class="card-body ">
              <form class="text-right" id="formulario" @submit="formaEnviar">

                <div class="form-row">
                  <label class="control-label col-sm-2" ><strong>Teléfono:</strong></label>
                  <div class="col-sm-10">
                    <input  required type="text"  class="form-control"  v-model="usuarioTelefono">
                  </div>
                </div>

                <div class="form-row">
                <label class="control-label col-sm-2" ><strong>Dirección:</strong></label>
                <div class="col-sm-10">
                  <input  required type="text"  class="form-control"  v-model="usuarioLugar">
                </div>
              </div>

                <br><div class="form-row">
                <br><strong class="control-label row-cols-md-2">Algo sobre Ti:<br></strong>
                <textarea rows="5" cols="50" type="text" class="control-label row-cols-sm-5"  v-model="usuarioInfo"></textarea>
              </div>

               <!-- <img class="img-fluid" v-if="this.$store.getters.getFotoFuturoAdoptado !== ''" v-bind:src="'data:image;base64,'+ this.$store.getters.getFotoFuturoAdoptado">-->

                <br>
                <br><button  class="btn btn-success">Enviar</button>

              </form>

            </div>
          </div>
        </div>
      </div>



  </div>


  </div>
</template>

<script>

import EditarUsuario from "../servicio/EditarUsuarioServicio";
import MostarPerfilServicio from "@/servicio/MostarPerfilServicio";
import swal from "sweetalert2";


export default {
  data() {
    return {

      usuarioTelefono: "",
      usuarioLugar: "",
      usuarioInfo: "",
      googleId:"",
      datosServidor: ""
    };
  },
  mounted() {
    console.log("Componente Editar usuario OK.");
  },
  methods: {

    formaEnviar(e) {
      e.preventDefault();
      //diccionario para ser convertido en JSON
      let info = {
        googleId: this.$store.getters.getGoogleId,
        telefono: this.usuarioTelefono,
        lugar: this.usuarioLugar,
        info: this.usuarioInfo,
      };
      this.editarUsuario(info);
    },

    editarUsuario(info) {
      EditarUsuario.editarUsuario(info)
        .then((respuesta) => {
          if (respuesta.status === 200)
            swal.fire("Actualización existosa", "Tus datos han sido actualizados", "success");
        })
        .catch((error) => {

            swal.fire("Intente nuevamente", error.message, "error");

        });
    },

    cargarPerfil(googleId){
      MostarPerfilServicio.mostrarPerfil(googleId)
          .then((respuesta) => {
            if (respuesta.status === 200)
              console.log(respuesta.data);
              this.datosServidor = respuesta.data;
            //forma reactiva de popular los datos en editar usuario
              this.usuarioInfo = this.datosServidor.usuarioInfo;
              this.usuarioLugar = this.datosServidor.usuarioLugar;
              this.usuarioTelefono = this.datosServidor.usuarioTelefono;

          })
          .catch((error) => {

               alert("Pailander " + error.message)

          });
    }

  },

  created() {
    //cargar datos del usuario
    this.cargarPerfil(this.$store.getters.getGoogleId);
  },
  name: "EditarUsuario",
  components: {

  },
};
</script>

<style scoped>
img{
  position: relative;
  width: 20%;
  hight: 20%;
  left:0%;
}
</style>