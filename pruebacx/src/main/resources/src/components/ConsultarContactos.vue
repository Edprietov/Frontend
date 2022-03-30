<template>
  <div card>
    <Header></Header>

    <div class="form-row" id="caja">
      <label class="control-label col-sm-0" for="nombreContactoFiltro"
        ><strong>Nombre:</strong></label
      >
      <div class="col-sm-0">
        <input
          required
          type="text"
          id="nombreContactoFiltro"
          class="form-control"
          v-model="nombreContactoFiltro"
          @keypress.self="filtrar"
          @keydown.delete="filtrar"
        />
      </div>
      <a id="myLink" @click="limpiarCampoNombre">
        <img src="@/assets/x-circle.svg" alt="iconoBorrar" id="iconoBorrar" />
      </a>

      <label class="control-label col-sm-1" for="ciudadFiltro"
        ><strong>Ciudad:</strong></label
      >
      <div class="col-sm-0">
        <input
          required
          type="text"
          id="ciudadFiltro"
          class="form-control"
          v-model="ciudadFiltro"
          @keypress.self="filtrar"
          @keyup.delete="filtrar"
        />
      </div>
      <a id="myLink" @click="limpiarCampoCiudad">
        <img src="@/assets/x-circle.svg" alt="iconoBorrar" id="iconoBorrar" />
      </a>
      <label class="control-label col-sm-1" for="correoFiltro"
        ><strong>Correo:</strong></label
      >
      <div class="col-sm-0">
        <input
          required
          type="text"
          id="correoFiltro"
          class="form-control"
          v-model="correoFiltro"
          @keypress.self="filtrar"
          @keydown.delete="filtrar"
        />
      </div>
      <a id="myLink" @click="limpiarCampoCorreo">
        <img src="@/assets/x-circle.svg" alt="iconoBorrar" id="iconoBorrar" />
      </a>
      <label class="control-label col-sm-1" for="telefonoFiltro"
        ><strong>Celular:</strong></label
      >
      <div class="col-sm-1">
        <input
          required
          type="text"
          id="telefonoFiltro"
          class="form-control"
          v-model="telefonoFiltro"
          @keypress.self="filtrar"
          @keydown.delete="filtrar"
        />
      </div>
      <a id="myLink" @click="limpiarCampoCelular">
        <img src="@/assets/x-circle.svg" alt="iconoBorrar" id="iconoBorrar" />
      </a>
      <button class="btn btn-success" id="botonFiltro" @click="filtrar">
        Filtrar
      </button>
    </div>
    <br />
    <div class="container">
     
        <div class="card">
          <div class="card-header"><b>CONTACTOS</b></div>

          <div class="card-body">
            <table class="table table-responsive" aria-describedby="consultarM">
              <thead>
                <tr>
                  <th scope="col"># Id</th>
                  <th scope="col">Id Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Celular</th>
                  <th scope="col">Ciudad</th>
                  <th scope="col" v-if="mostrar">Actualizar</th>
                  <th scope="col" v-if="mostrar">Eliminar</th>
                </tr>
              </thead>
              <tbody>
            
                <tr v-for="valor in servidorDatos" :key="valor.id">
                  <td>{{ valor[0] }}</td>
                  <td>{{ valor[1] !== null ? valor[1] : "-" }}</td>
                  <td>{{ valor[2] !== null ? valor[2] : "-" }}</td>
                  <td>{{ valor[5] !== null ? formatear(valor[5]) : "-" }}</td>
                  <td>{{ valor[6] !== null ? valor[6] : "-" }}</td>
                  <td>{{ valor[3] !== null ? valor[3] : "-" }}</td>
                  <td v-if="mostrar">
                    <button
                      type="button"
                      class="btn btn-primary bg-red"
                      @click="editar(valor[0])"
                    >
                      <img src="@/assets/pencil-square.svg" />
                    </button>
                  </td>
                  <td v-if="mostrar">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      v-on:click="eliminar(valor[0], valor[1], valor[2])"
                    >
                      <img src="@/assets/trash3.svg" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
     
    </div>
    <Footer class="si"></Footer>
  </div>
</template>

<script>
import Consultar from "@/servicio/ConsultarContactos";
import ConsultarR from "@/servicio/ConsultarRespaldo";
import Eliminar from "@/servicio/EliminarContactoServicio";
import Paises from "@/servicio/PaisServicio";
import Footer from "./Footer";
import Header from "@/components/Header";
import swal from "sweetalert2";

export default {
  data() {
    return {
      nombreContactoFiltro: "",
      ciudadFiltro: "",
      correoFiltro: "",
      telefonoFiltro: "",
      servidorDatos: "",
      copiaDatos: "",
      auxDatos: [],
      paises: "",
      mostrar: true,
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    enviarForma() {
      this.ConsultarContactos();
    },
    ConsultarContactos() {
      Consultar.ConsultarTodosContactos()
        .then((respuesta) => {
          if (respuesta.status === 200) {
            //console.log("Respuesta" + JSON.stringify(respuesta.data.items[0].rows));
            this.servidorDatos = respuesta.data.items[0].rows;
            this.copiaDatos = this.servidorDatos;
            this. ConsultarPaisesTodos();
            ConsultarR.Actualizar(respuesta.data);
          } else {
            console.log("Error");
          }
        })
        .catch((error) => {
          swal.fire( {timer: 8000, title:"Conexión Fallida",  type:'info', text:"En este momento no hay conexión con el servidor, sin embargo tenemos la ultima consulta realizada"});
          this.mostrar = false;
          ConsultarR.Consultar()
        .then((respuesta) => {
          if (respuesta.status === 200) {
            console.log("Respuesta" + JSON.stringify(respuesta.data.items[0].rows));
            this.servidorDatos = respuesta.data.items[0].rows;
            this.copiaDatos = this.servidorDatos;
             this. ConsultarPaisesTodos();
          } else {
            console.log("Error");
          }
        })
          if (error.response.status === 400) {
            console.log("Error aquí");
          }
        });
    },
    filtrar() {
      if (
        this.nombreContactoFiltro == "" &&
        this.ciudadFiltro == "" &&
        this.correoFiltro == "" &&
        this.telefonoFiltro == ""
      ) {
        this.servidorDatos = this.copiaDatos;
      } else {
        this.servidorDatos = this.copiaDatos;
        let datos = this.servidorDatos;
        this.auxDatos = [];

        for (let x in datos) {
          datos[x][1] = datos[x][1] == null ? "-" : datos[x][1];
          datos[x][2] = datos[x][2] == null ? "-" : datos[x][2];
          datos[x][6] = datos[x][6] == null ? "-" : datos[x][6];
          datos[x][3] = datos[x][3] == null ? "-" : datos[x][3];
          datos[x][5] = datos[x][5] == null ? "-" : datos[x][5];
          datos[x][6] = datos[x][6] == null ? "-" : datos[x][6];
          if (
            datos[x][1].includes(this.nombreContactoFiltro) &&
            datos[x][3].includes(this.ciudadFiltro) &&
            datos[x][5].includes(this.correoFiltro) &&
            datos[x][6].includes(this.telefonoFiltro)
          ) {
            this.auxDatos.push(datos[x]);
          }
        }
        this.servidorDatos = this.auxDatos;
      }
    },

    eliminar(id, nombre, apellido) {
      swal
        .fire({
          title:
            "Deseas eliminar el contacto con id " +
            id +
            " con nombre " +
            nombre +
            " " +
            apellido +
            "?",
          showCancelButton: true,
          confirmButtonText: "Eliminar",
          cancelButtonText: "cancelar",
          icon: "question",
          timer: 5000,
        })
        .then((result) => {
          if (result.isConfirmed) {
            Eliminar.EliminarContactoporId(id)
              .then((respuesta) => {
                if (respuesta.status === 200) {
                  swal.fire({
                    timer: 8000,
                    title: "Contacto Eliminado!",
                    icon: "success",
                  });
                  this.ConsultarContactos();
                }
                if (respuesta.status === 404) {
                  swal.fire(
                    "Contacto No encontrado!",
                    "Al parecer el usuario ya fue eliminado",
                    "info"
                  );
                }
              })
              .catch((error) => {
                if (error.message.includes("404")) {
                  swal.fire({
                    timer: 8000,
                    title: "Contacto No encontrado!",
                    icon: "info",
                    text: "Al parecer el usuario ya fue eliminado",
                  });
                } else {
                  swal.fire({
                    timer: 8000,
                    title: "Conexión Fallida",
                    icon: "info",
                    text: "En este momento no hay conexión con el servidor, intenta más tade",
                  });
                }
              });
          } else if (result.isDenied) {
            swal.fire("Changes are not saved", "", "info");
          }
        });
    },

    editar(id) {
      this.$router.push({
        name: "editarcontacto",
        params: { id: id, pagina: "actualizar" },
      });

    },

    ConsultarPaisesTodos() {
      Paises.ConsultarPaises()
        .then((respuesta) => {
          if (respuesta.status === 200) {
            this.paises = respuesta.data.items[0].rows;
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            console.log("Error:" + error.response.message);
          }
        });
    },

    formatear(correo) {
      return correo.replace(".invalid", "");
    },

    formatearPais(codigo) {
      for (let x in this.paises) {
        if (this.paises[x][0] == codigo) {
          return this.paises[x][1];
        }
      }
    },

    limpiarCampoNombre() {
      this.nombreContactoFiltro = "";
      this.filtrar();
    },
    limpiarCampoCiudad() {
      this.ciudadFiltro = "";
      this.filtrar();
    },
    limpiarCampoCorreo() {
      this.correoFiltro = "";
      this.filtrar();
    },
    limpiarCampoCelular() {
      this.telefonoFiltro = "";
      this.filtrar();
    },
  },
  beforeMount() {
    this.ConsultarContactos();
  },
  name: "ConsultarContactos",
  mounted() {},
};
</script>

<style>
footer {
  position: absolute;
  bottom: 0.1cm;
  align-self: auto;
}

body {
  margin: 10px;
  padding: 20px;
  font-family: sans-serif;
  min-height: 100vh;
  background-image: url("../assets/fondo.jpg");
  background-attachment: fixed;
  text-align: justify;
}

#caja {
  margin-top: 2%;
}

.table {
  margin-top: 2%;
}

#botonFiltro {
  margin-left: 3%;
}

.btn-danger {
  height: 1%;
  width: 1%;
}

#iconoBorrar {
  height: 50%;
  width: 100%;
  margin-top: 20%;
}

.btn-secondary,
.btn-secondary:hover,
.btn-secondary:active,
.btn-secondary:visited {
  background-color: #b30606 !important;
}

.card {
  width: 110%;
  margin-left: -5%;
  flex: 1;
}

.card-body {
  margin-top: -3.5%;
}

.si {
  position: fixed;
  width: 100%;
  height: 100%;
}
body {

  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

header {
  padding: 15px;
  background: #2196f3;
  color: #fff;
}
footer {
  padding: 15px;
  background: #333;
  color: #fff;
}



</style>