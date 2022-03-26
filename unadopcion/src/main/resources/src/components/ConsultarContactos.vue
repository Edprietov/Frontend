<template>
  <div card>
    <LoggedHeader></LoggedHeader>

    <div class="form-row" id="caja">
      <label class="control-label col-sm-1" for="nombreContactoFiltro"
        ><strong>Nombre:</strong></label
      >
      <div class="col-sm-0">
        <input
          required
          type="text"
          id="nombreContactoFiltro"
          class="form-control"
          v-model="nombreContactoFiltro"
          @keypress.self="filtrar"
          @keydown.delete="filtrar"
        />
      </div>
      <a id="myLink" @click="limpiarCampoNombre">
        <img src="@/assets/x-circle.svg" alt="iconoBorrar" id="iconoBorrar" />
      </a>

      <label class="control-label col-sm-1" for="ciudadFiltro"
        ><strong>Ciudad:</strong></label
      >
      <div class="col-sm-0">
        <input
          required
          type="text"
          id="ciudadFiltro"
          class="form-control"
          v-model="ciudadFiltro"
          @keypress.self="filtrar"
          @keyup.delete="filtrar"
        />
      </div>
      <a id="myLink" @click="limpiarCampoCiudad">
        <img src="@/assets/x-circle.svg" alt="iconoBorrar" id="iconoBorrar" />
      </a>
      <label class="control-label col-sm-1" for="correoFiltro"
        ><strong>Correo:</strong></label
      >
      <div class="col-sm-0">
        <input
          required
          type="text"
          id="correoFiltro"
          class="form-control"
          v-model="correoFiltro"
          @keypress.self="filtrar"
          @keydown.delete="filtrar"
        />
      </div>
      <a id="myLink" @click="limpiarCampoCorreo">
        <img src="@/assets/x-circle.svg" alt="iconoBorrar" id="iconoBorrar" />
      </a>
      <label class="control-label col-sm-1" for="telefonoFiltro"
        ><strong>Celular:</strong></label
      >
      <div class="col-sm-1">
        <input
          required
          type="text"
          id="telefonoFiltro"
          class="form-control"
          v-model="telefonoFiltro"
          @keypress.self="filtrar"
          @keydown.delete="filtrar"
        />
      </div>
      <a id="myLink" @click="limpiarCampoCelular">
        <img src="@/assets/x-circle.svg" alt="iconoBorrar" id="iconoBorrar" />
      </a>
      <button class="btn btn-success" id="botonFiltro" @click="filtrar">
        Filtrar
      </button>
    </div>
    <table class="table" aria-describedby="consultarM">
      <thead>
        <tr>
          <th scope="col"># Id</th>
          <th scope="col">Id Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Correo</th>
          <th scope="col">Celular</th>
          <th scope="col">Ciudad</th>
          <th scope="col">País</th>
          <th scope="col">Actualizar</th>
          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="valor in servidorDatos" :key="valor.id">
          <td>{{ valor[0] }}</td>
          <td>{{ valor[1] !== null ? valor[1] : "-" }}</td>
          <td>{{ valor[2] !== null ? valor[2] : "-" }}</td>
          <td>{{ valor[5] !== null ? formatear(valor[5]) : "-" }}</td>
          <td>{{ valor[6] !== null ? valor[6] : "-" }}</td>
          <td>{{ valor[3] !== null ? valor[3] : "-" }}</td>
          <td>{{ valor[4] !== null ? formatearPais(valor[4]) : "-" }}</td>
          <td><button class="btn btn-outline-success">Reset</button></td>
          <td><button class="btn btn-outline-success">Reset</button></td>
        </tr>
      </tbody>
    </table>
    <footer><Footer></Footer></footer>
  </div>
</template>

<script>
import Consultar from "@/servicio/ConsultarContactos";
import Paises from "@/servicio/PaisServicio";
import Footer from "./Footer";
import LoggedHeader from "@/components/Header";

export default {
  data() {
    return {
      nombreContactoFiltro: "",
      ciudadFiltro: "",
      correoFiltro: "",
      telefonoFiltro: "",
      servidorDatos: "",
      copiaDatos: "",
      auxDatos: [],
      paises: "",
    };
  },
  components: {
    LoggedHeader,
    Footer,
  },
  methods: {
    enviarForma() {
      this.ConsultarContactos();
    },
    ConsultarContactos() {
      Consultar.ConsultarTodosContactos()
        .then((respuesta) => {
          if (respuesta.status === 200) {
            //console.log("Respuesta" + JSON.stringify(respuesta.data.items[0].rows));
            this.servidorDatos = respuesta.data.items[0].rows;
            this.copiaDatos = this.servidorDatos;
          } else {
            console.log("Error");
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            console.log("Error:" + error.response.message);
          }
        });
      //this.servidorDatos = [["14","Ángela","Monroy","Bogotá","2","angelabibiana.monroyvalbuena@co.scotiabankcolpatria.com.invalid","3042955416"],["15","Hugo","Casas","Bogotá","2","hugcas@eltiempo.com.invalid",null],["16","Martín","Parra","Bogotá","2","martin.parra@aviatur.com.invalid",null],["17","María Camila","Serrano","Bogotá","2","maria.serrano@experian.com.invalid",null],["18","Martha Lupe","Mendez","Bogotá","2","martam@javeriana.edu.co.invalid",null],["21","Luisa","Ríos","Bogotá","2","luisa.rios@corficolombiana.com.invalid",null],["22","Cristina","Fonseca","Bogotá","2","cristina.fonseca@facilpass.com.invalid",null],["24","Mario","Rodriguez","Bogotá","2","mario.rodriguez.gomez@zurich.com.invalid",null],["25","Martha Cecilia","Rojas Ramirez","Bogotá","2","mcrojasr@compensar.com.invalid",null],["26","Daniela","Morales","Bogotá","2","daniela.morales@segurosbolivar.com.invalid",null],["27","Celso","Ramirez","Santo Domingo",null,"ramirezc@soluciones-globales.net.invalid",null],["28","Liliana","Diaz","Bogotá","2","ldiazr@cremil.gov.co.invalid",null],["30","Diego","Sandoval",null,null,"dfsandoval@falabella.com.co.invalid",null],["31","William","Tellez","Bogotá","2","gerente.proyectos7@infotic.co.invalid",null],["33","Andres","Rivera(provisional)",null,"2",null,null],["34","Alejandro","Aguirre","Bogotá","2","soportecorporativo@usb.edu.co.invalid",null],["36","Lina","Currea","Bogotá","2","lina.currea@cuperz.com.invalid",null],["46","Emerson","Dominguez","BOGOTÁ","2","dominguezemerson@gmail.com.invalid",null],["47","Cristhian","Alarcon","BOGOTÁ","2","cristhian.alarcon@multivacacionesdecameron.com.invalid",null],["48","Jorge","Jaimes","Bogotá","2","jljaimes@almaviva.com.co.invalid",null],["51","Luis","Valencia","Bogotá","2","luis.valencia@dnbc.gov.co.invalid",null],["52","Angela","Talero","Bogotá","2","angela.talero@revistadiners.com.co.invalid",null],["53","Luis Eduardo","Sáenz Cifuentes","Bogotá","2","lsaenz@fundaciongruposocial.co.invalid",null],["54","Oscar","Rocha","Bogotá","2","orocha@globalseguros.co.invalid",null],["57","Kira Elvira","Angulo Arias","Bogotá","2","kira.angulo@entelgy.com.invalid",null]];
        this. ConsultarPaisesTodos();
    },
    filtrar() {
      if (
        this.nombreContactoFiltro == "" &&
        this.ciudadFiltro == "" &&
        this.correoFiltro == "" &&
        this.telefonoFiltro == ""
      ) {
        this.servidorDatos = this.copiaDatos;
      } else {
        this.servidorDatos = this.copiaDatos;
        let datos = this.servidorDatos;
        this.auxDatos = [];

        for (let x in datos) {
          datos[x][1] = datos[x][1] == null ? "-" : datos[x][1];
          datos[x][2] = datos[x][2] == null ? "-" : datos[x][2];
          datos[x][6] = datos[x][6] == null ? "-" : datos[x][6];
          datos[x][3] = datos[x][3] == null ? "-" : datos[x][3];
          datos[x][5] = datos[x][5] == null ? "-" : datos[x][5];
          datos[x][6] = datos[x][6] == null ? "-" : datos[x][6];
          if (
            datos[x][1].includes(this.nombreContactoFiltro) &&
            datos[x][3].includes(this.ciudadFiltro) &&
            datos[x][5].includes(this.correoFiltro) &&
            datos[x][6].includes(this.telefonoFiltro)
          ) {
            this.auxDatos.push(datos[x]);
          }
        }
        this.servidorDatos = this.auxDatos;
      }
      },

   ConsultarPaisesTodos() {
      Paises.ConsultarPaises()
        .then((respuesta) => {
          if (respuesta.status === 200) {
            console.log("Respuesta" + JSON.stringify(respuesta.data.items[0].rows));
            this.paises = respuesta.data.items[0].rows;
          } else {
            console.log("Error");
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            console.log("Error:" + error.response.message);
          }
        });
    },

    formatear(correo){
      return correo.replace('.invalid', '');
    },

    formatearPais(codigo){
      for(let x in this.paises){
        if( this.paises[x][0] == codigo ){
          return this.paises[x][1];
        }
      }
    },

    limpiarCampoNombre() {
      this.nombreContactoFiltro = "";
      this.filtrar();
    },
    limpiarCampoCiudad() {
      this.ciudadFiltro = "";
       this.filtrar();
    },
    limpiarCampoCorreo() {
      this.correoFiltro = "";
      this.filtrar();
    },
    limpiarCampoCelular() {
      this.telefonoFiltro = "";
       this.filtrar();
    },
  },
  beforeMount() {
    this.ConsultarContactos();
  },
  name: "ConsultarContactos",
  mounted() {},
};
</script>

<style>
footer {
  position: absolute;
  bottom: 0.1cm;
  align-self: auto;
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

#caja {
  margin-top: 2%;
  margin-left: 5%;
}

.table {
  margin-top: 2%;
}

#botonFiltro {
  margin-left: 3%;
}

.btn-danger {
  height: 1%;
  width: 1%;
}

#iconoBorrar {
  height: 50%;
  width: 100%;
  margin-top: 20%;
}
</style>