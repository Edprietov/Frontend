<template>
  <div id="inicio"><LoggedHeader></LoggedHeader>

    <br><h3>Bienvenido "{{ mostrarUsiario() }}"</h3>

      <br><div class="container">
       <div class="card">
          <br><div class="mb-2">
         <br><b-avatar src="@/assets/profile.jpg" size="8rem"></b-avatar>
          </div>

         <div class="text-info">
           <br><div>Usuario: name user</div>
           <div>Ciudad: city</div>
           <div>Acerca de mi: Aboutme</div>
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
      nameuser: 'Usuario',
      nombre: '',
      probar: ''
    }
  },
  methods: {
     mostrarUsiario(){
       return this.nameuser
     },

    editarUsuario(e){
      e.preventDefault();
      this.$router.push('editar-usuario');
    },

    enviarForma(e) {
      e.preventDefault();
      let objectoActual = this;

      this.mostrarPerfil(objectoActual, this.nombre);
    },

    mostrarPerfil(objetoActual, info) {
      MostarPerfil.mostrarPerfil(info)
          .then(respuesta => {
            objetoActual.probar = (respuesta.data);
            console.log(respuesta.data);
          });
    }
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