<template>
  <div id="principal">
    <Header></Header>
    <div class="container-fluid">
        <div class="row"> <img src="@/assets/HeroSection.png" alt="Banner principal" width="100%"> </div>
    </div>

    <div class="container">
      <div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
      </div>
    </div>

   


    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Principal",
  components: {
    Header, Footer
  }
}
</script>
