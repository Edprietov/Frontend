<template>
  <div id="d" >
    <div class="row justify-content-center" >
      <div class="col-7">
        <!-- primer carta-->
        <div class="col-10" >
          <div class="card" >
            <div class="card-header">
              <b>Hay que implementar esto</b>
            </div>

            <div class="card-body ">
              <form class="text-right" id="formulario">

                <div class="form-row">
                  <label class="control-label col-sm-2" ><strong>Otra info</strong></label>
                  <div class="col-sm-10">
                    <input  required type="text"  class="form-control" >
                  </div>
                </div>
                <br>
                <br>
                <br><button  class="btn btn-success">Enviar</button>

              </form>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "SolicitudAdopcion",
  components:{

  }, methods:{
    f(){

    }
  },
  created() {
  },
  beforeDestroy() {

  }
}
</script>

<style scoped>

</style>