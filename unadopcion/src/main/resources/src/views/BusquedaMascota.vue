<template>


  <div><LoggedHeader></LoggedHeader>
  <br><div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header"><b>Busca una mascota</b></div>

          <div class="card-body">
            <form @submit="enviarForma">



                <select class="form-control" @change="enCambio($event)">
                  <option selected>Selecciona una categoria</option>
                  <option>Perro</option>
                  <option>Gato</option>
                  <option>Ave</option>
                  <option>Roedor</option>
                  <option>Pez</option>
                  <option>Reptil</option>
                  <option>Otro</option>
                </select>
              </form>

              <table class="table">
                <thead>
                  <th scope="col">Foto</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Algo sobre ellos</th>
                </thead>
                <tbody>
                  <tr v-for="valor in servidorDatos" :key="valor.id">
                    <td>{{valor.animId}}</td>
                    <td>
                      <img
                        class="img-fluid"
                        width="185"
                        height="185"
                        alt="Nada"
                        v-bind:src="'data:image;base64,' + valor.animFoto"
                      />
                      <br /><button
                        class="btn-primary"
                        @click="adoptarMascota(valor)"
                      >
                        Adoptame!
                      </button>
                    </td>
                    <td>{{ valor.animNombre }}</td>
                    <td>{{ valor.animDescrip }}</td>
                  </tr>
                </tbody>
              </table>

              <strong>:</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer><Footer></Footer></footer>
  </div>
</template>

<script>
import BuscarMascotaServicio from "../servicio/BuscarMascotaServicio";
import swal from "sweetalert2";
import LoggedHeader from "../components/LoggedHeader";
import Footer from "@/components/Footer";

export default {
  name: "BusquedaMascota",
  components: {
    LoggedHeader,
    Footer,
  },
  data() {
    return {
      tipo: "",
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
      this.tipo = event.target.value;
      this.buscarMascota(objetoActual);
      //alert(event.target.value);
    },

    buscarMascota(objetoActual) {

      BuscarMascotaServicio.buscarPorTipo(this.tipo).then((respuesta) => {
        objetoActual.servidorDatos = respuesta.data;
        console.log(respuesta.data);
      });
    },

    confirmarAdopcion(mascota){
      swal.fire({
        title:"Puedes adoptar a " + mascota.animNombre,
        showCancelButton: true,
        confirmButtonText: 'Si lo quiero!!',
        cancelButtonText: 'Seguir buscando',
      }).then((resultado)=>{

        if(resultado.isConfirmed){
          this.$store.commit("actualizarMascotaAdopcion", mascota);
          this.$router.push("/solicitud");
        }else{
          //hacer nada
        }
        
      })

    }
  },
  created() {
    //verificar persistencia entre paginas
      BuscarMascotaServicio.buscarPorTipo(this.tipo)
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