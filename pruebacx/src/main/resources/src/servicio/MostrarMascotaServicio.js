import axios from "axios";

const UNADOPCION_API_URL = "/api";
const CONTROLADOR = "/mostrar-mascota/";

class MostrarMascotaServicio{
    mostrarMascota(animalId){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR + animalId);
    }
}

export default new MostrarMascotaServicio();