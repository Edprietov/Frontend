import axios from "axios";

const UNADOPCION_API_URL = "/api";
const CONTROLADOR = "/consultar-vacuna/";

class BuscarVacunaServicio{
    buscarVacunaByNombre(vacunaNombre){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR + vacunaNombre);
    }
}

export default new BuscarVacunaServicio();