import axios from "axios";

const UNADOPCION_API_URL = "/api";
const CONTROLADOR = "/registrar-veterinaria";

class RegistrarVeterinariaServicio {
    registrarVeterinaria(info){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR, {
            nombre: info.nombre,
            latitud: info.latitud,
            longitud: info.longitud,
            direccion: info.direccion,
            numero: info.numero,
            sitioWeb: info.sitioWeb,
            descripcion: info.descripcion,

        });
    }
}


export default new RegistrarVeterinariaServicio();