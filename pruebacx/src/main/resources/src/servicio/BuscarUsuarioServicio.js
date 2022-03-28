
import axios from "axios";

const UNADOPCION_API_URL = "/api";
const CONTROLADOR = "/mostrar-usuarios/";

class BuscarUsuarioServicio{
    buscarPorNombre(nombre){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR + nombre);//enviar como variable en URL
    }
}

export default new BuscarUsuarioServicio();