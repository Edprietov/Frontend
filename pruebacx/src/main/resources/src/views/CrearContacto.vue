<template>
  <div id="creacionocontacto">
    <Header></Header>

    <div class="container">
      <div class="col-md-8 algo">
        <div class="card">
          <div class="card-header" style="background-color: rgb(31, 35, 236)">
            <div class="text-center">
              <strong v-if="!ver" id="titulocrear">CREAR CONTACTO</strong
              ><strong v-if="ver" id="tituloactualizar"
                >ACTUALIZAR CONTACTO</strong
              >
            </div>
            <div class="text-center" hidden></div>
          </div>

          <div class="card-body">
            <form class="text-right">
              <br />
              <div class="containerd">
                <p style="text-align: center" v-if="!ver" class="text-info">
                  Ingrese los siguientes datos para realizar la creación.
                </p>
                <p style="text-align: center" v-if="ver" class="text-info">
                  Actualice los datos.
                </p>
                <br />
              </div>
              <div class="row register-form">
                <div class="col-2">
                  <strong>Nombre:</strong>
                </div>
                <div class="col-9">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre *"
                    required="true"
                    @change="comprobarFormato"
                    pattern="[a-zA-Z ]{2,20}"
                    v-model="nombre"
                  />
                </div>
              </div>
              <br />

              <div class="row">
                <div class="col-2">
                  <strong>Apellido:</strong>
                </div>
                <div class="col-9">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Apellido *"
                    id="apellido"
                    required="true"
                    pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+${2,20}"
                    @change="comprobarFormato"
                    v-model="apellido"
                  />
                </div>
              </div>
              <br />

              <div class="row">
                <div class="col-2">
                  <strong>Correo:</strong>
                </div>
                <div class="col-9">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Correo *"
                    id="correo"
                    required="true"
                    maxlength="40"
                    pattern="[^@]+@[^@]+\.[a-zA-Z]{2,40}"
                    @change="comprobarFormato"
                    v-model="correo"
                  />
                </div>
              </div>
              <br />

              <div class="row">
                <div class="col-2">
                  <strong>Teléfono:</strong>
                </div>
                <div class="col-9">
                  <input
                    type="text"
                    class="form-control"
                    name="txtEmpPhone"
                    placeholder="Celular *"
                    maxlength="10"
                    id="celular"
                    pattern="[0-9]+"
                    @change="comprobarFormato"
                    v-model="celular"
                  />
                </div>
              </div>
              <br />

              <div class="row">
                <div class="col-2">
                  <strong>Dirección:</strong>
                </div>
                <div class="col-9">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Dirección "
                    id="direccion"
                    v-model="direccion"
                  />
                </div>
              </div>
              <br />

              <div class="row">
                <div class="col-2">
                  <strong>Ciudad:</strong>
                </div>
                <div class="col-9">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Ciudad *"
                    id="ciudad"
                    required="true"
                    maxlength="15"
                    pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+${2,20}"
                    @change="comprobarFormato"
                    v-model="ciudad"
                  />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-2">
                  <strong>País:</strong>
                </div>
                <div class="col-9">
                  <input
                    type="text"
                    class="form-control"
                    @change="comprobarFormato"
                    v-model="pais"
                  />
                </div>
              </div>
              <br />

              <div class="row">
                <div class="col-2">
                  <strong>Código Postal:</strong>
                </div>
                <div class="col-9">
                  <input
                    type="text"
                    class="form-control"
                    maxlength="6"
                    @change="comprobarFormato"
                    placeholder="Código Postal "
                    id="codigo"
                    pattern="[0-9]{6,6}"
                    v-model="codigo"
                  />
                </div>
              </div>
              <br />

              <div class="row">
                <div class="col-12">
                  <div class="text-center">
                    <button
                      class="btn btn-success"
                      id="Aceptar"
                      @click="enviarForma"
                      disabled
                      v-if="!ver"
                    >
                      Crear
                    </button>
                    <button
                      class="btn btn-primary"
                      id="Aceptar"
                      disabled
                      v-if="ver"
                      @click="actualizar"
                    >
                      Actualizar
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <br />
            <br />
            <div class="alert alert-danger col-8" id="alerta-error">
              Debe diligenciar los campos obligatorios para poder crear el
              contacto.
            </div>
            <br />
            <strong>Datos actualizados nos permiten mantenerte seguro.</strong>
          </div>
        </div>
      </div>
    </div>
    <br />
    <Footer></Footer>
  </div>
</template>

<script>
import RegistrarContactoServicio from "../servicio/CrearContactoServicio";
import Actualizar from "@/servicio/ActualizarContactoServicio";
import Consultar from "@/servicio/ConsultarContactos";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import swal from "sweetalert2";

export default {
  name: "CrearContacto",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      nombre: "",
      apellido: "",
      correo: "",
      celular: "",
      pais: "",
      ciudad: "",
      direccion: "",
      codigo: "",
      servidorDatos: "",
      ver: false,
      bloqueo: true,
    };
  },
  methods: {
    enviarForma(e) {
      e.preventDefault();
      let objectoActual = this;
      let info = {
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        celular: this.celular,
        pais: this.pais,
        ciudad: this.ciudad,
        direccion: this.direccion,
        codigo: this.codigo,
      };
      this.bloqueo
        ? console.log("Si, bloqueado")
        : this.registrarContacto(objectoActual, info);
    },

    actualizar(){
      let id = this.$route.params.id;
              let info2 = {
            nombre: this.nombre,
            apellido: this.apellido,
            correo: this.correo,
            celular: this.celular,
            pais: this.pais,
            ciudad: this.ciudad,
            direccion: this.direccion,
            codigo: this.codigo,
      };
this.actualizarcontacto(info2, id);
    },

    registrarContacto(objetoActual, info) {
      RegistrarContactoServicio.registrarContacto(info)
        .then((respuesta) => {
          if (respuesta.status === 201) {
            swal.fire(
              "Usuario creado!",
              "El usuario " +
                respuesta.data.lookupName +
                " ha sido creado exitosamente, su id es " +
                respuesta.data.id,
              "success"
            );
            this.limpiarcampos();
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

    actualizarcontacto(info2, id1) {
      Actualizar.ActualizarContacto(info2, id1)
      .then((respuesta) => {
          if (respuesta.status === 200) {
                   swal.fire({
                    timer: 8000,
                    title: "Contacto Actualizado!",
                    icon: "success",
                  });
                  
          } else {
            console.log("Error");
          }
        })
        .catch((error) => {
          console.log("Error: " + error);
          swal.fire( {timer: 8000, title:"Conexión Fallida",  type:'info', text:"En este momento no hay conexión con el servidor, sin embargo tenemos la ultima consulta realizada"});
        });

      //this.$router.push("/consultar-contactos");
    },

    comprobarDatos() {
      if (
        this.nombre == "" ||
        this.apellido == "" ||
        this.celular == "" ||
        this.correo == "" ||
        this.ciudad == "" ||
        this.pais == ""
      ) {
        document.getElementById("alerta-error").style.display = "block";
        document.getElementById("Aceptar").disabled = true;
      } else {
        document.getElementById("alerta-error").style.display = "none";
        document.getElementById("Aceptar").disabled = false;
        this.bloqueo = false;
      }
    },
    comprobarFormato() {
      this.comprobarDatos();
    },
    limpiarcampos() {
      (this.nombre = ""),
        (this.apellido = ""),
        (this.correo = ""),
        (this.celular = ""),
        (this.pais = ""),
        (this.ciudad = ""),
        (this.direccion = ""),
        (this.codigo = "");
    },
  },
  beforeMount() {
    let idx = this.$route.params.id;
    if (this.$route.params.pagina === "actualizar") {
      this.ver = true;
      Consultar.ConsultarContactoporId(idx)
        .then((respuesta1) => {
          if (respuesta1.status === 200) {
            this.servidorDatos = respuesta1.data.items[0].rows[0];
            this.nombre = this.servidorDatos[1];
            this.apellido = this.servidorDatos[2];
            this.correo = this.servidorDatos[5];
            (this.celular = this.servidorDatos[6]),
              (this.pais = this.servidorDatos[4]),
              (this.ciudad = this.servidorDatos[3]),
              (this.direccion = this.servidorDatos[7]),
              (this.codigo = this.servidorDatos[8]);
          }
        })
        .catch((error) => {
          if (error.response.status == 400) {
            swal.fire(
              "Servidor caido",
              "Tenemos problemas para conectarnos al servidor",
              "error"
            );
          }
        });
    }
  },

  mounted() {},
};
</script>

<style scoped>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css);
</style>

<style>
 {
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

.container {
  margin-top: 3%;
}

form {
  margin-top: 4%;
}

#alerta-error {
  width: 800px;
  margin: 0 auto;
}

.algo {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 1%; /* Added */
}

#titulocrear,
#tituloactualizar {
  font-weight: bold;
  color: white;
}
</style>