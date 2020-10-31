<template>
  <div card>
  <div class="form-row">

    <strong class="text-nowrap">Nombre de usuario:</strong>
    <label class="control-label col-sm-2">
      <input type="text" class="control-label col-sm-8" v-model="nombreusuario"></label>
    <button class="btn btn-success" @click="enviarForma">Buscar Usuario</button>
  </div>
    <table class="table">
      <thead>
      <th scope="col">Foto</th>
      <th scope="col">Nombre</th>
      <th scope="col">Correo</th>
      </thead>
      <tbody>
      <tr v-for="valor in servidorDatos" :key="valor.id" >
        <td>
          <div>Foto</div>
        <td>{{valor.usuarioNombreReal}}</td>
        <td>{{valor.usuarioEmail}}</td>
      </tr>
      </tbody>
    </table>
</div>

</template>

<script>
import BuscarUsuarioServicio from "@/servicio/BuscarUsuarioServicio";
export default {
  name: "BuscarUsuario",
  components: {

  },
  mounted() {
    console.log('Componente BuscarUsuario OK.')
  },
  data() {
    return {
      nombreusuario: '',
      servidorDatos:'',
      probar:''
    };
  },
  methods: {

    enviarForma(e) {
      e.preventDefault();
      let objectoActual = this;

      this.buscarUsuario(objectoActual, this.nombreusuario);
    },

      buscarUsuario(objetoActual, nombre){
      BuscarUsuarioServicio.buscarPorNombre(nombre)
          .then(respuesta=>{
            if(respuesta.status === 200) {
               console.log(respuesta.data);
               objetoActual.servidorDatos = respuesta.data;
            }else{
              alert("Error");
            }
          }).catch(error =>{
        if(error.response.status === 400){
            alert("Pucha error:" + error.response.message);
        }
      });
    }
  },

  created(){

  }
}
</script>

<style scoped>

</style>