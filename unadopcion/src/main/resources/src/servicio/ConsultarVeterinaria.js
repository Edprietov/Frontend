
import axios from "axios";

const UNADOPCION_API_URL = "/api";
const CONTROLADOR = "/consultar-veterinaria/";
const CONTROLADOR_NOMBRE = "/consultar-veterinaria/nombre/";
const CONTROLADOR_CALIF = "//consultar-veterinaria/calificacion";
const CONTROLADOR_VARIOS = "/consultar-veterinaria/varios";

class ConsultarVeterinaria {
    ConsultarPorNombre(info) {
        return axios.post(UNADOPCION_API_URL + CONTROLADOR_NOMBRE, {
            nombre: info,
        });//enviar como variable en URL
    }
    ConsultarPorCalificacion(info) {
        return axios.post(UNADOPCION_API_URL + CONTROLADOR_CALIF, {
            calificacion: info,
        });//enviar como variable en URL
    }
    ConsultarVarios(info) {
        return axios.post(UNADOPCION_API_URL + CONTROLADOR_VARIOS, {
            nombre: info.nombre,
            calificacion: info.calificacion,
        });//enviar como variable en URL
    }
    Consultar() {
        return axios.post(UNADOPCION_API_URL + CONTROLADOR, {
        });//enviar como variable en URL
    }
}

export default new ConsultarVeterinaria();