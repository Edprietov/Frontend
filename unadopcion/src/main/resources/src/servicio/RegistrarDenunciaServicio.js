import axios from "axios";

const UNADOPCION_API_URL = "/api";
const CONTROLADOR = "/denunciar-maltrato";

class RegistrarDenunciaServicio {
    registrarDenuncia(info){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR, {
            nombreUsuario:info.nombreUsuario,
            animalId:info.animalId,
            denunTipo:info.denunTipo,
            denunDescrip:info.denunDescrip,
            detalles:info.detalles
        });
    }
}


export default new RegistrarDenunciaServicio();