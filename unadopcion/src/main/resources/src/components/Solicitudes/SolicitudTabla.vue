<template>
  <div card>
    <table class="table" aria-describedby="consultarM">
      <thead>
        <th scope="col">Id Solicitud</th>
        <th scope="col">Nombre Animal</th>
        <th scope="col">Fecha realizada</th>
        <th scope="col">Estado</th>
        <th scope="col">Nombre Solicitante</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </thead>
      <tbody>
        <tr v-for="valor in servidorDatos" :key="valor.id">
          <td>{{ valor.id }}</td>
          <td>{{ valor.animNombre }}</td>
          <td>{{ valor.fecha }}</td>
          <td>{{ valor.estado }}</td>
          <td>{{ valor.personaNombre }}</td>
          <td>
            <button class="btn btn-success" id="Aceptar" @click="enviarForma">
              Aceptar
            </button>
          </td>
          <td>
            <button class="btn btn-danger mr-4">Rechazar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SolicitudServicio from "@/servicio/SolicitudServicio";
export default {
  data() {
    return {
      servidorDatos: "",
    };
  },
  mounted() {
    this.servidorDatosPendiente();
    console.log("Componente RegistroUsuario OK.");
  },
  methods: {
    servidorDatosPendiente() {
      let info = {
        id: "",
        animid: "",
        fecha: "",
        estado: "",
        personaid: this.$store.getters.getGoogleId,
        personaNombre: "",
        animNombre: "",
      };
      SolicitudServicio.TraerSolicitudPendiente(info)
        .then((respuesta) => {
          this.servidorDatos = respuesta.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>