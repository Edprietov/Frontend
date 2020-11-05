<template>
  <div id="inicio"><LoggedHeader></LoggedHeader>

    <br><h3> Hola <strong>{{(datosServidor.usuarioNombreReal)}}</strong>  </h3>

      <br><div class="container">
       <div class="card">
          <br><div class="mb-2">
         <br><b-avatar v-bind:src=datosServidor.usuarioUrlFoto size="8rem"></b-avatar>
          </div>

         <div class="text-info">
           <br><div>{{datosServidor.usuarioNombreReal}}</div>
           <div>Lugar:{{datosServidor.usuarioLugar}}</div>
           <div>Acerca de mi: {{datosServidor.usuarioDescript}}</div>
         </div>

         <div><br></div>
          <br><div class="text-center">
            <button  class="btn btn-success" @click="editarUsuario">Editar Usuario</button>
            <br>
            </div>
         <BuscarUsuario id="buscarusuario"></BuscarUsuario>
       <div><br></div></div>


      </div>


    <footer><Footer></Footer></footer>
  </div>
</template>

<script>
import LoggedHeader from "@/components/LoggedHeader";
import Footer from "@/components/Footer";
import MostarPerfil from "@/servicio/MostarPerfilServicio";
import BuscarUsuario from "@/components/BuscarUsuario";

export default {
  name: "Inicio",
  components:{
    LoggedHeader, Footer, BuscarUsuario
  },
   data(){
    return{

      datosServidor: ''
    }
  },
  methods: {
     /*mostrarUsiario(){
       return this.nameuser
     },*/

    editarUsuario(e){
      e.preventDefault();
      this.$router.push('editar-usuario');
    },

    cargarPerfil(googleId) {

      let objectoActual = this;
      this.mostrarPerfil(objectoActual, googleId);
    },

    mostrarPerfil(objetoActual, googleId) {
      MostarPerfil.mostrarPerfil(googleId)
          .then(respuesta => {
            objetoActual.datosServidor = (respuesta.data);
            console.log(respuesta.data);
            //alert(this.$store.getters.getGoogleId)

          });
    }
  },
  created() {
    //el googleid de usuario viene  el URL, identifica el usuario logeado
    this.googleid = this.$route.params.id;
    //alert("pordefecto?" + this.$store.getters.getGoogleId + " para asignar " + this.googleid);
    //guardar en store accesible a todos los componentes y persistente
    this.$store.commit("actualizarGoogleId", this.googleid); //Persistencia del usuario
    this.cargarPerfil(this.googleid);//hace llamado al API

  }
}
</script>

<style scoped>

footer,

body{
  width: 97.5%;
  position: relative;
}

footer{
  bottom: 0.1cm;
  align-self: auto;
}

#buscarusuario{
  position: relative;
  margin-top: 10%;
}
</style>