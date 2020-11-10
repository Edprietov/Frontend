import axios from "axios";

const UNADOPCION_API_URL = "/api";
const CONTROLADOR = "/contacto";

class ContactoServicio{

    enviarDatosContacto(info){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR, {
            contactoNombre: info.contactoNombre,
            contactoCorreo: info.contactoCorreo,
            contactoTipo: info.contactoTipo,
            contactoCelular: info.contactoCelular,
            contactoConsulta: info.contactoConsulta,
        } );


    }
}

export default new ContactoServicio();