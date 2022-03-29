import Vue from 'vue';
import Router from 'vue-router';
import CrearContacto from "@/views/CrearContacto";
import RegistroMascota from "@/views/RegistroMascota";
import Contacto from "@/views/Contacto";
import EditarUsuario from "@/views/EditarUsuario";
import Inicio from "@/views/Inicio";
import Principal from "@/views/Principal";
import ConsultarContactos from "@/components/ConsultarContactos";
import EditarMascota from "@/components/EditarMascota";


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "principal",
            component: Principal
        },
        {
            path: "/crear-contacto",
            name: "crearcontacto",
            component: CrearContacto
        },
        {
            path: "/editar-contacto",
            name: "editarcontacto",
            component: CrearContacto
        },
        {

            path: "/registro-mascota",
            name: "registromascota",
            component: RegistroMascota
        },
        {
            path: "/consultar-contactos",
            name: "consultarcontactos",
            component: ConsultarContactos
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
            path: "/editar-mascota",
            name: "editarmascota",
            component: EditarMascota
        },
    ]
})
