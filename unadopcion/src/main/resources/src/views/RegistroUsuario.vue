<template>
  <div id="registrousuario" onload="">
    <!--@private byte[] usuarioFoto;-->
    <Header></Header>
    <div class="row">
      <div class="col-7">
        <br />
        <!-- primer carta-->
        <div class="col-8">
          <div class="card text-center">
            <div class="card-header">
              <strong>EU Edita tu información para mantenernos al día!</strong>
            </div>

            <div class="card-body">
              <form @submit="enviarForma">
                <div class="row">
                  <div class="col-4">
                    <strong>Nickname:</strong>
                  </div>
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control"
                      @change="comprobarFormato"
                      v-model="nombre"
                    />
                  </div>
                </div>
                <br />

                <div class="row">
                  <div class="col-4">
                    <strong>Nombre de usuario:</strong>
                  </div>
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control"
                      @change="comprobarFormato"
                      v-model="nombreReal"
                    />
                  </div>
                </div>
                <br />

                <div class="row">
                  <div class="col-4">
                    <strong>Contraseña:</strong>
                  </div>
                  <div class="col-8">
                    <input
                      type="password"
                      class="form-control"
                      @change="comprobarFormato"
                      v-model="contrasena"
                    />
                  </div>
                </div>
                <br />

                <div class="row">
                  <div class="col-4">
                    <strong>Confirme su Contraseña:</strong>
                  </div>
                  <div class="col-8">
                    <input
                      type="password"
                      class="form-control"
                      @change="comprobarFormato"
                      v-model="contrasena2"
                    />
                  </div>
                </div>
                <br />

                <div class="row">
                  <div class="col-4">
                    <strong>Rol:</strong>
                  </div>
                  <div class="col-8">
                    <select
                      class="form-control form-control-sm"
                      @change="comprobarFormato"
                      v-model="rol"
                    >
                      <option>Cuidador</option>
                      <option>Adoptante</option>
                      <option>Adoptador</option>
                    </select>
                  </div>
                </div>
                <br />

                <div class="row">
                  <div class="col-4">
                    <strong>Correo:</strong>
                  </div>
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control"
                      @change="comprobarFormato"
                      v-model="correo"
                    />
                  </div>
                </div>
                <br />

                <div class="row">
                  <div class="col-4">
                    <strong>Teléfono:</strong>
                  </div>
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control"
                      @change="comprobarFormato"
                      v-model="telefono"
                    />
                  </div>
                </div>
                <br />

                <div class="row">
                  <div class="col-4">
                    <strong>Lugar donde vive:</strong>
                  </div>
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control"
                      @change="comprobarFormato"
                      v-model="lugar"
                    />
                  </div>
                </div>
                <br />

                <div class="row">
                  <div class="col-4">
                    <strong>Información adicional:</strong>
                  </div>
                  <div class="col-8">
                    <textarea type="text" class="form-control" v-model="info" />
                  </div>
                </div>
                <br />

                <div class="row">
                  <div class="col-12">
                    <div class="text-right">
                      <button class="btn btn-danger mr-4">Cancelar</button>
                      <button
                        class="btn btn-success"
                        id="Aceptar"
                        @click="enviarForma"
                      >
                        Aceptar
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <br />
              <div class="alert alert-danger" id="error-contraseña">
                Las contraseñas no coinciden, por favor vuelve a revisar.
              </div>
              <div class="alert alert-danger" id="alerta-error">
                Algún campo obligatorio de datos no posee ningún dato.
              </div>
              <br />
              <strong
                >Datos actualizados nos permiten mantenerte seguro.</strong
              >
            </div>
          </div>
        </div>
      </div>
      <!-- Segunda carta-->
      <div class="col-4">
        <br />
        <div class="card">
          <div class="card-header">¡Añade una imagen!</div>
          <div class="card-body">
            <br /><strong class="control-label col-sm-2">Fotografia:</strong>
            <div class="col-sm-10">
              <input required type="file" @change="enCambioArchivo" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <Footer></Footer>
  </div>
</template>

<script>
import RegistrarUsuarioServicio from "../servicio/RegistrarUsuarioServicio";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import swal from "sweetalert2";

export default {
  name: "RegistroUsuario",
  components: {
    Header,
    Footer,
  },
  mounted() {
    console.log("Componente RegistroUsuario OK.");
  },
  data() {
    return {
      nombre: "",
      nombreReal: "",
      contrasena: "",
      contrasena2: "",
      rol: "",
      correo: "",
      telefono: "",
      lugar: "",
      info: "",
      imagenSeleccionada: null,
    };
  },
  methods: {
    enviarForma(e) {
      e.preventDefault();
      let objectoActual = this;
      let info = {
        nombre: this.nombre,
        nombreReal: this.nombreReal,
        contrasena: this.contrasena,
        rol: this.rol,
        correo: this.correo,
        telefono: this.telefono,
        lugar: this.lugar,
        info: this.info,
        imagenSeleccionada: this.imagenSeleccionada,
      };
      this.registrarUsuario(objectoActual, info);
    },

    registrarUsuario(objetoActual, info) {
      RegistrarUsuarioServicio.registrarUsuario(info)
        .then((respuesta) => {
          if (respuesta.status === 201) {
            swal.fire("Registro exitoso", "Bienvenido", "success");
          }
        })
        .catch((error) => {
          if (error.response.status == 400) {
            swal.fire(
              "Intente nuevamente",
              "El usuario o email ya existe",
              "error"
            );
          }
        });
    },

    enCambioArchivo(event) {
      this.imagenSeleccionada = event.target.files[0];
    },
    comprobarContrasena() {
      if (this.contrasena != this.contrasena2) {
        document.getElementById("error-contraseña").style.display = "block";
        document.getElementById("Aceptar").disabled = true;
      } else {
        document.getElementById("error-contraseña").style.display = "none";
        document.getElementById("Aceptar").disabled = false;
      }
    },
    comprobarDatos() {
      if (
        this.nombre == "" ||
        this.contrasena == "" ||
        this.rol == "" ||
        this.correo == "" ||
        this.nombreReal == "" ||
        this.telefono == "" ||
        this.lugar == ""
      ) {
        document.getElementById("alerta-error").style.display = "block";
        document.getElementById("Aceptar").disabled = true;
        this.comprobarContrasena();
      } else {
        document.getElementById("alerta-error").style.display = "none";
        document.getElementById("Aceptar").disabled = false;
        this.comprobarContrasena();
      }
    },
    comprobarFormato() {
      this.comprobarDatos();
    },
  },
};
</script>

<style scoped>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css);
</style>

<style>
* {
  box-sizing: border-box;
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

body::before {
  content: "";
  width: 100%;
  min-height: 150vh;
  position: fixed;
  top: 0;
  left: 0;

  background: linear-gradient(45deg, #f3e2a9, #effbfb, #58fa58);
  background-attachment: scroll;
  opacity: 0.5;
  z-index: -1;
}

h1 {
  color: #fff;
  text-align: center;
}

.titulo {
  background: #0ea7e7;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-weight: 100;
  font-size: 30px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom: 3px solid #ea484e;
}

.form-control {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}

p.texto {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  text-align: justify;
}

.checkbox {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  border-radius: 0.25em;
  align-items: center;
  cursor: pointer;
}

.imagen {
  display: block;
  margin: auto;
}

.divM {
  color: #000000;
  border: 6px solid;
}

h2,
h3 {
  color: #000000;
  font-weight: bold;
  text-align: left;
}

.h12 {
  color: #000000;
  text-align: center;
}

footer {
  bottom: 0.1cm;
  align-self: auto;
}
</style>