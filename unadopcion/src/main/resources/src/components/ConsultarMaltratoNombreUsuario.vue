<template>
  <div card>
    <LoggedHeader></LoggedHeader>
    <div class="form-row">
      <label class="control-label col-sm-2" for="nombreUsuario"
        ><strong>Nombre Usuario a Consultar:</strong></label
      >
      <div class="col-sm-2">
        <input
          required
          type="text"
          id="nombreUsuario"
          class="form-control"
          v-model="nombreUsuario"
        />
      </div>
      <button class="btn btn-success" @click="enviarForma">Consultar</button>
    </div>
    <table class="table">
      <thead>
        <th scope="col"># Denuncia</th>
        <th scope="col">Id Mascota</th>
        <th scope="col">Fecha</th>
        <th scope="col">Tipo</th>
        <th scope="col">Descripción</th>
        <th scope="col">Detalles</th>
      </thead>
      <tbody>
        <tr v-for="valor in servidorDatos" :key="valor.id">
          <td>{{ valor.denunId }}</td>
          <td>{{ valor.animalId }}</td>
          <td>{{ valor.denunFecha }}</td>
          <td>{{ valor.denunTipo }}</td>
          <td>{{ valor.denunDescrip }}</td>
          <td>{{ valor.detalles }}</td>
        </tr>
      </tbody>
    </table>
    <footer><br /><Footer></Footer></footer>
  </div>
</template>

<script>
import Consultar from "@/servicio/ConsultarMaltratoNombreUsuario";
import Footer from "./Footer";
import LoggedHeader from "@/components/LoggedHeader";
export default {
  data() {
    return {
      nombreUsuario: "",
      servidorDatos: "",
    };
  },
  components: {
    LoggedHeader,
    Footer,
  },
  methods: {
    enviarForma(e) {
      e.preventDefault();
      this.buscarUsuario(this.nombreUsuario);
    },
    buscarUsuario(nombreUsuario) {
      Consultar.ConsultarPorNombre(nombreUsuario)
        .then((respuesta) => {
          if (respuesta.status === 200) {
            this.servidorDatos = respuesta.data;
          } else {
            alert("Error");
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            alert("Error:" + error.response.message);
          }
        });
    },
  },
  name: "ConsultarMaltratoNombreUsuario",
  mounted() {
    console.log("Componente Buscar Maltrato por usuario OK.");
  },
};
</script>

<style>
footer {
  position: absolute;
  bottom: 0.1cm;
  align-self: auto;
}
</style>