<template>
  <div id="Solicitud">
    <LoggedHeader></LoggedHeader>
    <br />
    <SolicitudMascota></SolicitudMascota>
    <br />
    <Footer></Footer>
  </div>
</template>

<script>
import LoggedHeader from "../components/LoggedHeader";
import Footer from "../components/Footer";
import SolicitudMascota from "../components/Solicitudes/SolicitudMascota";
//import swal from "sweetalert2";

export default {
  name: "Solicitud",
  components: {
    LoggedHeader,
    Footer,
    SolicitudMascota,
  },
};
</script>

<style>
</style>