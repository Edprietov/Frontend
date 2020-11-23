<template>
  <div id="SolicitudMascota">
    <div class="row">
      <div class="col-12">
        <div class="row justify-content-center">
          <div class="col-3"></div>
          <div class="col-6">
            <div class="card" id="card-adopcion">
              <div class="card-header"><strong>Mascota a adoptar</strong></div>
              <div class="card-body text-left">
                <!--IMAGEN-->

                <div class="row">
                  <div class="col-3"><strong>Nombre:</strong></div>
                  <div class="col-9">{{ this.mascota.animNombre }}</div>
                </div>

                <div class="row">
                  <div class="col-3"><strong>Tipo:</strong></div>
                  <div class="col-9">{{ this.mascota.animTipo }}</div>
                </div>

                <div class="row">
                  <div class="col-3"><strong>Edad:</strong></div>
                  <div class="col-9">{{ this.mascota.animEdad }}</div>
                </div>

                <div class="row">
                  <div class="col-3"><strong>Sexo</strong></div>
                  <div class="col-9">{{ this.mascota.animSexo }}</div>
                </div>

                <div class="row">
                  <div class="col-3"><strong>Lugar:</strong></div>
                  <div class="col-9">{{ this.mascota.animLugar }}</div>
                </div>

                <div class="row">
                  <div class="col-3"><strong>Descripcion:</strong></div>
                  <div class="col-9">{{ this.mascota.animDescrip }}</div>
                </div>

                <br />
                <br />
                <div class="row">
                  <div class="col-4"></div>
                  <div class="col-4 text-center">
                    <button class="btn btn-danger" @click="cancelar">
                      No, quiero otra
                    </button>
                  </div>
                  <div class="col-4 text-center">
                    <button class="btn btn-success" @click="aceptar">
                      Sí, deseo adoptar esta
                    </button>
                  </div>
                </div>
              </div>

              <br />
            </div>
          </div>
          <div class="col-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SolicitudServicio from "@/servicio/SolicitudServicio";
import swal from "sweetalert2";
export default {
  data() {
    return {
      mascota: "",
    };
  },
  methods: {
    mostrarFormularioAdopcion() {
      if (
        this.$store.getters.getGoogleId != undefined &&
        this.$store.getters.getMascotaAdopcion != undefined
      ) {
        this.mascota = this.$store.getters.getMascotaAdopcion;
        document.getElementById("card-adopcion").style.display = "block"; //MOSTRAR;
        //document.getElementById("card-adopcion").style.display = "none"; //NO MOSTRAR
      }else{
        document.getElementById("card-adopcion").style.display = "none"; //NO MOSTRAR
      }
    },
    cancelar() {
      this.$store.commit("actualizarMascotaAdopcion", undefined);
      this.$router.push("/buscar-mascota");
    },
    aceptar() {
      SolicitudServicio.RealizarSolicitud(this.mascota.animId, this.$store.getters.getGoogleId)
        .then((respuesta) => {
            if(respuesta.status == 201){
                swal.fire("Solicitud Enviada", "Se ha enviado correctamente la solicitud", "success");
                this.$store.commit("actualizarMascotaAdopcion", undefined);
                this.mostrarFormularioAdopcion();
            }else if(respuesta.status == 200){
                swal.fire("Error", "Ya ha pedido una adopcion a esta mascota o intenta adoptar a su mascota", "error");
                this.$store.commit("actualizarMascotaAdopcion", undefined);
                this.mostrarFormularioAdopcion();
                this.$router.push("/buscar-mascota");
            }
        })
        .catch((error) => {
          console.log(error)
        });
    },
  },
  
  mounted() {
    document.getElementById("card-adopcion").style.display = "none";
    this.mostrarFormularioAdopcion();
    console.log("Componente Solicitud OK.");
  },

};
</script>
<style>
</style>