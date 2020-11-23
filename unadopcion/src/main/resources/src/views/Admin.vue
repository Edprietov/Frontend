<template>
   <div  class="container card" >
     <LoggedHeader></LoggedHeader>
     <BuscarUsuario></BuscarUsuario>
     <Footer></Footer>

   </div>
</template>

<script>
import BuscarUsuario from "@/components/BuscarUsuario";
import LoggedHeader from "@/components/LoggedHeader";
import Footer from "@/components/Footer";
export default {
  name: "Admin",
  components: {
    LoggedHeader,
    BuscarUsuario,
    Footer
  }
}
</script>

<style scoped>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css);
</style>