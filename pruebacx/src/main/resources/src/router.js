import Vue from 'vue';
import Router from 'vue-router';
import CrearContacto from "@/views/CrearContacto";
import Contacto from "@/views/Contacto";
import Principal from "@/views/Principal";
import ConsultarContactos from "@/components/ConsultarContactos";


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
            path: "/consultar-contactos",
            name: "consultarcontactos",
            component: ConsultarContactos
        },
        {
            path: "/contacto",
            name: "contacto",
            component: Contacto
        },
    ]
})
