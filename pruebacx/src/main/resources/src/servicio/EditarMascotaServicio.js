import axios from "axios";
const UNADOPCION_API_URL = "api";
const CONTROLADOR = "/editar-mascota";



class EditarMascotaServicio{
    editarMascota(info){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR, {
            animalId: info.animalId,
            animalnombre: info.animalnombre,
            animaltipo: info.animaltipo,
            animallugar: info.animallugar,
            animaldescripcion: info.animaldescripcion,
            animalsexo: info.animalsexo,
            animaledad: info.animaledad,
            animalmicrochipid: info.animalmicrochipid,
            animalesterilizacion: info.animalesterilizacion,
        });
    }


}

export default new EditarMascotaServicio();