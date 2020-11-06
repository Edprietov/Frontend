<template>
  <div id="logeo">
    <LoggedHeader></LoggedHeader>
    <br /><br />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              <b>¡Estás a un paso!</b>
            </div>

            <div class="container">
                <h1>Adoptar a "nombre"</h1>
                <img src="@/assets/Dog.jpg" alt="Perro" width="100"> <br> <br>
                <form>
                    <div class="row">
                        <div class="col-4">
                            <strong>ID</strong>
                        </div>
                        <div class="col-8">
                            <input required type="number" class="form-control" v-model="IdMasc" />
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col-4">
                            <strong>Nombre de la mascota</strong>
                        </div>
                        <div class="col-8">
                            <input required type="text" class="form-control" v-model="nombreMasc" />
                        </div>
                    </div>
                </form> <br> <br>
                <div class="row">
                    <div class="col-8">
                        <div class="text-right">
                            <button class="btn btn-primary" @click="enviarDatos">Verificar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <h1>Datos del adoptante</h1>
              <form @submit="enviarDatos">
                <br />
                <div class="row">
                  <div class="col-4">
                    <strong>Nombre de usuario:</strong>
                  </div>
                  <div class="col-8">
                    <input required type="text" class="form-control" v-model="nombreU" />
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-4">
                    <strong>Telefono</strong>
                  </div>
                  <div class="col-8">
                    <input required type="number" class="form-control" v-model="telefono" />
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-4">
                    <strong>Dirección</strong>
                  </div>
                  <div class="col-8">
                    <input required type="number" class="form-control" v-model="direccion" />
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-4">
                    <strong>Correo electrónico</strong>
                  </div>
                  <div class="col-8">
                    <input required type="email" class="form-control" v-model="email" />
                  </div>
                </div>


              </form>

              <br />

              <div class="row">
                <div class="col-8">
                  <div class="text-right">
                    <button class="btn btn-success" @click="enviarDatos">¡Adoptar!</button>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <strong>Una mascota feliz, es una familia feliz.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /><br />
    <Footer></Footer>
  </div>
</template>

<script>
import swal from "sweetalert2";
import LoggedHeader from "@/components/LoggedHeader";
import Footer from "../components/Footer";
import RealizarLogeoServicio from "../servicio/RealizarLogeoServicio";

export default {
  methods: {
    enviarDatos(e) {
      e.preventDefault();
      let objectoActual = this;
     // para ser convertido en JSON
      let info = {
        nombre: this.nombre,
        contrasena: this.contrasena,
      };

      this.hacerLogeo(objectoActual, info);
    },
    
    hacerLogeo(objetoActual, datos) {
      RealizarLogeoServicio.hacerLogeo(datos).then((respuesta) => {
        //objetoActual.probar = respuesta.data;
        console.log(respuesta.status);
        if (respuesta.status === 200){
          this.$router.push('inicio');//redireccionar a principal

        }
      }).catch(error =>{// hay un error
        if (error.response.status === 401){
          this.mostrarLogeoFallido("Las credenciales no coinciden");//credenciales erroneas
        }else if(error.response.status === 404){
          this.mostrarLogeoFallido("No se encuentran mascotas con este ID");//no existe id
        }else{
          this.mostrarLogeoFallido("Error de red");
        }
      });
    },
    
    mostrarLogeoFallido(mensaje) {
      swal.fire("Intenta nuevamente", mensaje, "error");
    },
  },
  name: "Logeo",
  components: {
    LoggedHeader,
    Footer,
  },
  data() {
    return {
      nombre: "",
      contrasena: "",
      probar: ""
    };
  },
};
</script>

<style scoped>
footer,

footer{
  bottom: 0.1cm;
  align-self: auto;
}

</style>