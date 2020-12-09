<template>
  <div>
    <br />
    <div class="form-row">
      <strong class="control-label col-sm-1" for="animalTipo">Vacuna:</strong>
      <div class="col-sm-20">
            <form @click="enviarForma">
             <b></b> <select class="form-control" v-model="vacunaNombre" @change="enCambioVacuna($event)">
                <option disabled value="">Seleccione una vacuna</option>
                <option v-for="valor in servidorVacuna" :key="valor.id">
                {{valor.vacunaId}}   {{ valor.vacunaNombre }} - {{ valor.vacunaClase }} ({{ valor.vacunaTipo }})
                </option>
              </select>

              <!--<b></b> <select class="form-control" v-model="vacunaNombre" @change="enCambioVeterinaria($event)">
              <option disabled value="">Seleccione una vacuna</option>
              <option v-for="valor in servidorVeterinarias" :key="valor.id">
                {{valor.veterinariaId}}   {{ valor.nombre}})
              </option>-->
            </form>

          </div>
        </div>
  </div>
</template>

<script>
import BuscarVacunaServicio from "@/servicio/BuscarVacunaServicio";

export default {
  name: "ConsultarVacuna",
  data() {
    return {
      vacunaId:"",
      vacunaNombre: "",
      servidorVacuna: "",
    };
  },
  methods: {
    enviarForma(e) {
      e.preventDefault();
      let objetoActual = this;
      this.buscarVacuna(objetoActual);
    },

    /*enCambioVeterinaria(event) {
      let objetoActual = this;
      this.veterinariaId = event.target.value;
      this.buscarVeterinarias(objetoActual);
      //alert(event.target.value);
    },*/

    enCambioVacuna(event) {
      let objetoActual = this;
      this.vacunaNombre = event.target.value;
      this.buscarVacuna(objetoActual);
      //alert(event.target.value);
    },

    buscarVacuna(objetoActual) {
      BuscarVacunaServicio.buscarVacunaByNombre(this.vacunaNombre).then((respuesta) => {
        objetoActual.servidorVacuna = respuesta.data;
        console.log(respuesta.data);
      });
    },

  },
  created() {
    //verificar persistencia entre paginas
    BuscarVacunaServicio.buscarVacunaByNombre(this.vacunaNombre)
        .then(respuesta => {
          this.objetoActual.servidorDatos = (respuesta.data);
          console.log(respuesta.data);
        });
  }
}
</script>

<style scoped>

</style>