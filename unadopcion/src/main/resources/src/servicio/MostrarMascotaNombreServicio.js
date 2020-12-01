import axios from "axios";

const UNADOPCION_API_URL = "/api";
const CONTROLADOR = "/consultar-mascota/";

class MostrarMascotaNombreServicio{
    buscarAnimalPorNombre(nombre){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR + nombre);
    }
}

export default new MostrarMascotaNombreServicio();