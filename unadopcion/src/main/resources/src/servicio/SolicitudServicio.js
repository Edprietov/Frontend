import axios from "axios";
const UNADOPCION_API_URL = "api";
const CONTROLADOR = "/Solicitud";

class RealizarSolicitud{
    RealizarSolicitud(anim_id, google_Id){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR + "/Realizar/" + anim_id + "/" + google_Id);
    }


}

export default new RealizarSolicitud();