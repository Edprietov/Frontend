<template>
  <div card>
  <div class="form-row">

    <strong class="text-nowrap">Nombre de usuario:</strong>
    <label class="control-label col-sm-2">
      <input type="text" class="control-label col-sm-8" v-model="nombreusuario"></label>
    <button class="btn btn-success" @click="enviarForma">Buscar Usuario</button>
  </div>
    <table class="table" aria-describedby="buscarUsuario">
      <thead>
      <th scope="col">Foto</th>
      <th scope="col">Nombre</th>
      <th scope="col">Correo</th>
      <!-- Area admin -->
      <th v-if="$store.getters.getUsuarioRol ==='admin'" scope="col" >ID de Google</th>
      <th v-if="$store.getters.getUsuarioRol ==='admin'" scope="col" id="rol" >Rol</th>
      <th v-if="$store.getters.getUsuarioRol ==='admin'" scope="col" id="puntos">Puntos</th>
      <!-- Area admin -->
      </thead>
      <tbody>
      <tr v-for="valor in servidorDatos" :key="valor.id" >
        <td>
          <div><img id="google-foto" v-bind:src="valor.usuarioUrlFoto" /></div>
        <td>{{valor.usuarioNombreReal}}</td>
        <td>{{valor.usuarioEmail}}</td>
        <!-- Area admin -->
        <td v-if="$store.getters.getUsuarioRol ==='admin'" scope="col">{{valor.usuarioGoogleId}}</td>
        <td v-if="$store.getters.getUsuarioRol ==='admin'" scope="col">{{valor.usuarioRol}}</td>
        <td v-if="$store.getters.getUsuarioRol ==='admin'" scope="col">{{valor.usuarioPuntos}}</td>
        <td v-if="$store.getters.getUsuarioRol ==='admin'" scope="col"><button class="btn-primary" @click="editarUsuario(valor)">Editar</button></td>
        <!-- Area admin -->
      </tr>
      </tbody>
    </table>
</div>

</template>

<script>
import BuscarUsuarioServicio from "@/servicio/BuscarUsuarioServicio";
import swal from 'sweetalert2';
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

    confirmarEdicion(usuario, rol, puntos){
      let mensaje =  usuario.usuarioNombreReal + " " +
          'con rol anterior ' + usuario.usuarioRol + ' pasa a tener rol ' + rol + '. Puntos:' + puntos;
      swal.fire({
        title: mensaje,
        showCancelButton:true,
        showConfirmButton:true,
        confirmButtonText:'Actualizar',
      }).then((result) =>{
        if(result.isConfirmed){
          //enviar a servidor

        }
      });
    },
    tomarPuntos(usuario, rol){
        swal.fire({
          title: 'Editar Puntos',
          input: 'text',
          inputValue:usuario.usuarioPuntos,
          showCancelButton: 'true',
          inputValidator:(value) => {
            this.confirmarEdicion(usuario, rol, value);
          }
        });
    },

    tomarRol(usuario){
      swal.fire({
        title: 'Editar Rol',
        input: 'select',
        inputOptions:{
          'Rol':{
            visitante: 'visitante',
            cuidador: 'cuidador',
            adoptador: 'adoptador',
            admin: 'admin'
          }

        },

        inputValue:usuario.usuarioRol,
        showCancelButton: 'true',
        inputValidator:(value) => {
          this.tomarPuntos(usuario, value)
        }
        })

    },

    editarUsuario(usuario){

      this.tomarRol(usuario);


    },

      buscarUsuario(objetoActual, nombre){
      BuscarUsuarioServicio.buscarPorNombre(nombre)
          .then(respuesta=>{
            if(respuesta.status === 200) {
               //console.log(respuesta.data);alert("Yaaaay!!");
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

#google-foto{
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 12px;
}

#rol, #puntos{
  color: #ea484e;
}


</style>