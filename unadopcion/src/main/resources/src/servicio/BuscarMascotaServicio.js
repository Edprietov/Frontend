import axios from "axios";

const UNADOPCION_API_URL = "/api";
const CONTROLADOR = "/buscar-mascota/";

class BusquedaMascotaServicio{
    buscarPorTipo(tipo){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR + tipo);//enviar como variable en URL
    }
}

export default new BusquedaMascotaServicio();