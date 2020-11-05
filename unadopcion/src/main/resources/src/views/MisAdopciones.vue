<template>
  <div id="logeo">
    <Header></Header><br><br>
    <h1>Mis adopciones  </h1><br><br>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="container">                    
                <img src="@/assets/perro1.jpg" alt="Perro" width="300"> <br><br>
                <h1>Hola! soy {{nombre}} Lucas</h1>
                <h5>Estado de adopción: <strong> En proceso</strong></h5>
                <button class="btn btn-danger">Cancelar Solicitud</button> <br><br>
                </div>
            </div>
            <div class="col">
                <div class="container">                    
                <img src="@/assets/perro2.jpg" alt="Perro" width="300"> <br><br>
                <h1>Hola! soy {{nombre}} Mateo</h1>
                <h5>Estado de adopción: <strong> Adoptado</strong></h5>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="container">                    
                <img src="@/assets/perro2.jpg" alt="Perro" width="300"> <br><br>
                <h1>Hola! soy {{nombre}} Kira</h1>
                <h5>Estado de adopción: <strong> Aceptado</strong></h5>
                <button class="btn btn-success">Iniciar proceso</button> <br><br>
                </div>
            </div>
            <div class="col">
                <div class="container">                    
                <img src="@/assets/Dog.jpg" alt="Perro" width="200"> <br><br>
                <h1>Hola! soy {{nombre}} Peluza</h1>
                <h5>Estado de adopción: <strong> Rechazado</strong></h5>
                <button class="btn btn-primary">Ver detalles</button> <br><br>
                </div>
            </div>
        </div>        
    </div>
    
    <footer><Footer></Footer></footer>
  </div>
</template>

<script>
import swal from "sweetalert2";
import Header from "../components/Header";
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
          this.mostrarLogeoFallido("No se encuentra el usuario con esas credenciales");//no existe usuario
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
    Header,
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