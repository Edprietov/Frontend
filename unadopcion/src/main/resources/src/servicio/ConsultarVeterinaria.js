
import axios from "axios";

const UNADOPCION_API_URL = "http://localhost:8080";
const CONTROLADOR = "/consultar-veterinaria/";

class ConsultarVeterinaria {
    ConsultarPorNombre(info) {
        return axios.get(UNADOPCION_API_URL + CONTROLADOR, {
            nombre: info.nombre,
            calificacion: info.calificacion,
        });//enviar como variable en URL
    }
    ConsultarPorCalificacion(info) {
        return axios.get(UNADOPCION_API_URL + CONTROLADOR, {
            calificacion: info.calificacion,
        });//enviar como variable en URL
    }
}

export default new ConsultarVeterinaria();