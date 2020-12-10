<template>

  <div><LoggedHeader></LoggedHeader>
    <br><div>
      <!--<div class="col-md-20">-->
      <div class="card" id="card-mostrar-mascota">
        <div class="card-header"><b>Perfil Mascota</b></div>

        <div class="card-body">
          <form @submit="enviarForma">

            <strong class="text-center">Nombre: </strong>
            <label class="control-label col-sm-2">
              <input type="textr" class="control-label col-sm-12" @change="enCambio($event)" v-model="nombre"></label>

            <!--<strong class="text-center">Animal ID: </strong>
              <label class="control-label col-sm-2">
                <input type="number" class="control-label col-sm-12" @change="enCambio($event)" v-model="animalId"></label>-->
            <button class="btn btn-success" @click="enviarForma">Buscar</button>
          </form>


          <br/><table class="table">
          <thead>
          <th scope="col">ID</th>
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
            <td>{{ valor.animId }}</td>
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
            <!--td><button class="btn-primary" @click="editarMascota">Editar</button>-->
            <td><button class="btn-primary" @click="editarMascota(valor)">Editar</button>
              <br/><br/><button class="btn-primary" @click="editarMicrochipID(valor)">Microchip ID</button>
              <br/><br/><button class="btn-primary" @click="editarEsterilizacion(valor)">Esterilizacion</button>
            </td>


          </tr>
          </tbody>
        </table>
        </div>
      </div>
      <!--</div>-->
    </div>
    <footer><br/><Footer></Footer></footer>
  </div>
</template>
>

<script>
import LoggedHeader from "../components/LoggedHeader";
import Footer from "@/components/Footer";
import MostrarMascotaServicio from "@/servicio/MostrarMascotaServicio";
import MostrarMascotaNombreServicio from "@/servicio/MostrarMascotaNombreServicio";
import swal from "sweetalert2";


export default {
  name: "BusquedaMascota",
  components: {
    LoggedHeader,
    Footer,
  },
  data() {
    return {
      animalId: "",
      nombre: "",
      servidorDatos: "",
    };
  },
  methods: {


    enviarForma(e) {
      e.preventDefault();
      let objetoActual = this;
      this.mostarMascotas();
      this.mostarMascota(objetoActual);
      this.buscarAnimalPorNombre(objetoActual);
    },


    enCambio(event){
      let objetoActual = this;
      this.animalId = event.target.value;
      this.nombre = event.target.value;
      this.mostarMascota(objetoActual);
      this.buscarAnimalPorNombre(objetoActual);
      //alert(event.target.value);
    },

    mostarMascota(objetoActual) {
      MostrarMascotaServicio.mostrarMascota(this.animalId).then((respuesta) => {
        objetoActual.servidorDatos = respuesta.data;
        console.log(respuesta.data);
      });
    },


    mostarMascotas(objetoActual) {
      MostrarMascotaServicio.mostrarMascotas(objetoActual)
          .then((respuesta) => {
            if (respuesta.status === 200) {
              this.servidorDatos = respuesta.data;
            } else {
              console.log("Error");
            }
          })
          .catch((error) => {
            if (error.response.status === 400) {
              console.log("Error:" + error.response.message);
            }
          });
    },

    buscarAnimalPorNombre(objetoActual) {
      MostrarMascotaNombreServicio.buscarAnimalPorNombre(this.nombre).then((respuesta) => {
        objetoActual.servidorDatos = respuesta.data;
        console.log(respuesta.data);
      });
    },



    editarMascota(mascota) {
      this.confirmarEdicion(mascota);
    },


    mostrarCarnet(mascota) {
      this.$store.commit("actualizarMascota", mascota);
      this.$router.push("/carnet-mascota");
    },

    confirmarEdicion(mascota){
      swal.fire({
        title:"¿Deseas editar los datos de  " + mascota.animNombre + " ?",
        showCancelButton: true,
        confirmButtonText: 'Si, Editar',
        cancelButtonText: 'Cancelar',
      }).then((resultado)=>{

        if(resultado.isConfirmed){
          this.$store.commit("actualizarMascota", mascota);
          this.$router.push("/editar-mascota");
        }else{
          //NO hacer nada
        }

      })

    },

    editarMicrochipID(mascota){
      this.$store.commit("actualizarMascota", mascota);
      this.$router.push("/editar-microchip");
    },

    editarEsterilizacion(mascota){
      this.$store.commit("actualizarMascota", mascota);
      this.$router.push("/editar-esterilizacion");
    },




  },
  created() {
    //verificar persistencia entre paginas
    MostrarMascotaServicio.mostrarMascota(this.animalId)
        .then(respuesta => {
          this.objetoActual.servidorDatos = (respuesta.data);
          console.log(respuesta.data);
        });
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