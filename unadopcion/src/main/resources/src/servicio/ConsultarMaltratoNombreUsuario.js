
import axios from "axios";

const UNADOPCION_API_URL = "/api";
const CONTROLADOR = "/consultar-maltrato/usuario/";

class ConsultarMaltratoNombreUsuario {
    ConsultarPorNombre(nombre) {
        return axios.get(UNADOPCION_API_URL + CONTROLADOR + nombre);//enviar como variable en URL
    }
}

export default new ConsultarMaltratoNombreUsuario();