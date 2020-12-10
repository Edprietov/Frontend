import axios from "axios";
const UNADOPCION_API_URL = "api";
const CONTROLADOR = "/editar-esterilizacion";



class EditarEsterilizacionServicio{
    editarEsterilizacion(info){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR, {
            animalId: info.animalId,
            animalesterilizacion: info.animalesterilizacion,
        });
    }


}

export default new EditarEsterilizacionServicio();