<template>
  <div card>
    <strong>Tabla De solicitudes</strong>
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
          <td v-if="valor.personaid != googleId && valor.estado == 'Pendiente'">
            <button
              class="btn btn-success mr-4"
              id="Aceptar"
              @click="AceptarSolicitud(valor.id)"
            >
              Aceptar
            </button>
            <button
              class="btn btn-danger mr-4"
              @click="RechazarSolicitud(valor.id)"
            >
              Rechazar
            </button>
          </td>
          <td v-else-if="valor.estado != 'Pendiente'">
            <strong>No hay acciones sobre esta Solicitud</strong>
          </td>
          <td v-else>
            <button
              class="btn btn-danger mr-4"
              @click="cancelarSolicitud(valor.id)"
            >
              Cancelar Solicitud
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SolicitudServicio from "@/servicio/SolicitudServicio";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      servidorDatos: "",
      googleId: this.$store.getters.getGoogleId,
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

    cancelarSolicitud(id) {
      SolicitudServicio.cancelarSolicitud(id)
        .then((respuesta) => {
          if (respuesta.status == 202) {
            Swal.fire(
              "Cancelación exitosa",
              "La solicitud ha sido cancelada correctamente",
              "success"
            );
            this.servidorDatosPendiente();
          } else if (respuesta == null) {
            Swal.fire("Error", "Esta solicitud no existe", "error");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    RechazarSolicitud(id) {
      SolicitudServicio.RechazarSolicitud(id)
        .then((respuesta) => {
          if (respuesta.status == 202) {
            Swal.fire(
              "Rechazo exitoso",
              "La solicitud ha sido rechazada correctamente",
              "success"
            );
            this.servidorDatosPendiente();
          } else if (respuesta == null) {
            Swal.fire("Error", "Esta solicitud no existe", "error");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    AceptarSolicitud(id) {
      SolicitudServicio.AceptarSolicitud(id, this.googleId)
        .then((respuesta) => {
          if (respuesta.status == 202) {
            Swal.fire(
              "Aceptación de solicitud exitosa",
              "La solicitud ha sido aceptada correctamente",
              "success"
            );
            this.servidorDatosPendiente();
          } else if (respuesta == null) {
            Swal.fire("Error", "Esta solicitud no existe", "error");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
