<template>
  <div card>
    <div class="form-row">
      <strong class="text-nowrap">Id de la mascota:</strong>
      <label class="control-label col-sm-2">
        <input type="number" class="control-label col-sm-8" v-model="animalId"
      /></label>
      <button class="btn btn-success" @click="enviarForma">Consultar</button>
    </div>
    <table class="table">
      <thead>
        <th scope="col">Id Mascota</th>
        <th scope="col">Id Usuario Implicado</th>
        <th scope="col">Denuncia</th>
        <th scope="col">Fecha</th>
        <th scope="col">Tipo</th>
        <th scope="col">Descripción</th>
        <th scope="col">Detalles</th>
      </thead>
      <tbody>
        <tr v-for="valor in servidorDatos" :key="valor.id">
          <td>{{valor.animalId}}</td>
          <td>{{ valor.usuarioId }}</td>
          <td>{{ valor.denunId }}</td>
          <td>{{ valor.denunFecha}}</td>
          <td>{{ valor.denunTipo}}</td>
          <td>{{ valor.denunDescrip}}</td>
          <td>{{ valor.detalles}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Consultar from "@/servicio/ConsultarMaltratoIdMascota";
export default {
    
  data () {
    return {
        animalId: "",
        servidorDatos: "",
    }
  },
  methods: {
      enviarForma(e){
          e.preventDefault();
          this.buscarUsuario(this.animalId)
      },
      buscarUsuario(id){
      Consultar.ConsultarPorId(id)
          .then(respuesta=>{
            if(respuesta.status === 200) {
               this.servidorDatos = respuesta.data;
            }else{
              alert("Error");
            }
          }).catch(error =>{
        if(error.response.status === 400){
            alert("Error:" + error.response.message);
        }
      });
    }
  },
  name: "ConsultarMaltratoIdMascota",
  mounted() {
    console.log("Componente BuscarUsuario OK.");
  },
};
</script>

<style>
</style>