import axios from "axios";
const UNADOPCION_API_URL = "api";
const CONTROLADOR = "/Solicitud";

class RealizarSolicitud{
    RealizarSolicitud(anim_id, google_Id){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR + "/Realizar/" + anim_id + "/" + google_Id);
    }

    TraerSolicitudPendiente(info){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR + "/Consultar-Pendiente", {
            id: info.id,
            animid: info.animid,
            fecha: info.fecha,
            estado: info.estado,
            personaid: info.personaid,
            personaNombre: info.personaNombre,
            animNombre: info.animNombre,
        });
    }
    
    cancelarSolicitud(id){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR + "/Cancelar/" + id)
    }

    RechazarSolicitud(id){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR + "/Rechazar/" + id)
    }

    AceptarSolicitud(id, google_Id){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR + "/Aceptar/" + id + "/" + google_Id)
    }
}


export default new RealizarSolicitud();