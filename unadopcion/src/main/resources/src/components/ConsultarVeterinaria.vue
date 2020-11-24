<template>
  <div card>
    <LoggedHeader></LoggedHeader>
    <div class="form-row">
      <label class="control-label col-sm-2" for="nombre"
        ><strong>Nombre:</strong></label
      >
      <div class="col-sm-2">
        <input
          required
          type="text"
          id="nombre"
          class="form-control"
          v-model="nombre"
        />
      </div>

      <label class="control-label col-sm-2" for="calificacion"
        ><strong>Calificacion:</strong></label
      >
      <div class="col-sm-2">
        <select class="form-control" id="calificacion" v-model="calificacion">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <button class="btn btn-success" @click="enviarForma">Consultar</button>
    </div>
    <table class="table" aria-describedby="consultar">
      <thead>
        <th scope="col">Nombre</th>
        <th scope="col">Dirección</th>
        <th scope="col">Telefono</th>
        <th scope="col">Sitio web</th>
      </thead>
      <tbody>
        <tr v-for="valor in servidorDatos" :key="valor.id">
          <td>{{ valo.nombre }}</td>
          <td>{{ valor.direccion }}</td>
          <td>{{ valor.telefono }}</td>
          <td>{{ valor.sitioWeb }}</td>
        </tr>
      </tbody>
    </table>
    <footer><br /><Footer></Footer></footer>
  </div>
</template>

<script>
import Consultar from "@/servicio/ConsultarVeterinaria";
import Footer from "./Footer";
import LoggedHeader from "@/components/LoggedHeader";
export default {
  data() {
    return {
      nombre: "",
      calificacion: "",
      servidorDatos: "",
    };
  },
  methods: {
    enviarForma(e) {
      e.preventDefault();
      console.log(this.nombre);
      console.log(this.calificacion);
      this.buscarNombre(this.nombre);
    },
    buscarNombre(nombre) {
      Consultar.ConsultarPorNombre(nombre)
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
    buscarCalificacion(calificacion) {
      Consultar.ConsultarPorCalificacion(calificacion)
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
  components: {
    LoggedHeader,
    Footer,
  },
  name: "ConsultarVeterinaria",
  mounted() {
    console.log("Componente Consultar Veterinaria OK");
  },
};
</script>

