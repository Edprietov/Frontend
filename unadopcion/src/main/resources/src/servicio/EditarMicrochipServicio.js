import axios from "axios";
const UNADOPCION_API_URL = "api";
const CONTROLADOR = "/editar-microchip";



class EditarMicrochipServicio{
    editarMicrochipID(info){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR, {
            animalId: info.animalId,
            animalmicrochipid: info.animalmicrochipid,
        });
    }


}

export default new EditarMicrochipServicio();