<template>
  <div id="Solicitud">
    <LoggedHeader></LoggedHeader>
    <br />
    <SolicitudMascota></SolicitudMascota>
    <br />
    <SolicitudTabla></SolicitudTabla>
    <br />
    <Footer></Footer>
  </div>
</template>

<script>
import LoggedHeader from "../components/LoggedHeader";
import Footer from "../components/Footer";
import SolicitudMascota from "../components/Solicitudes/SolicitudMascota";
import SolicitudTabla from "../components/Solicitudes/SolicitudTabla";
//import swal from "sweetalert2";

export default {
  name: "Solicitud",
  components: {
    LoggedHeader,
    Footer,
    SolicitudMascota,
    SolicitudTabla,
  },
};
</script>