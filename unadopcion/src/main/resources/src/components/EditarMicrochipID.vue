<template>
  <div id="MicrochipID" class="container">
    <div class="col-md-8">
      <div class="card" id="card-editar-microchip">
        <div class="card-header"><b>Ingresa el numero de identificación de <strong>{{animalnombre}}</strong></b></div>
        <div class="card-body ">

          <form @submit="formaEnviar">
            <strong class="text">Microchip ID: </strong>
            <label class="control-label">
              <input type="number" min="0" class="control-label col-sm-10" v-model="animalmicrochipid"></label>
            <label class="control-label">
              <br><button class="btn btn-success">Enviar</button></label>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert2";
import EditarMicrochipServicio from "@/servicio/EditarMicrochipServicio";

export default {
  data() {
    return {
      mascota: "",
      animalId: "",
      animalnombre: "",
      animalmicrochipid: "",
    };
  },
  mounted() {
    document.getElementById("card-editar-microchip").style.display = "none";
    this.mostrarDatosMascota();
    console.log("Componente Editar MicrochipID de Mascota OK.");
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
        this.animalmicrochipid = this.mascota.animMicrochipId;
        document.getElementById("card-editar-microchip").style.display = "block";
      }else{
        document.getElementById("card-editar-microchip").style.display = "none";
      }
    },

    formaEnviar(e) {
      e.preventDefault();
      //diccionario para ser convertido en JSON
      let info = {
        animalId: this.mascota.animId,
        mascota: this.$store.getters.getMascotaAdopcion,
        animalmicrochipid: this.animalmicrochipid,
      };
      this.editarMicrochip(info);
    },

    editarMicrochip(info) {
      EditarMicrochipServicio.editarMicrochipID(info)
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

  name: "EditarMicrochipID"
}
</script>

<style scoped>
#MicrochipID{
  position: center;
}
</style>