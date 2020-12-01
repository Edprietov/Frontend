<template>
  <div id="ingresar_vacuna">
    <LoggedHeader></LoggedHeader>

    <br />
    <div class="container">
      <div class="row justify-content-center"></div>
      <div class="card">
        <div class="card-header">
          <div class="text-center"><strong>INGRESO DE VACUNAS</strong></div>
        </div>
        <div class="card-body">
          <form class="text-left" id="formulario">
            <br />
            <div class="container">
              <p style="text-align: left" class="text-info">
                En este formulario puede ingresar toda la información de las nuevas vacunas para diferentes tipos de mascotas:
              </p>
            </div>

            <br><div class="form-row">
            <label class="control-label col-sm-2" for="vacunaNombre"
            ><strong>Nombre de la vacuna:</strong></label
            >
            <div class="col-sm-10">
              <input
                  required
                  type="text"
                  id="vacunaNombre"
                  class="form-control"
                  v-model="vacunaNombre"
              />
            </div>
          </div>

            <br />
            <div class="form-row">
              <strong class="control-label col-sm-2" for="vacunaTipo"
              >Tipo de Vacuna:</strong
              >
              <div class="col-sm-10">
                <select
                    class="browser-default custom-select"
                    id="vacunaTipo"
                    v-model="vacunaTipo"
                    required
                >
                  <option selected></option>
                  <option>Desparacitacion</option>
                  <option>Dosis Inicial</option>
                  <option>Dosis Unica</option>
                  <option>Refuerzo</option>
                </select>
              </div>
            </div>

            <br />
            <div class="form-row">
              <strong class="control-label col-sm-2" for="vacunaClase"
              >Clase de vacuna:</strong
              >
              <div class="col-sm-10">
                <select
                    class="browser-default custom-select"
                    id="vacunaClase"
                    v-model="vacunaClase"
                    required
                >
                  <option selected></option>
                  <option>Canino</option>
                  <option>Felino</option>
                  <option>Equino</option>
                  <option>Porcino</option>
                  <option>Bobino</option>
                  <option>Ave</option>
                </select>
              </div>
            </div>
          </form>
          <br><button  class="btn btn-success" @click="enviarDatos">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrarVacunacion"
}
</script>

<style scoped>

</style>