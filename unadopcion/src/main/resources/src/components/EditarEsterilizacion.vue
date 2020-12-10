<template>
  <div id="EditarEsterilizacion" class="container">
    <div class="col-md-8">
      <div class="card" id="card-editar-esterilizacion">
        <div class="card-header"><b>Ingresa el EStado de esterilización de  <strong>{{animalnombre}}</strong></b></div>
        <div class="card-body ">

          <form @submit="formaEnviar">
            <br />
              <strong>Estado:</strong>
                <select required  class="control-label"  id="animalEsterilizacion" v-model="animalesterilizacion">
                  <option>Esterilizado</option>
                  <option>No Esterilizado</option>
                </select>

            <br><label class="control-label">
              <br><button class="btn btn-success">Enviar</button></label>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert2";
import EditarEsterilizacionServicio from "@/servicio/EditarEsterilizacionServicio";

export default {
  data() {
    return {
      mascota: "",
      animalId: "",
      animalnombre: "",
      animalesterilizacion: "",
    };
  },
  mounted() {
    document.getElementById("card-editar-esterilizacion").style.display = "none";
    this.mostrarDatosMascota();
    console.log("Componente Editar Esterilizacion de Mascota OK.");
  },
  methods: {

    mostrarDatosMascota() {
      if (
          this.$store.getters.getGoogleId != undefined &&
          this.$store.getters.getMascotaAdopcion != undefined
      ) {
        this.mascota = this.$store.getters.getMascotaAdopcion;
        this.animalId = this.mascota.animId;
        this.animalnombre = this.mascota.animNombre;
        this.animalesterilizacion = this.mascota.animEsterilizacion;
        document.getElementById("card-editar-esterilizacion").style.display = "block";
      }else{
        document.getElementById("card-editar-esterilizacion").style.display = "none";
      }
    },

    formaEnviar(e) {
      e.preventDefault();
      let info = {
        animalId: this.mascota.animId,
        mascota: this.$store.getters.getMascotaAdopcion,
        animalesterilizacion: this.animalesterilizacion,
      };
      this.editarEsterilizacion(info);
    },

    editarEsterilizacion(info) {
      EditarEsterilizacionServicio.editarEsterilizacion(info)
          .then((respuesta) => {
            if (respuesta.status === 200)
              swal.fire("Actualización existosa", "Tus datos han sido actualizados", "success");
            this.$router.push("/mostrar-mascota");
          })
          .catch((error) => {

            swal.fire("Intente nuevamente", error.message, "error");

          });
    },

  },

  name: "EditarEsterilizacion"
}
</script>

<style scoped>
#MicrochipID{
  position: center;
}
</style>