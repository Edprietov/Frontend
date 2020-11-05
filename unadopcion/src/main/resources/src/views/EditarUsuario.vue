<template>
  <div id="registrousuario">
    <!--@private byte[] usuarioFoto;-->
    <Header></Header>
    <div class="row">
      <div class="col-7">
        <br />
        <!-- primer carta-->
        <div class="col-8">
          <div class="card">
            <div class="card-header">
              <b>EU Edita tu información para manternos al día!</b>
            </div>

            <div class="card-body">
              <form @submit="enviarDatos">
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
                        @click="enviarDatos"
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
import Header from "../components/Header";
import Footer from "../components/Footer";
import EditarUsuario from "../servicio/EditarUsuarioServicio";
import EditarUsuarioServicio from "../servicio/EditarUsuarioServicio";
import swal from "sweetalert2";

export default {
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
      datosServidor: "",
    };
  },
  mounted() {
    console.log("Componente RegistroUsuario OK.");
  },
  methods: {
    actualizarDatos() {
      EditarUsuarioServicio.ActualizarUsuario(this.nombre)
        .then((respuesta) => {
          if (respuesta.status === 200) {
            this.datosServidor = respuesta.data;
            this.nombre = this.datosServidor.nombre;
            this.contrasena = this.datosServidor.contrasena;
            this.correo = this.datosServidor.correo;
            this.telefono = this.datosServidor.telefono;
          } else {
            alert("Error");
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            alert("Pucha error:" + error.response.message);
          }
        });
    },

    enviarDatos(e) {
      e.preventDefault();
      //diccionario para ser convertido en JSON
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
      this.editar(info);
    },

    editar(datos) {
      EditarUsuario.EditarUsuario(datos)
        .then((respuesta) => {
          if (respuesta.status === 200)
            swal.fire("Registro exitoso", "Gracias por actualizar sus datos", "success");
        })
        .catch((error) => {
          if (error.response.status == 409) {
            swal.fire(
              "Intente nuevamente",
              "Conflicto de autenticación por favor inicie sesion nuevamente",
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
  name: "EditarUsuario",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
</style>