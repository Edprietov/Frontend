<template>
  <div><LoggedHeader></LoggedHeader>
    <br><div class="container">
      <div class="col-md-20">
        <div class="card">
          <div class="card-header"><b>Perfil Mascota</b></div>

          <div class="card-body">
            <form @submit="enviarForma">
              <strong class="text-center">Nombre: </strong>
              <label class="control-label col-sm-2">
                <input type="text" class="control-label col-sm-12" @change="enCambio($event)" v-model="nombre"></label>
              <button class="btn btn-success" @click="enviarForma">Buscar</button>
            </form>


            <br/><table class="table">
            <thead>
            <th scope="col">Foto</th>
            <th scope="col">Nombre</th>
            <th scope="col">Especie</th>
            <th scope="col">Sexo</th>
            <th scope="col">Edad</th>
            <th scope="col">Microchip ID</th>
            <th scope="col">Esterilización</th>
            <th scope="col">Descripción</th>
            <th scope="col"> - </th>
            <th scope="col"> - </th>
            </thead>
            <tbody>
            <tr v-for="valor in servidorDatos" :key="valor.id">
              <td>
                <img
                    class="img-fluid"
                    width="185"
                    height="185"
                    alt="Nada"
                    v-bind:src="'data:image;base64,' + valor.animFoto"/>
              </td>
              <td>{{ valor.animNombre }}</td>
              <td>{{ valor.animTipo }}</td>
              <td>{{ valor.animSexo }}</td>
              <td>{{ valor.animEdad }}</td>
              <td>{{ valor.animMicrochiId }}</td>
              <td>{{ valor.animEsterilizacion }}</td>
              <td>{{ valor.animDescrip }}</td>
              <td><button class="btn-primary" @click="mostrarCarnet(valor)">Carnet</button></td>
              <td><button class="btn-primary" @click="editarMascota">Editar</button></td>
            </tr>
            </tbody>
          </table>

            <strong>:</strong>
          </div>
        </div>
      </div>

    </div>
    <footer><Footer></Footer></footer>
  </div>
</template>

<script>
import LoggedHeader from "../components/LoggedHeader";
import Footer from "@/components/Footer";
import MostrarMascotaNombreServicio from "@/servicio/MostrarMascotaNombreServicio";


export default {
  name: "MostrarMascotaNombre",
  components: {
    LoggedHeader,
    Footer,
  },
  data() {
    return {
      nombre: "",
      servidorDatos: "",
    };
  },
  methods: {
    enviarForma(e) {
      e.preventDefault();
      let objetoActual = this;
      this.buscarMascota(objetoActual);
    },

    adoptarMascota(mascota){
      this.confirmarAdopcion(mascota);
    },
    enCambio(event){
      let objetoActual = this;
      this.nombre = event.target.value;
      this.buscarMascota(objetoActual);
      //alert(event.target.value);
    },

    buscarMascota(objetoActual) {
      MostrarMascotaNombreServicio.buscarAnimalPorNombre(this.nombre).then((respuesta) => {
        objetoActual.servidorDatos = respuesta.data;
        console.log(respuesta.data);
      });
    },

  },
  created() {
    //verificar persistencia entre paginas
    MostrarMascotaNombreServicio.buscarAnimalPorNombre(this.nombre)
        .then(respuesta => {
          this.objetoActual.servidorDatos = (respuesta.data);
          console.log(respuesta.data);
        });
  }

};
</script>

<style scoped>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css);

img {
  border-radius: 8px;
}

footer {
  bottom: 0.1cm;
  align-self: auto;
}
</style>