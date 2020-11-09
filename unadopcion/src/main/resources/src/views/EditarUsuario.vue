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

export default {
  name: "EditarUsuarioVista",
  components:{
    EditarUsuario, LoggedHeader, Footer
  }
}
</script>

<style scoped>

</style>