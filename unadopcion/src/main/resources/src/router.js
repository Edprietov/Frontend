import Vue from 'vue';
import Router from 'vue-router';
import Principal from "@/views/Principal";
import RegistroUsuario from "@/views/RegistroUsuario";
import RegistroMascota from "@/views/RegistroMascota";
import Denuncia from "@/components/Denuncia";
import CuidadosMascota from "@/views/CuidadosMascota";
import Contacto from "@/views/Contacto";
import EditarUsuario from "@/views/EditarUsuario";
import Inicio from "@/views/Inicio";
import ConsultarContactos from "@/components/ConsultarContactos";
import RegistroVeterinaria from "@/views/RegistroVeterinaria";
import EditarMascota from "@/components/EditarMascota";
import MostrarMascotaNombre from "@/components/MostrarMascotaNombre";


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
            path: "/denuncia",
            name: "denuncia",
            component: Denuncia
        },
        {
            path: "/consultar-contactos",
            name: "consultarcontactos",
            component: ConsultarContactos
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
            path: "/registro-veterinaria",
            name: "registro-veterinaria",
            component: RegistroVeterinaria
        },
        {
            path: "/consultar-mascota",
            name: "consultarmascota",
            component: MostrarMascotaNombre
        },
        {
            path: "/editar-mascota",
            name: "editarmascota",
            component: EditarMascota
        },
    ]
})
