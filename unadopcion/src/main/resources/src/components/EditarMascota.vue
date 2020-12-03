<template>
  <div id="" >


    <br>
    <div class="row justify-content-center" >
      <div class="col-7">
        <!-- primer carta-->
        <div class="col-10" >
          <div class="card" >
            <div class="card-header">
              <b>Edita los datos de tu mascota</b>
            </div>
            <div class="card-body ">
              <form class="text-right" id="formulario" @submit="formaEnviar">


                    <div class="form-row">
                      <label class="control-label col-sm-2" ><strong>Animal ID:</strong></label>
                      <div class="col-sm-10">
                        <input  required type="text"  class="form-control"  v-model="animalId">
                      </div>
                    </div>

                <br/><div class="form-row">
                  <label class="control-label col-sm-2" ><strong>Nombre:</strong></label>
                  <div class="col-sm-10">
                    <input  required type="text"  class="form-control"  v-model="animalnombre">
                  </div>
                </div>

                <br />
                <div class="form-row">
                  <strong class="control-label col-sm-2" for="animalTipo"
                  >Especie:</strong
                  >
                  <div class="col-sm-20">
                    <select
                        required
                        class="form-control"
                        id="animalTipo"
                        v-model="animaltipo"
                    >
                      <option>Perro</option>
                      <option>Gato</option>
                      <option>Ave</option>
                      <option>Roedor</option>
                      <option>Bestia</option>
                      <option>Pez</option>
                      <option>Reptil</option>
                      <option>Otro</option>
                    </select>
                  </div>
                </div>

                <br />
                <div class="form-row">
                  <strong class="control-label col-sm-2" for="animalSexo"
                  >Sexo:</strong
                  >
                  <div class="col-sm-20">
                    <select
                        required
                        class="form-control"
                        id="animalSexo"
                        v-model="animalsexo"
                    >
                      <option>Hembra</option>
                      <option>Macho</option>
                    </select>
                  </div>
                </div>


                <br />
                <div class="form-row">
                  <label class="control-label col-sm-2" for="animalEdad"
                  ><strong>Edad:</strong></label
                  >
                  <div class="col-sm-20">
                    <input
                        required
                        type="number"
                        id="animalEdad"
                        class="form-control"
                        v-model="animaledad"
                    />
                  </div>
                </div>

                <br/><div class="form-row">
                  <label class="control-label col-sm-2" ><strong>Lugar:</strong></label>
                  <div class="col-sm-10">
                    <input  required type="text"  class="form-control"  v-model="animallugar">
                  </div>
                </div>

                <br/><div class="form-row">
                <label class="control-label col-sm-2" for="animalMicrochipId"
                ><strong>Microchip ID:</strong></label
                >
                <div class="col-sm-20">
                  <input
                      type="text"
                      id="animalMicrochipId"
                      class="form-control"
                      v-model="animalmicrochipid"
                  />
                </div>
              </div>

                <br />
                <div class="form-row">
                  <strong class="control-label col-sm-2" for="animalEsterilizacion"
                  >Esterilizacion:</strong
                  >
                  <div class="col-sm-20">
                    <select
                        required
                        class="form-control"
                        id="animalEsterilizacion"
                        v-model="animalesterilizacion"
                    >
                      <option>Esterilizado</option>
                      <option>No Esterilizado</option>
                    </select>
                  </div>
                </div>


                <br><div class="form-row">
                <br><strong class="control-label row-cols-md-2">Descripcion:<br></strong>
                <textarea rows="5" cols="50" type="text" class="control-label row-cols-sm-5"  v-model="animaldescripcion"></textarea>
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


import swal from "sweetalert2";
import EditarMascotaServicio from "@/servicio/EditarMascotaServicio";
//import MostrarMascotaServicio from "@/servicio/MostrarMascotaServicio";


export default {
  data() {
    return {

      animalId: 4,
      animalnombre: "",
      animaltipo: "",
      animallugar: "",
      animalsexo: "",
      animaledad: "",
      animaldescripcion: "",
      animalmicrochipid: "",
      animalesterilizacion:"",
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
        animalId: 4,
        nombreusuario: this.nombreusuario,
        animalnombre: this.animalnombre,
        animaltipo: this.animaltipo,
        animallugar: this.animallugar,
        animalsexo: this.animalsexo,
        animaledad: this.animaledad,
        animaldescripcion: this.animaldescripcion,
        animalmicrochipid: this.animalmicrochipid,
        animalesterilizacion: this.animalesterilizacion,
      };
      this.editarMascota(info);
    },

    editarMascota(info) {
      EditarMascotaServicio.editarMascota(info)
          .then((respuesta) => {
            if (respuesta.status === 200)
              swal.fire("Actualización existosa", "Tus datos han sido actualizados", "success");
          })
          .catch((error) => {

            swal.fire("Intente nuevamente", error.message, "error");

          });
    },

    /*mostarMascota(animalId){
      MostrarMascotaServicio.mostarMascota(animalId)
          .then((respuesta) => {
            if (respuesta.status === 200)
              console.log(respuesta.data);
            this.datosServidor = respuesta.data;
            //forma reactiva de popular los datos en editar usuario
            this.animalnombre = this.datosServidor.animalnombre;
            this.animaltipo = this.datosServidor.animaltipo;
            this.animalsexo = this.datosServidor.animalsexo;
            this.animaledad = this.datosServidor.animaledad;
            this.animallugar = this.datosServidor.animallugar;
            this.animalmicrochipid = this.datosServidor.animalmicrochipid;
            this.animalesterilizacion = this.datosServidor.animalesterilizacion;
          })
          .catch((error) => {

            alert("Pailander " + error.message)

          });
    }

  },

  created() {
    //cargar datos del usuario
    this.mostarMascota(4);
  },*/
    name: "EditarUsuario",
    components: {}
  }
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