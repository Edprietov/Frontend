import axios from "axios";

const UNADOPCION_API_URL = "/api";
const CONTROLADOR = "/consultar-veterinarias/";

class BuscarVeterinariaServicio{
    buscarVeterinariaByNombre(nombre){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR + nombre);
    }
}

export default new BuscarVeterinariaServicio();