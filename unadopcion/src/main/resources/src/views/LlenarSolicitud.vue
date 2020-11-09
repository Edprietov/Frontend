<template>

  <div>
     <LoggedHeader></LoggedHeader>
     <EditarUsuario></EditarUsuario>
     <!--<SolicitudAdopcion></SolicitudAdopcion>-->


    <Footer></Footer>
  </div>
</template>


<script>

window.onunload = function(e){
  alert(e);

}

import EditarUsuario from "@/components/EditarUsuario";
//import SolicitudAdopcion from "@/components/SolicitudAdopcion";
import Footer from "@/components/Footer";
import LoggedHeader from "@/components/LoggedHeader";

export default {
  name: "LlenarSolicitud",
  components:{
    LoggedHeader,
    EditarUsuario, Footer
  },
  methods:{
    enviarForma(){
        alert();
    }
  },
   beforeRouteLeave(){
    alert("Hm");
   }
}
</script>

<style scoped>

</style>