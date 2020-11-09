import Vue from 'vue';
import Router from 'vue-router';
import Principal from "@/views/Principal";
import RegistroUsuario from "@/views/RegistroUsuario";
import RegistroMascota from "@/views/RegistroMascota";
import Denuncia from "@/components/Denuncia";
import CuidadosMascota from "@/views/CuidadosMascota";
import Contacto from "@/views/Contacto";
import BusquedaMascota from "@/views/BusquedaMascota";
import Logeo from "@/views/Logeo";
import EditarUsuario from "@/views/EditarUsuario";
import Adoptar from "@/views/Adoptar";
import Inicio from "@/views/Inicio";
import MisAdopciones from "@/views/MisAdopciones";
import ConsultarMaltrato from "@/components/ConsultarMaltrato";
//import ConsultarMaltratoNombreUsuario from "@/components/ConsultarMaltratoNombreUsuario";
import LlenarSolicitud from "@/views/LlenarSolicitud";





Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            alias: "/principal",
            name: "principal",
            component: Principal
        },
        {
            path: "/registro",
            name: "registrousuario",
            component: RegistroUsuario
        },
        {

            path: "/registro-mascota",
            name: "registromascota",
            component: RegistroMascota
        },
        {
            path: "/buscar-mascota",
            name: "buscarmascota",
            component: BusquedaMascota
        },
        {
            path: "/denuncia",
            name: "denuncia",
            component: Denuncia
        },
        {
            path: "/consultar-maltrato",
            name: "consultarmaltrato",
            component: ConsultarMaltrato
        },
        {
            path: "/cuidados",
            name: "cuidadosmascota",
            component: CuidadosMascota
        },
        {
            path: "/contacto",
            name: "contacto",
            component: Contacto
        },
        {
            path: "/logeo",
            name: "logeo",
            component: Logeo
        },
        {
            path: "/editar-usuario",
            name: "editarusuario",
            component: EditarUsuario
        },
        {
            path: "/inicio/:id",
            name: "inicio",
            component: Inicio,

        },
        {
            path: "/adoptar",
            name: "adoptar",
            component: Adoptar
        },
        {
            path: "/solicitud",
            name: "solicitud",
                component: LlenarSolicitud
        },
        {
            path: "/mis-adopciones",
            name: "misadopciones",
            component: MisAdopciones
        },
    ]
})
