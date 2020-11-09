<template>

  <div>
    <LoggedHeader></LoggedHeader>


         <EditarUsuario></EditarUsuario>
    <Footer></Footer>


  </div>
</template>

<script>
import EditarUsuario from "@/components/EditarUsuario";
import LoggedHeader from "@/components/LoggedHeader";
import Footer from "@/components/Footer";
import EditarUsuarioServicio from "@/servicio/EditarUsuarioServicio";

export default {
  name: "EditarUsuarioVista",
  components: {
    EditarUsuario, LoggedHeader, Footer
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
    }


  }
}

</script>


<style scoped>

</style>

