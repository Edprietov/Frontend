
import axios from "axios";

const UNADOPCION_API_URL = "/api";
const CONTROLADOR = "/consultar-maltrato";

class ConsultarMaltratoServicio {
    ConsultarMaltrato(info) {
        return axios.post(UNADOPCION_API_URL + CONTROLADOR, {
            nombreUsuario: info.nombreUsuario,
            idMascota: info.idMascota,
            fecha: info.fecha,
        });//enviar como variable en URL

    }
}

export default new ConsultarMaltratoServicio();